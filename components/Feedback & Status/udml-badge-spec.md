# `<badge>` Component

The `<badge>` component is a small visual indicator for status, labels, or metadata.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | string | No | `info`, `success`, `warning`, `error`, `neutral` |
| `color` | string | No | Custom color token or hex |
| `size` | string | No | `sm`, `md`, `lg` |
| `pill` | boolean | No | Renders badge with rounded corners |

## ✅ Allowed Content
Text only.

## 💡 Examples
**Status badge**
```xml
<badge variant="success">Active</badge>
```

## 🧩 AI Interpretation Guidelines
- Render as inline label with contextual styling.
- Use `variant` to assign color automatically.
- Optionally apply `pill` styling for rounded shapes.
---