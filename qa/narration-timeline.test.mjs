import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';
import { NarrationController } from '../dist/narration.js';

const original = readFileSync(new URL('../original/app.js', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(process.argv[2] || new URL('../dist/narration.json', import.meta.url), 'utf8'));
// Exercise the actual original timing curve, sampled like its 20,000-point camera path.
const ml = runInNewContext(original.slice(original.indexOf('function ml('), original.indexOf('var hl=')) + ';ml');
const keys = runInNewContext(original.match(/gl=(\[.*?\]),_l=ml/s)[1]);
const curve = ml(keys.map(row=>row[0]), keys.map(row=>row[1]));
const samples = Array.from({length:20001},(_,i)=>curve(i/20000));
const logAt = progress => {
  const t=Math.min(1,Math.max(0,progress))*20000;
  const i=Math.min(19999,Math.floor(t));
  return samples[i]+(samples[i+1]-samples[i])*(t-i);
};
function progressAt(log) {
  if(log<=logAt(0)) return 0;
  let low=0,high=1;
  for(let i=0;i<24;i++){const middle=(low+high)/2;if(logAt(middle)<log)low=middle;else high=middle;}
  return (low+high)/2;
}
for(const speed of [1,8]) {
  const heard=[], interrupted=[];
  const audio={ paused:true,ended:false,currentTime:0,playbackRate:1,listeners:new Map(),
    addEventListener(type,fn){this.listeners.set(type,fn);},
    set src(value){this.source=value;this.ended=false;this.currentTime=0;},
    play(){if(!heard.includes(this.cue))heard.push(this.cue);this.paused=false;return Promise.resolve();},
    pause(){if(!this.paused&&!this.ended)interrupted.push(this.cue);this.paused=true;},
    removeAttribute(){},load(){},
    tick(dt){if(!this.paused&&!this.ended){this.currentTime+=dt*this.playbackRate;if(this.currentTime>=manifest.cues[this.cue].duration){this.ended=true;this.listeners.get('ended')();}}},
  };
  Object.defineProperty(audio,'cue',{get(){return Number(this.source?.match(/\/(\d{3})-/)?.[1]??0);}});
  const journey={currentCueId:0,canNarrate:false,captionEndProgress:progressAt(28.9),
    cues:manifest.cues.map(cue=>({...cue,progress:progressAt(cue.L-2e-6)}))};
  const voice=new NarrationController({audio,getJourney:()=>journey,loadManifest:async()=>manifest,baseURL:new URL('http://local.test/')});
  await voice.ready;voice.setSpeed(speed);voice.resume();
  let position=0,rendered=0,time=0,pending=-1,deadline=0;
  for(let frame=0;frame<120000;frame++) {
    const dt=1/60; time+=dt;
    audio.tick(dt);
    position=voice.limitPosition(Math.min(65800,position+dt*1000*.11*speed),position,600,64200);
    const target=Math.max(0,Math.min(1,(position-600)/64200));
    rendered+=(target-rendered)*(1-Math.exp(-dt*7));
    const log=logAt(rendered);
    let desired=0;
    while(desired<manifest.cues.length-1&&log+1e-6>=manifest.cues[desired+1].L)desired++;
    if(desired!==pending){pending=desired;deadline=time+.18;}
    if(time>=deadline)journey.currentCueId=pending;
    journey.canNarrate=position>275&&position<64800;
    if(position>=65800)break;
  }
  assert.equal(position,65800,`${speed}x playback must reach the end`);
  assert.deepEqual(heard,manifest.cues.map(cue=>cue.id),`${speed}x playback must read all 72 cues in order`);
  assert.deepEqual(interrupted,[],`${speed}x playback must never cut a sentence short`);
  console.log(`PASS: full ${speed}x journey, all ${heard.length} cues, no interruption (${time.toFixed(1)}s simulated).`);
}
