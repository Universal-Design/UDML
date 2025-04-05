# `<toast>` Component

The `<toast>` component shows a temporary notification, usually triggered by actions or events.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `open` | boolean | Yes | Whether the toast is visible |
| `type` | string | No | `info`, `success`, `warning`, `error` |
| `duration` | number | No | Time in ms before auto-dismiss |
| `message` | string | Yes | Message to display |

## ✅ Allowed Content
Self-closing or use child content.

## 💡 Examples
**Success toast**
```xml
<toast open="true" type="success" duration="3000" message="Saved!"/>
```

## 🧩 AI Interpretation Guidelines
- Auto-dismiss based on `duration` unless set manually.
- Render `message` with status styling.
- Use `type` for icon and theme context.
---