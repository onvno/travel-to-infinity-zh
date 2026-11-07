"""Render each caption through the existing local VoiceStudio OmniVoice backend.

An ad-hoc synthetic reference is uploaded only to loopback; no saved voice
profiles or global engine settings are modified. Activation is atomic.
"""
import argparse
import hashlib
import json
import subprocess
import time
import urllib.error
import urllib.request
import uuid
from pathlib import Path
from narration_text import spoken_text

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--voice', choices=['female', 'male'], default='female')
parser.add_argument('--limit', type=int)
parser.add_argument('--activate', action='store_true')
parser.add_argument('--steps', type=int, default=32)
args = parser.parse_args()
BASE = 'http://127.0.0.1:3900'
OPENER = urllib.request.build_opener(urllib.request.ProxyHandler({}))
REFERENCE = ROOT / f'qa/local-voice/{args.voice}-reference.wav'
REFERENCE_REQUEST = json.loads(REFERENCE.with_suffix('.json').read_text())
REFERENCE_TEXT = REFERENCE_REQUEST['request']['input']
REFERENCE_SHA = hashlib.sha256(REFERENCE.read_bytes()).hexdigest()
OUTPUT = ROOT / 'dist/audio/omnivoice'
OUTPUT.mkdir(parents=True, exist_ok=True)
RAW = ROOT / 'qa/local-voice/raw'
RAW.mkdir(parents=True, exist_ok=True)


def request_json(path):
    with OPENER.open(BASE + path, timeout=20) as response:
        return json.load(response)


def multipart(fields, reference):
    boundary = '----TravelNarration' + uuid.uuid4().hex
    body = bytearray()
    for name, value in fields.items():
        body.extend(f'--{boundary}\r\nContent-Disposition: form-data; name="{name}"\r\n\r\n{value}\r\n'.encode())
    body.extend(f'--{boundary}\r\nContent-Disposition: form-data; name="ref_audio"; filename="synthetic-reference.wav"\r\nContent-Type: audio/wav\r\n\r\n'.encode())
    body.extend(reference.read_bytes())
    body.extend(f'\r\n--{boundary}--\r\n'.encode())
    return bytes(body), f'multipart/form-data; boundary={boundary}'


def probe(path):
    return json.loads(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries',
        'format=duration:stream=sample_rate,channels', '-of', 'json', str(path)], text=True))


health = request_json('/health')
engines = request_json('/engines/tts')
if engines.get('active') != 'omnivoice' or engines.get('active_model') != 'k2-fsa/OmniVoice':
    raise SystemExit('Expected the already configured OmniVoice engine; no global engine switch will be made.')
cues = json.loads((ROOT / 'scripts/narration-cues.json').read_text())
if args.limit:
    cues = cues[:args.limit]
results = []
for cue in cues:
    # Spoken punctuation is independent of the on-screen typography.
    spoken = spoken_text(cue['text'])
    fields = dict(text=spoken, language='zh', engine='omnivoice', ref_text=REFERENCE_TEXT,
                  num_step=args.steps, seed=20261107, speed=1.0, effect_preset='raw',
                  denoise='true', max_chunk_chars=0)
    signature = hashlib.sha256(json.dumps([fields, REFERENCE_SHA], ensure_ascii=False, sort_keys=True).encode()).hexdigest()[:12]
    name = f'{cue["id"]:03d}-{args.voice}-{signature}'
    raw = RAW / f'{name}.wav'
    mp3 = OUTPUT / f'{name}.mp3'
    started = time.monotonic()
    if not raw.exists():
        body, mime = multipart(fields, REFERENCE)
        request = urllib.request.Request(BASE + '/generate', data=body, headers={'Content-Type': mime})
        try:
            with OPENER.open(request, timeout=600) as response:
                data = response.read()
                if not response.headers.get_content_type().startswith('audio/') or len(data) < 1000:
                    raise RuntimeError('Unexpected non-audio response')
        except urllib.error.HTTPError as error:
            raise RuntimeError(f'Cue {cue["id"]}: HTTP {error.code}: {error.read().decode(errors="replace")[:600]}') from error
        temporary = raw.with_suffix('.partial.wav')
        temporary.write_bytes(data)
        metadata = probe(temporary)
        if float(metadata['format']['duration']) <= .2:
            raise RuntimeError(f'Cue {cue["id"]}: audio too short')
        temporary.replace(raw)
        raw.with_suffix('.request.json').write_text(json.dumps({
            'backend': health, 'request': fields, 'referenceSha256': REFERENCE_SHA,
            'generationSeconds': time.monotonic()-started, 'bytes': len(data),
        }, ensure_ascii=False, indent=2)+'\n')
    if not mp3.exists():
        temporary = mp3.with_suffix('.partial.mp3')
        subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(raw),
                        '-codec:a', 'libmp3lame', '-b:a', '128k', str(temporary)], check=True)
        temporary.replace(mp3)
    seconds = float(probe(mp3)['format']['duration'])
    results.append({**cue, 'spokenText': spoken, 'src': str(mp3.relative_to(ROOT/'dist')), 'duration': seconds})
    print(f'{cue["id"]+1}/{len(cues)} {seconds:.2f}s ({time.monotonic()-started:.1f}s render)', flush=True)

manifest = dict(engine='voicestudio-local', model=engines['active_model'],
                voice=f'OmniVoice synthetic {args.voice}', device=health['device'],
                samplingSteps=args.steps, seed=20261107, referenceSha256=REFERENCE_SHA,
                playbackRatePolicy='natural', cues=results)
destination = ROOT / ('qa/local-voice/narration-preview.json' if args.limit else 'qa/local-voice/narration-local.json')
destination.write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n')
if args.activate:
    if args.limit or len(results) != 72:
        raise SystemExit('Activation requires the complete 72-cue set.')
    current = ROOT / 'dist/narration.json'
    backup = ROOT / 'original/narration-edge.json'
    if not backup.exists():
        backup.write_bytes(current.read_bytes())
    temporary = current.with_suffix('.partial.json')
    temporary.write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n')
    temporary.replace(current)
print(f'Saved {len(results)} local clips, total {sum(row["duration"] for row in results):.1f}s. Activated: {args.activate}', flush=True)
