# `<textarea>` Component

The `<textarea>` component provides a multi-line text input for longer form content.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Field name for form binding |
| `placeholder` | string | No | Hint text inside the textarea |
| `rows` | int | No | Initial height of the textarea in lines |
| `value` | string | No | Initial or bound value |
| `required` | boolean | No | Marks the field as required |
| `bind` | string | No | Binding path |
| `ai-hint` | string | No | Describe text purpose or limitations |

## ✅ Allowed Content
Text or binding.

## 💡 Examples
**Message input**
```xml
<textarea placeholder="Type your message..." rows="4"/>
```

## 🧩 AI Interpretation Guidelines
- Render with standard `<textarea>` or form library equivalent.
- Bind to form state if applicable.
- Style via tokens or named styles.
---