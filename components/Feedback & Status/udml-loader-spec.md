# `<loader>` Component

The `<loader>` component shows a spinning or pulsing animation to indicate an in-progress state or background activity.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `size` | string | No | `sm`, `md`, `lg` |
| `type` | string | No | `spinner`, `dots`, `pulse` |
| `label` | string | No | Accessible label or description |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Spinner with label**
```xml
<loader type="spinner" label="Loading user data..."/>
```

## 🧩 AI Interpretation Guidelines
- Use `type` to determine animation style.
- Render `label` visually or only for screen readers.
- Place loader inline, full-screen, or inside a container depending on context.
---