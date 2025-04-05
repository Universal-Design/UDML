# `<label>` Component

The `<label>` component provides accessible labeling for inputs, toggles, and fields.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `for` | string | No | References the ID of the input field it labels |
| `textStyle` | string | No | Named style to apply |
| `required` | boolean | No | If true, label indicates a required field |

## ✅ Allowed Content
Plain text or binding.

## 💡 Examples
**Simple label**
```xml
<label for="email">Email address</label>
```

## 🧩 AI Interpretation Guidelines
- Render with `htmlFor` or `label` element where applicable.
- Mark required labels with `*` or ARIA attributes.
- Use as part of a form group or adjacent to an input.
---