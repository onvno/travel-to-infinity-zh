"""Loopback-only static server. Compressed .gz assets must be sent as raw gzip bytes."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import argparse
parser=argparse.ArgumentParser()
parser.add_argument('--port',type=int,default=4399)
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]/'dist'
class Handler(SimpleHTTPRequestHandler):
    extensions_map={**SimpleHTTPRequestHandler.extensions_map,'.js':'text/javascript','.ktx2':'image/ktx2','.wasm':'application/wasm','.gz':'application/gzip'}
    def __init__(self,*a,**kw): super().__init__(*a,directory=str(root),**kw)
    def do_GET(self):
        # Original code gracefully falls back to the existing web.bin when no gzip version exists.
        super().do_GET()
print(f'中文旅程：http://127.0.0.1:{args.port}/',flush=True)
print('按 Ctrl+C 停止。请使用 HTTP 地址打开，不要直接双击 index.html。',flush=True)
with ThreadingHTTPServer(('127.0.0.1',args.port),Handler) as server:
    try: server.serve_forever()
    except KeyboardInterrupt: pass
