# `<alert>` Component

The `<alert>` component displays a banner or message to indicate feedback like success, error, or warning.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | string | Yes | `info`, `success`, `warning`, `error` |
| `title` | string | No | Optional heading for the alert |
| `dismissible` | boolean | No | If true, includes a close button |

## ✅ Allowed Content
Text or other inline elements.

## 💡 Examples
**Dismissible alert**
```xml
<alert variant="error" title="Something went wrong" dismissible="true">
  Please try again later.
</alert>
```

## 🧩 AI Interpretation Guidelines
- Use `variant` to determine icon, color, and tone.
- Render `title` as bold header, followed by children.
- Show dismiss control if `dismissible` is true.
---