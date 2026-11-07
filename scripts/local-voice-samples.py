"""Generate synthetic reference voices using the already-installed local OmniVoice model."""
import argparse
import json
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'qa/local-voice'
OUTPUT.mkdir(parents=True, exist_ok=True)
OPENER = urllib.request.build_opener(urllib.request.ProxyHandler({}))
TEXT = '你正站在吉萨金字塔旁。轻轻滚动，我们将离开地球，穿过银河，去往可观测宇宙的边缘。'
parser = argparse.ArgumentParser()
parser.add_argument('--voice', choices=['female', 'male', 'both'], default='female')
args = parser.parse_args()

for name, instruct in [('male', 'male, middle-aged, low pitch'), ('female', 'female, middle-aged')]:
    if args.voice not in {name, 'both'}:
        continue
    destination = OUTPUT / f'{name}-reference.wav'
    if destination.exists():
        print(f'Cached {name}', flush=True)
        continue
    payload = dict(model='omnivoice', voice='default', input=TEXT, language='zh',
                   response_format='wav', instruct=instruct, seed=20261107, num_step=32, speed=1.0)
    request = urllib.request.Request('http://127.0.0.1:3900/v1/audio/speech',
                                     data=json.dumps(payload).encode(), headers={'Content-Type': 'application/json'})
    started = time.monotonic()
    with OPENER.open(request, timeout=600) as response:
        data = response.read()
        if not response.headers.get_content_type().startswith('audio/') or len(data) < 1000:
            raise RuntimeError('Unexpected non-audio response')
    destination.write_bytes(data)
    destination.with_suffix('.json').write_text(json.dumps({'request': payload, 'elapsedSeconds': time.monotonic()-started}, ensure_ascii=False, indent=2)+'\n')
    print(f'Saved {name}: {len(data)} bytes in {time.monotonic()-started:.1f}s', flush=True)
