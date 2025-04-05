# `<video>`

The `<video>` component embeds a playable video file or stream with optional controls and preview.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | Yes | Video file or streaming URL |
| `poster` | string | No | Thumbnail image shown before playback |
| `autoplay` | boolean | No | Start playing automatically |
| `controls` | boolean | No | Show native player controls |
| `loop` | boolean | No | Loop video playback |
| `muted` | boolean | No | Mute audio on load |

## ✅ Allowed Content
Self-closing or optionally contain fallback text.

## 💡 Examples
**Embedded video**
```xml
<video src="intro.mp4" controls="true" poster="preview.jpg"/>
```

## 🧩 AI Interpretation Guidelines
- Render with native `<video>` element or component wrapper.
- Apply autoplay/muted attributes appropriately.
- Use `poster` as fallback image when video is paused or loading.
---