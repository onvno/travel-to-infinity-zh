"""Fetch only the original experience's public static assets; no cookies or credentials."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
import subprocess, json, hashlib
root=Path(__file__).resolve().parents[1]
paths=json.loads((root/'scripts/assets.json').read_text())
def fetch(path):
    dest=root/'dist'/path
    dest.parent.mkdir(parents=True,exist_ok=True)
    if dest.exists() and dest.stat().st_size: return path,True
    result=subprocess.run(['curl','-sS','-L','--fail','--retry','2','--max-time','90','https://vatsaltanna.com/traveltoinfinity/'+path,'-o',str(dest)],capture_output=True)
    ok=result.returncode==0 and dest.exists() and not dest.read_bytes()[:100].lstrip().lower().startswith((b'<!doctype',b'<html'))
    if not ok: dest.unlink(missing_ok=True)
    return path,ok
failed=[]
with ThreadPoolExecutor(max_workers=4) as pool:
    for i,f in enumerate(as_completed(pool.submit(fetch,p) for p in paths),1):
        p,ok=f.result()
        if not ok: failed.append(p)
        if i%25==0 or not ok: print(f'{i}/{len(paths)} '+('OK' if ok else 'MISSING')+' '+p,flush=True)
report={'source':'https://vatsaltanna.com/traveltoinfinity/','failed':failed,'files':[{'path':p,'bytes':(root/'dist'/p).stat().st_size,'sha256':hashlib.sha256((root/'dist'/p).read_bytes()).hexdigest()} for p in paths if (root/'dist'/p).exists()]}
(root/'original/asset-manifest.json').write_text(json.dumps(report,indent=2))
print('Done; missing:',failed,flush=True)
