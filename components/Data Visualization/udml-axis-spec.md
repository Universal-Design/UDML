# `<axis>` Component

The `<axis>` component customizes the display of a chart’s x or y axis.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `position` | string | Yes | `x` or `y` |
| `label` | string | No | Axis label text |
| `format` | string | No | Formatting function or token (e.g. `$`, `%`, `shortDate`) |
| `ticks` | int | No | Maximum number of ticks |

## ✅ Allowed Content
Self-closing only, used inside `<chart>`.

## 💡 Examples
**Custom x axis**
```xml
<axis position="x" label="Month" format="shortDate"/>
```

## 🧩 AI Interpretation Guidelines
- Override default axis rendering with position-specific settings.
- Apply `format` to tick values if provided.
- Render axis label visually if present.
---