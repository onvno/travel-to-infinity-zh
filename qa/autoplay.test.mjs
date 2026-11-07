import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const source = readFileSync(new URL('../dist/autoplay.js', import.meta.url), 'utf8').replace(/^import .*;\n/, '');
function fixture({ ready = true, hz = 60 } = {}) {
  class Element {
    listeners = new Map();
    attributes = {};
    addEventListener(name, fn) { this.listeners.set(name, [...(this.listeners.get(name) ?? []), fn]); }
    emit(name, fields = {}) { for (const fn of this.listeners.get(name) ?? []) fn({ target: this, ...fields }); }
    setAttribute(name, value) { this.attributes[name] = value; }
    contains(node) { return node === this || node === toggle || node === speed; }
  }
  const toggle = new Element(); toggle.disabled = true;
  const speed = new Element(); speed.value = '1';
  const status = new Element();
  const narrationToggle = new Element();
  const controls = new Element();
  const root = { scrollHeight: 66800, classList: { contains: () => ready } };
  const nodes = { 'playback-controls': controls, 'autoplay-toggle': toggle, 'autoplay-speed': speed, 'autoplay-status': status,
    'narration-toggle': narrationToggle, 'journey-space': {offsetTop:600,offsetHeight:64200} };
  const document = Object.assign(new Element(), { documentElement: root, hidden: false, getElementById: id => nodes[id] });
  const window = Object.assign(new Element(), { scrollY: 0, innerHeight: 1000, scrollTo({ top }) { this.scrollY = Math.round(Math.min(root.scrollHeight - this.innerHeight, top)); } });
  let time = 0, nextId = 1, observer;
  const frames = new Map();
  vm.runInNewContext(source, {
    window, document, Element,
    NarrationController: class {
      enabled = true;
      resume() {} pause() {} reset() {} setSpeed() {}
      setEnabled(enabled) { this.enabled = enabled; }
      limitPosition(proposed) { return proposed; }
    },
    MutationObserver: class { constructor(callback) { observer = callback; } observe() {} disconnect() {} },
    requestAnimationFrame: fn => { const id = nextId++; frames.set(id, fn); return id; },
    cancelAnimationFrame: id => frames.delete(id),
  });
  const step = seconds => {
    for (let n = 0; n < Math.round(seconds * hz); n++) {
      time += 1000 / hz;
      const current = [...frames.values()]; frames.clear(); current.forEach(fn => fn(time));
    }
  };
  return { toggle, speed, status, window, document, root, step, ready() { ready = true; observer(); }, pending: () => frames.size };
}

const loading = fixture({ ready: false });
assert.equal(loading.toggle.disabled, true);
loading.toggle.emit('click'); assert.equal(loading.pending(), 0);
loading.ready(); assert.equal(loading.toggle.disabled, false);

const sixty = fixture(), thirty = fixture({ hz: 30 });
for (const f of [sixty, thirty]) { f.toggle.emit('click'); f.step(10); }
assert(Math.abs(sixty.window.scrollY - thirty.window.scrollY) < 5, 'speed should be independent of refresh rate');
assert(sixty.window.scrollY > 1090 && sixty.window.scrollY < 1110, 'fractional movement must accumulate');
sixty.toggle.emit('click'); const paused = sixty.window.scrollY; sixty.step(2);
assert.equal(sixty.window.scrollY, paused); assert.equal(sixty.pending(), 0);
sixty.window.scrollY = 5000; sixty.toggle.emit('click'); sixty.step(1);
assert(sixty.window.scrollY > 5100 && sixty.window.scrollY < 5120, 'resume from manually selected position');
sixty.window.emit('wheel'); assert.equal(sixty.toggle.attributes['aria-pressed'], 'false');
sixty.speed.value = '2'; sixty.toggle.emit('click'); const beforeSpeed = sixty.window.scrollY; sixty.step(1);
assert(sixty.window.scrollY - beforeSpeed > 210, '2x speed must apply');
sixty.document.hidden = true; sixty.document.emit('visibilitychange'); assert.equal(sixty.pending(), 0);
sixty.document.hidden = false; sixty.toggle.emit('click'); sixty.window.emit('pointerdown'); assert.equal(sixty.pending(), 0);
sixty.toggle.emit('click'); sixty.window.emit('keydown', { key: 'PageDown' }); assert.equal(sixty.pending(), 0);
sixty.toggle.emit('click'); sixty.window.emit('touchstart'); assert.equal(sixty.pending(), 0);

const end = fixture(); end.window.scrollY = 65790; end.toggle.emit('click'); end.step(2);
assert.equal(end.window.scrollY, 65800); assert.equal(end.pending(), 0);
assert.equal(end.toggle.attributes['aria-label'], '重新播放');
end.toggle.emit('click'); assert.equal(end.window.scrollY, 0); end.step(1); assert(end.window.scrollY > 100);
end.window.innerHeight = 800; end.window.emit('resize'); const resized = end.window.scrollY; end.step(1);
assert(end.window.scrollY - resized < 90, 'resize must use the current viewport');
console.log('PASS: loading, frame-rate independence, pause/resume, manual takeover, speed, background, endpoint, replay and resize.');
