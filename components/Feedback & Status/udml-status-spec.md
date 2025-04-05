# `<status>` Component

The `<status>` component displays a semantic state or lifecycle indicator, often with an icon or colored dot.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | Status value to display |
| `variant` | string | No | `success`, `warning`, `error`, `neutral` |
| `icon` | string | No | Optional icon name to accompany the label |

## ✅ Allowed Content
Self-closing or content can be overridden.

## 💡 Examples
**Online status**
```xml
<status value="Online" variant="success" icon="check-circle"/>
```

## 🧩 AI Interpretation Guidelines
- Use `value` as label and color-code with `variant`.
- Render as text with optional status icon or dot.
- Supports both semantic color and icon-driven feedback.
---