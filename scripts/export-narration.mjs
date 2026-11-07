import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
const root = new URL('../', import.meta.url);
const source = readFileSync(new URL('original/app.js', root), 'utf8');
const dictionary = JSON.parse(readFileSync(new URL('dist/zh-CN.json', root), 'utf8'));
const match = source.match(/Of=(\[.*?\]);function kf/s);
if (!match) throw new Error('Original narration table not found');
const rows = runInNewContext(match[1], {
  $: (L, text) => ({ L, text }),
  Ef: (L, text, moment) => ({ L, text, moment, keepNote: true }),
}, { timeout: 1000 });
const cues = Array.from(rows, (row, index) => {
  const text = dictionary[row.text];
  if (!text) throw new Error(`Missing Chinese narration for cue ${index}`);
  return { id: index, text, L: row.L, moment: Boolean(row.moment) };
});
writeFileSync(new URL('scripts/narration-cues.json', root), JSON.stringify(cues, null, 2) + '\n');
console.log(`Exported ${cues.length} Chinese narration cues.`);
