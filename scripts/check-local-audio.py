"""Validate local rendered takes and optionally screen selected clips with installed MLX Whisper Tiny.

ASR is a content screen, not a human pronunciation or naturalness rating.
"""
import argparse
import array
import json
import math
import subprocess
import urllib.request
import uuid
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--asr', action='store_true')
args = parser.parse_args()
manifest = json.loads((ROOT/'qa/local-voice/narration-local.json').read_text())
opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
checks = []
selected = {0, 1, 3, 4, 15, 17, 20, 31, 42, 55, 71}
if args.asr:
    with opener.open('http://127.0.0.1:3900/engines/asr', timeout=15) as response:
        asr = json.load(response)
    if asr.get('active') != 'mlx-whisper' or asr.get('active_model') != 'mlx-community/whisper-tiny-mlx':
        raise SystemExit('The expected already-installed local ASR is not active; no model switch/download will be made.')
for cue in manifest['cues']:
    path = ROOT/'dist'/cue['src']
    pcm = array.array('h', subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-ac','1','-ar','24000','-f','s16le','-']))
    if not pcm:
        raise RuntimeError(f'Empty cue {cue["id"]}')
    rms = math.sqrt(sum(float(x)**2 for x in pcm)/len(pcm))/32768
    peak = max(abs(x) for x in pcm)/32768
    row = {'id':cue['id'],'text':cue['text'],'spokenText':cue['spokenText'],'seconds':len(pcm)/24000,
           'rmsDbfs':round(20*math.log10(max(rms,1e-10)),2),'peak':round(peak,4),'bytes':path.stat().st_size,
           'clippedFraction':sum(abs(x)>=32700 for x in pcm)/len(pcm)}
    if not 0.2<row['seconds']<45 or rms<0.001:
        raise RuntimeError(f'Invalid duration/near-silent audio: {row}')
    if args.asr and cue['id'] in selected:
        boundary='----LocalNarrationASR'+uuid.uuid4().hex;body=bytearray()
        for key,value in {'model':'whisper-1','language':'zh','response_format':'json'}.items():
            body.extend(f'--{boundary}\r\nContent-Disposition: form-data; name="{key}"\r\n\r\n{value}\r\n'.encode())
        body.extend(f'--{boundary}\r\nContent-Disposition: form-data; name="file"; filename="clip.mp3"\r\nContent-Type: audio/mpeg\r\n\r\n'.encode())
        body.extend(path.read_bytes());body.extend(f'\r\n--{boundary}--\r\n'.encode())
        request=urllib.request.Request('http://127.0.0.1:3900/v1/audio/transcriptions',data=body,
            headers={'Content-Type':f'multipart/form-data; boundary={boundary}'})
        with opener.open(request,timeout=180) as response:
            row['transcript']=json.load(response).get('text','')
        print(cue['id'],row['transcript'],flush=True)
    checks.append(row)
destination=ROOT/'qa/local-voice/audio-checks.json'
destination.write_text(json.dumps({'note':'Local ASR screening is not a human quality/pronunciation rating.','checks':checks},ensure_ascii=False,indent=2)+'\n')
print(f'Validated {len(checks)} complete, non-silent decoded clips.',flush=True)
