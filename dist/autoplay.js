import { NarrationController } from './narration.js';
// Opt-in playback moves the existing scroll journey; the artwork keeps its own camera/render loop.
const controls = document.getElementById('playback-controls');
const toggle = document.getElementById('autoplay-toggle');
const speed = document.getElementById('autoplay-speed');
const status = document.getElementById('autoplay-status');
const narrationToggle = document.getElementById('narration-toggle');
const track = document.getElementById('journey-space');
const narration = new NarrationController({
  onStatus: message => { status.textContent = message; },
  onBlocked: message => pause(message),
});
const root = document.documentElement;
const SCREENS_PER_SECOND = 0.11; // Roughly ten minutes for the full journey at 1×.
let playing = false;
let started = false;
let finished = false;
let frame = null;
let previousTime = null;
let position = window.scrollY;

function updateControls(message) {
  const label = playing ? '暂停' : finished ? '重新播放' : started ? '继续播放' : '自动播放';
  toggle.textContent = `${playing ? 'Ⅱ' : finished ? '↺' : '▶'} ${label}`;
  toggle.setAttribute('aria-label', label);
  toggle.setAttribute('aria-pressed', String(playing));
  if (message) status.textContent = message;
}

function pause(message = '自动播放已暂停，可手动滚动或继续播放。') {
  if (!playing) return;
  playing = false;
  narration.pause();
  cancelAnimationFrame(frame);
  frame = null;
  previousTime = null;
  updateControls(message);
}

function advance(timestamp) {
  if (!playing) return;
  if (previousTime === null) previousTime = timestamp;
  // Cap elapsed time so a slow frame never jumps over a scene.
  const elapsed = Math.min(0.05, Math.max(0, (timestamp - previousTime) / 1000));
  previousTime = timestamp;
  const end = Math.max(0, root.scrollHeight - window.innerHeight);
  const proposed = Math.min(end, position + elapsed * window.innerHeight * SCREENS_PER_SECOND * Number(speed.value));
  position = narration.limitPosition(proposed, position, track.offsetTop, track.offsetHeight);
  window.scrollTo({ top: position, behavior: 'instant' });
  if (position >= end) {
    finished = true;
    pause('已到达旅程终点。可以选择「带我回家」，或重新播放。');
    return;
  }
  frame = requestAnimationFrame(advance);
}

toggle.addEventListener('click', () => {
  if (playing) return pause();
  if (toggle.disabled) return;
  if (window.scrollY >= root.scrollHeight - window.innerHeight - 2) {
    narration.reset();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  position = window.scrollY;
  previousTime = null;
  finished = false;
  started = true;
  playing = true;
  narration.setSpeed(speed.value);
  narration.resume();
  updateControls('正在缓慢向下播放。手动滚动或触摸页面即可暂停。');
  frame = requestAnimationFrame(advance);
});

const insideControls = event => event.target instanceof Element && controls.contains(event.target);
for (const eventName of ['wheel', 'touchstart', 'pointerdown']) {
  window.addEventListener(eventName, event => {
    if (!insideControls(event)) pause();
  }, { passive: true });
}
window.addEventListener('keydown', event => {
  if (!insideControls(event) && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Escape'].includes(event.key)) pause();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pause('页面已切到后台，自动播放已暂停。');
});
window.addEventListener('resize', () => {
  position = window.scrollY;
  previousTime = null;
});
speed.addEventListener('change', () => {
  narration.setSpeed(speed.value);
  if (playing) status.textContent = `播放速度已调整为 ${speed.value} 倍。`;
});
narrationToggle.addEventListener('click', () => {
  narration.setEnabled(!narration.enabled);
  narrationToggle.textContent = narration.enabled ? '旁白开' : '旁白关';
  narrationToggle.setAttribute('aria-pressed', String(narration.enabled));
  narrationToggle.setAttribute('aria-label', narration.enabled ? '关闭旁白' : '开启旁白');
  status.textContent = narration.enabled ? '旁白已开启，画面会等待每句读完。' : '旁白已关闭。';
});

function ready() {
  if (!root.classList.contains('ready')) return;
  toggle.disabled = false;
  updateControls();
  observer.disconnect();
}
const observer = new MutationObserver(ready);
observer.observe(root, { attributes: true, attributeFilter: ['class'] });
ready();
