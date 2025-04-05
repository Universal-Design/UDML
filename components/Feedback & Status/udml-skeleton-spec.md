# `<skeleton>` Component

The `<skeleton>` component shows a loading placeholder for content that hasn’t rendered yet.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `shape` | string | No | `text`, `rect`, `circle`, `avatar` |
| `width` | string | No | Fixed width (e.g. `200px`, `100%`) |
| `height` | string | No | Fixed height |
| `repeat` | number | No | Number of skeletons to show (for list/rows) |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Loading placeholder**
```xml
<skeleton shape="text" width="80%"/>
```

## 🧩 AI Interpretation Guidelines
- Use `shape` to render skeleton type (text line, block, avatar, etc).
- Repeat pattern when `repeat` is set (e.g. list items).
- Map size and shape to typical content layout.
---