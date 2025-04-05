# `<input>`

The `<input>` component captures user input. It supports multiple types and can be styled using tokens or named styles.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | `text`, `email`, `password`, `number`, etc. |
| `name` | string | No | Field name for form binding |
| `placeholder` | string | No | Hint text inside the input |
| `value` | string | No | Initial or bound value |
| `required` | boolean | No | Marks the field as required |
| `disabled` | boolean | No | Disables user input |
| `style` | string | No | Named style preset to apply |
| `bind` | string | No | Binding path for dynamic value |
| `ai-hint` | string | No | Describe input purpose |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Email input**
```xml
<input type="email" placeholder="jane@example.com"/>
```

## 🧩 AI Interpretation Guidelines
- Bind to state model if `bind` is provided.
- Render with appropriate input type and placeholder.
- Respect `required`, `disabled`, and validation.
---