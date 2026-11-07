import assert from 'node:assert/strict';
import { NarrationController } from '../dist/narration.js';

class FakeAudio {
  listeners = new Map();
  paused = true; ended = false; error = null; currentTime = 0; playCount = 0;
  addEventListener(type, fn) { this.listeners.set(type, fn); }
  emit(type) { this.listeners.get(type)?.(); }
  set src(value) { this.source = value; this.ended = false; this.error = null; }
  get src() { return this.source; }
  removeAttribute() { this.source = ''; }
  load() {}
  play() { this.playCount++; this.paused = false; return this.nextPlay?.() ?? Promise.resolve(); }
  pause() { this.paused = true; }
  finish() { this.ended = true; this.emit('ended'); }
}
async function fixture(extra = {}) {
  const audio = new FakeAudio();
  const journey = { canNarrate: false, currentCueId: 0, captionEndProgress:.9,
    cues: [{id:0,progress:0},{id:1,progress:.3},{id:2,progress:.6}] };
  const statuses = [], blocked = [];
  const controller = new NarrationController({ audio, getJourney: () => journey,
    baseURL: new URL('http://local.test/'),
    loadManifest: async () => ({ cues: journey.cues.map(cue => ({...cue,src:`audio/${cue.id}.mp3`,duration:4})) }),
    onStatus: text => statuses.push(text), onBlocked: text => blocked.push(text), ...extra });
  await controller.ready;
  return { audio, journey, controller, statuses, blocked };
}
const f = await fixture();
f.controller.resume(); assert.equal(f.audio.playCount,0,'intro must remain silent');
f.journey.canNarrate = true; f.controller.sync();
assert.equal(f.audio.playCount,1); assert.equal(f.audio.src,'http://local.test/audio/0.mp3');
f.controller.sync(); assert.equal(f.audio.playCount,1,'do not queue the same sentence every frame');
assert.equal(f.controller.limitPosition(600,100,0,1000),298,'hold before changing caption');
f.audio.currentTime = 1.5; f.controller.pause(); assert(f.audio.paused);
f.controller.resume(); assert.equal(f.audio.currentTime,1.5,'resume must keep the audio position');
f.audio.finish(); assert.equal(f.controller.limitPosition(900,100,0,1000),598,'advance at most one unread cue');
f.controller.pause(); f.journey.currentCueId=1; f.controller.sync();
assert(f.audio.src.endsWith('/0.mp3'),'manual scrubbing while paused must not speak');
f.controller.resume(); assert(f.audio.src.endsWith('/1.mp3')); assert.equal(f.audio.currentTime,0);
f.controller.setEnabled(false); assert(f.audio.paused);
assert.equal(f.controller.limitPosition(900,100,0,1000),900,'muted playback has no voice speed limit');
f.controller.setEnabled(true); assert(!f.audio.paused);
f.controller.setSpeed(8); assert.equal(f.audio.playbackRate,1.5);
f.controller.setSpeed(.25); assert.equal(f.audio.playbackRate,.85);
f.journey.currentCueId=2; f.controller.sync();
assert.equal(f.controller.limitPosition(1000,650,0,1000),898,'finish the last sentence before captions fade');
f.audio.error={code:4}; f.audio.emit('error');
assert.equal(f.controller.limitPosition(1000,650,0,1000),1000,'bad audio cannot trap the viewer');
f.controller.reset(); assert.equal(f.controller.current,null); assert.equal(f.audio.src,'');

const denied = await fixture(); denied.journey.canNarrate=true;
denied.audio.nextPlay = () => Promise.reject(Object.assign(new Error(),{name:'NotAllowedError'}));
denied.controller.resume(); await Promise.resolve(); await Promise.resolve();
assert.equal(denied.blocked.length,1,'blocked audio should request an explicit play click');
const stale = await fixture(); stale.journey.canNarrate=true;
let rejectOld;
stale.audio.nextPlay = () => new Promise((_,reject) => {rejectOld=reject;});
stale.controller.resume(); stale.controller.pause();
stale.audio.nextPlay = undefined; stale.controller.resume();
rejectOld(Object.assign(new Error(),{name:'NotAllowedError'})); await Promise.resolve(); await Promise.resolve();
assert.equal(stale.blocked.length,0,'a stale rejection must not stop a newer playback attempt');
const failed = await fixture({loadManifest:async()=>{throw Error('offline');}});
failed.journey.canNarrate=true; failed.controller.resume();
assert.equal(failed.controller.limitPosition(900,100,0,1000),900,'missing manifest degrades to silent playback');
const natural = await fixture({loadManifest:async()=>({playbackRatePolicy:'natural',cues:[{id:0,src:'voice.mp3',duration:4}]})});
natural.controller.setSpeed(8); assert.equal(natural.audio.playbackRate,1,'local narration must keep the natural recorded speed');
natural.controller.setSpeed(.25); assert.equal(natural.audio.playbackRate,1,'slow visual playback must not stretch the local voice');
console.log('PASS: cue synchronization, no duplicate speech, pause/resume, manual seek, mute, speed, final cue, errors and stale promises.');
