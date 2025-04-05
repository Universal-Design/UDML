# `<timeline>` Component

The `<timeline>` component shows a sequence of chronological or ordered events, often with timestamps and descriptions.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `bind` | string | Yes | Path to an array of event data |
| `timestampKey` | string | No | Field name for the timestamp |
| `labelKey` | string | No | Field name for the label or event name |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Activity log**
```xml
<timeline bind="events" timestampKey="time" labelKey="action"/>
```

## 🧩 AI Interpretation Guidelines
- Iterate through the bound data array to render events.
- Use `timestampKey` and `labelKey` to identify content per node.
- Present events vertically or horizontally depending on UI context.
---