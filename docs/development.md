# 开发说明

- `dist/`：可直接运行的网站、中文词典和旁白音频。
- `original/`：原站入口、脚本快照及资源来源清单。
- `scripts/`：构建、资源下载与旁白生成脚本。
- `qa/`：播放逻辑测试；固定女声参考位于 `qa/local-voice/`。

## 修改与构建

修改 `dist/zh-CN.json` 可更新译文；修改 `scripts/build.py` 可调整入口与原作脚本补丁。

```sh
python3 scripts/build.py
```

## 重新生成旁白

需要 Python 3、Node.js、FFmpeg，以及已启动的本地 VoiceStudio（`127.0.0.1:3900`），TTS 引擎使用 `k2-fsa/OmniVoice`。播放现有音频不需要这些生成依赖。

```sh
node scripts/export-narration.mjs
python3 scripts/local-voice-samples.py --voice female
python3 scripts/generate-local-narration.py --voice female
python3 scripts/check-local-audio.py
python3 scripts/generate-local-narration.py --voice female --activate
```

使用仓库中的固定合成女声参考；按请求哈希缓存，支持断点续生成，全部 72 段生成后才切换网站清单。数字读法由 `scripts/narration_text.py` 规范化，字幕不变。更换文案后须同步生成音频。模型信息见 [OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)。

## 检查

```sh
node qa/autoplay.test.mjs
node qa/narration.test.mjs
node qa/narration-timeline.test.mjs
```

时间轴检查需要 `ffprobe`，验证 1× 和 8× 下全部旁白顺序及完整性。音频检查需 FFmpeg；可选 `--asr` 使用 VoiceStudio 中已启用的 MLX Whisper Tiny 抽样识别，不能代替人工试听。
