# `<radio>`

The `<radio>` component represents a single radio button option. Use multiple radios together with the same `name` to form a group.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Shared group name for selection |
| `label` | string | Yes | Visible label |
| `value` | string | Yes | Associated value for the option |
| `checked` | boolean | No | Marks this radio as selected |
| `bind` | string | No | Two-way binding path |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Gender select**
```xml
<radio name="gender" label="Female" value="female"/>
```

## 🧩 AI Interpretation Guidelines
- Render as part of a radio group.
- Bind value to a shared form state key.
- Respect required and checked flags.
---