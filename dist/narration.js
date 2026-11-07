export class NarrationController {
  constructor({ audio = new Audio(), getJourney = () => window.travelJourney,
    loadManifest = () => fetch(new URL('./narration.json', import.meta.url)).then(response => {
      if (!response.ok) throw new Error('旁白音频清单加载失败');
      return response.json();
    }), baseURL = new URL('./', import.meta.url), onStatus = () => {}, onBlocked = () => {} } = {}) {
    this.audio = audio;
    this.audio.preload = 'auto';
    this.getJourney = getJourney;
    this.baseURL = baseURL;
    this.onStatus = onStatus;
    this.onBlocked = onBlocked;
    this.enabled = true;
    this.available = true;
    this.playing = false;
    this.current = null;
    this.complete = false;
    this.requested = false;
    this.version = 0;
    this.attempt = 0;
    this.rate = 1;
    this.visualSpeed = 1;
    this.naturalRate = false;
    this.clips = new Map();
    this.ready = Promise.resolve().then(loadManifest).then(manifest => {
      if (!manifest.cues?.length) throw new Error('旁白音频清单为空');
      this.clips = new Map(manifest.cues.map(cue => [cue.id, cue]));
      this.naturalRate = manifest.playbackRatePolicy === 'natural';
      this.setSpeed(this.visualSpeed);
      if (this.playing) this.sync();
    }).catch(() => {
      this.available = false;
      this.onStatus('旁白暂不可用，画面仍可正常播放。');
    });
    this.audio.addEventListener('ended', () => {
      if (!this.audio.ended) return;
      this.complete = true;
      this.requested = false;
    });
    this.audio.addEventListener('error', () => {
      if (!this.audio.error) return;
      this.complete = true; // A failed clip must never trap the viewer at a boundary.
      this.requested = false;
      this.onStatus('这一段旁白加载失败，已继续旅程。');
    });
  }

  resume() { this.playing = true; this.sync(); }
  pause() {
    this.playing = false;
    this.attempt++;
    this.requested = false;
    this.audio.pause();
  }
  reset() {
    this.pause();
    this.version++;
    this.current = null;
    this.complete = false;
    this.audio.removeAttribute('src');
    this.audio.load();
  }
  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) { this.attempt++; this.audio.pause(); this.requested = false; }
    else if (this.playing) this.sync();
  }
  setSpeed(speed) {
    // Preserve a comprehensible voice at the fastest visual travel speeds.
    this.visualSpeed = Number(speed);
    this.rate = this.naturalRate ? 1 : Math.max(0.85, Math.min(1.5, Math.sqrt(this.visualSpeed)));
    this.audio.playbackRate = this.rate;
  }
  sync() {
    const journey = this.getJourney();
    if (!this.playing || !this.enabled || !this.available || !journey?.canNarrate) return;
    const cue = this.clips.get(journey.currentCueId);
    if (!cue) return;
    if (this.current?.id !== cue.id) {
      this.audio.pause();
      this.version++;
      this.current = cue;
      this.complete = false;
      this.requested = false;
      this.audio.src = new URL(cue.src, this.baseURL).href;
      this.audio.currentTime = 0;
      this.audio.playbackRate = this.rate;
    }
    if (this.complete || this.requested) return;
    const version = this.version;
    const attempt = ++this.attempt;
    this.requested = true;
    Promise.resolve(this.audio.play()).catch(error => {
      if (version !== this.version || attempt !== this.attempt || !this.playing || !this.enabled || error.name === 'AbortError') return;
      this.requested = false;
      if (error.name === 'NotAllowedError') {
        this.onBlocked('浏览器尚未允许声音，请再点击「继续播放」。');
      } else {
        this.complete = true;
        this.onStatus('这一段旁白暂不可用，已继续旅程。');
      }
    });
  }
  limitPosition(proposed, currentPosition, trackTop, trackHeight) {
    this.sync();
    const journey = this.getJourney();
    if (!this.enabled || !this.available || !journey?.canNarrate || !this.clips.size || journey.currentCueId === null) return proposed;
    const index = journey.currentCueId;
    const pending = this.current?.id !== index || !this.complete;
    // Hold before the NEXT caption while speaking; once done, permit one cue at a
    // time so high travel speeds cannot skip a cue during the artwork's fade.
    const boundary = journey.cues[index + (pending ? 1 : 2)]
      ?? (pending && journey.captionEndProgress != null ? { progress: journey.captionEndProgress } : null);
    if (!boundary) return proposed;
    const cap = trackTop + boundary.progress * trackHeight - 2;
    return Math.min(proposed, Math.max(currentPosition, cap));
  }
}
