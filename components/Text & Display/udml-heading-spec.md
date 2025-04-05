# `<heading>`

The `<heading>` component semantically represents section titles or screen-level headings. It maps to `<h1>` through `<h6>` depending on hierarchy.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `level` | int | Yes | Heading level (1–6) |
| `textStyle` | string | No | Typography style to apply |
| `align` | string | No | `left`, `center`, or `right` |

## ✅ Allowed Content
Plain text or binding.

## 💡 Examples
**Top-level heading**
```xml
<heading level="1">Welcome</heading>
```

## 🧩 AI Interpretation Guidelines
- Render as `<h1>`–`<h6>` based on `level`.
- Apply style tokens or classes based on `textStyle`.
- Respect semantic document hierarchy.
---