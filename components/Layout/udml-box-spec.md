# `<box>`

The `<box>` component is a flexible, generic block element for layout composition or visual styling.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `width` | string | No | Explicit width (e.g., `200px`, `full`, `1/3`) |
| `height` | string | No | Explicit height |
| `padding` | string | No | Internal spacing |
| `margin` | string | No | External spacing |
| `background` | string | No | Background color or token |
| `borderRadius` | string | No | Corner roundness |

## ✅ Allowed Content
Any content or child components.

## 💡 Examples
**Basic styled box**
```xml
<box width="100%" padding="lg" background="surface">...</box>
```

## 🧩 AI Interpretation Guidelines
- Use for flexible block layout, surface styling, or composition.
- Map style attributes directly to class names or tokens.
- Prefer more semantic components when intent is clear (e.g., use `<card>` for card UIs).
---
