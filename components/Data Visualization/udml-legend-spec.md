# `<legend>` Component

The `<legend>` component defines how the chart’s legend should appear. Optional, can override chart-level `legend=true`.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `position` | string | No | `top`, `right`, `bottom`, `left` |
| `orientation` | string | No | `horizontal`, `vertical` |
| `align` | string | No | `start`, `center`, `end` |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Legend override**
```xml
<legend position="bottom" orientation="horizontal"/>
```

## 🧩 AI Interpretation Guidelines
- Control visual position and alignment of the chart legend.
- May be omitted if `legend=false` or inferred automatically.
- Use only within `<chart>`.
---