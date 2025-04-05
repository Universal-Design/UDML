# `<slider>` Component

The `<slider>` component lets users select a numeric value from a defined range using a track and handle.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `min` | number | Yes | Minimum value |
| `max` | number | Yes | Maximum value |
| `step` | number | No | Increment between values |
| `value` | number | No | Current or default value |
| `bind` | string | No | Data binding path |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Volume control**
```xml
<slider min="0" max="100" bind="settings.volume"/>
```

## 🧩 AI Interpretation Guidelines
- Use as input range control with min/max/step.
- Bind to number-type form field or state.
---