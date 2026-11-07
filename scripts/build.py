"""Rebuild Chinese display patches from the retained, unmodified original bundle."""
from pathlib import Path
import re, json, shutil
root=Path(__file__).resolve().parents[1]
s=(root/'original/app.js').read_text()
s='import {zh, distance, lightTime, facts} from "../localization.js";\n'+s
# Translate labels after internal name-based scene decisions, before layout measurement.
old='win:[25.8,26.1,26.9,27.2],pri:7}),t}var Vf='
new='win:[25.8,26.1,26.9,27.2],pri:7}),t.map(label=>({...label,name:zh(label.name),sub:zh(label.sub)}))}var Vf='
assert s.count(old)==1;s=s.replace(old,new)
old='],x=0,S=0,C=10,w='
new='].map(label=>({...label,name:zh(label.name)})),x=0,S=0,C=10,w='
assert s.count(old)==1;s=s.replace(old,new)
patch='''
// Apply Chinese only to display data; preserve scientific data and animation.
Df = Df.map(([position,text]) => [position,zh(text)]);
Of.forEach(item => item.text = zh(item.text));
Af = Af.map(([start,end,text]) => [start,end,zh(text)]);
Kf = Kf.map(([position,text,level]) => [position,({Andromeda:"仙女座","Nearest star":"近邻恒星",Edge:"边缘"})[text] ?? zh(text),level]);
jf = zh(jf); Mf = Mf.map(zh); Nf = Nf.map(zh);
vf = distance; qf = lightTime; If = elapsed => facts(elapsed,Pf);
'''
assert s.count('var Zf=document')==1;s=s.replace('var Zf=document',patch+'var Zf=document')
# Dynamic light-reading headings and lookback time.
s=s.replace('[`Light takes`,de]', '[zh(`Light takes`),de]')
s=s.replace('[`Light from here left`,`${Tf(ue).toFixed(1)} billion years ago`]', '[zh(`Light from here left`),zh(`${Tf(ue).toFixed(1)} billion years ago`)]')
# Publish the original camera path's exact cue positions for audio-aware playback.
seed='''
const narrationProgressForLogDistance = distance => {
  if(distance<=op.at(0).L) return 0;
  let low=0, high=1;
  for(let step=0;step<24;step++) {
    const middle=(low+high)/2;
    if(op.at(middle).L < distance) low=middle; else high=middle;
  }
  return (low+high)/2;
};
window.travelJourney = {
  currentCueId: null, canNarrate: false,
  captionEndProgress: narrationProgressForLogDistance(28.9),
  // The artwork switches captions with a +1e-6 tolerance. Stop before that
  // tolerance too, especially at the flat timing holds around the skeleton.
  cues: Of.map((cue,id) => ({id,text:cue.text,progress:narrationProgressForLogDistance(cue.L - 2e-6)}))
};
'''
assert s.count('var Sm=-1,Cm=-1')==1
s=s.replace('var Sm=-1,Cm=-1',seed+'var Sm=-1,Cm=-1')
old='else i.textContent=t.text};return function(e,i,f,ee,M,te,N)'
new='else i.textContent=t.text;window.travelJourney&&(window.travelJourney.currentCueId=e)};return function(e,i,f,ee,M,te,N)'
assert s.count(old)==1;s=s.replace(old,new)
old='Mp(c,sp.camera,wp,Tp,e,Sm,Cm),requestAnimationFrame(Fm)'
new='Mp(c,sp.camera,wp,Tp,e,Sm,Cm),window.travelJourney.canNarrate=!vm&&!qp&&n<.5&&r<.5,requestAnimationFrame(Fm)'
assert s.count(old)==1;s=s.replace(old,new)
(root/'dist/assets/app-zh.js').write_text(s)
h=(root/'original/index.html').read_text()
h=h.replace('lang="en"','lang="zh-CN"').replace('./assets/index-Cdc0D1IM.js','./assets/app-zh.js')
# Remove only the hosting-provider challenge; it is not part of the artwork.
h=re.sub(r'<script>\(function\(\)\{function c\(\).*?</script>','',h,flags=re.S)
h=re.sub(r'<script type="application/ld\+json" data-vt-seo>.*?</script>','',h,flags=re.S)
h=h.replace('href="/work-nav.css?v=2373eb2de2"','href="work-nav.css"')
h=h.replace('<nav aria-label="Vatsal Tanna"><a href="/">Home</a><a href="/space/">Space</a><a href="/machines/">Machines</a><a href="/about/">Hello</a></nav>', '<nav aria-label="作者与来源"><a href="https://vatsaltanna.com/traveltoinfinity/" target="_blank" rel="noopener">原作 · Vatsal Tanna</a><a href="about.html">中文致敬版说明</a><a href="licences.txt">素材署名与许可</a></nav>')
h=h.replace('Menu, back to Vatsal Tanna\'s home page','菜单：原作与中文致敬版说明')
translations={
'Travel to infinity and back':'去往无穷，然后归来',
'How small are we really?':'我们究竟有多渺小？从吉萨金字塔出发，探索可观测宇宙，再回到家。',
'Scroll to travel from the pyramids of Giza to the edge of the observable universe and back.':'轻轻滚动，从吉萨金字塔出发，去往可观测宇宙的边缘，再回到这里。',
'Start scrolling':'向下滚动，开始旅程',
'Welcome home':'欢迎回家',
'And the end of all our exploring<br>Will be to arrive where we started<br>And know the place for the first time':'当一切探索走向终点<br>我们将回到出发之地<br>并如初见般，重新认识它',
'– T. S. Eliot':'—— T. S. 艾略特',
'Distance from your body':'与你身体的距离',
'0 m':'0 米',
'For small creatures such as we<br class="phone"> the vastness is bearable only through love':'像我们这样渺小的生命<br>唯有爱才能让我们承受宇宙的浩瀚',
'– Carl Sagan':'—— 卡尔·萨根',
'Take me back home':'带我回家',
'>Credits<':'>署名与许可<',
}
for a,b in translations.items():
 assert a in h,a
 h=h.replace(a,b)
h=h.replace('</head>','<link rel="stylesheet" href="zh-CN.css">\n</head>')
h=h.replace('</body>', '''<div id="playback-dock" role="group" tabindex="0" aria-label="旅程播放控制，移到屏幕右侧边缘展开">
<div id="playback-controls">
  <button id="autoplay-toggle" type="button" aria-label="自动播放" aria-pressed="false" disabled title="缓慢向下滚动，1 倍速完整旅程约十分钟；手动滚动即暂停。">加载中…</button>
  <select id="autoplay-speed" aria-label="播放速度" title="画面播放速度；开启旁白时，会等待当前句子读完再切换。">
    <option value="0.25">0.25×</option><option value="0.5">0.5×</option><option value="0.75">0.75×</option>
    <option value="1" selected>1×</option><option value="1.5">1.5×</option><option value="2">2×</option>
    <option value="3">3×</option><option value="4">4×</option><option value="6">6×</option><option value="8">8×</option>
  </select>
  <button id="narration-toggle" class="narration-button" type="button" aria-label="关闭旁白" aria-pressed="true" title="中文旁白随播放同步暂停；开启时会等待每句读完。">旁白开</button>
  <span id="autoplay-status" role="status" class="sr-only"></span>
</div>
</div>
<script type="module" src="autoplay.js"></script>
</body>''')
h=h.replace('content="https://vatsaltanna.com/traveltoinfinity/share.jpg"','content="share.jpg"')
(root/'dist/index.html').write_text(h)
print('Built dist/index.html and dist/assets/app-zh.js')
