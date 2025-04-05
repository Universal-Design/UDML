# `<checkbox>` Component

The `<checkbox>` component allows selection of a true/false value in a form.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Form field name |
| `label` | string | Yes | Visible label for the checkbox |
| `checked` | boolean | No | Initial state |
| `disabled` | boolean | No | Disables interaction |
| `bind` | string | No | Binding path |

## ✅ Allowed Content
Self-closing or include custom label.

## 💡 Examples
**Agree checkbox**
```xml
<checkbox label="I agree to terms" bind="form.termsAccepted"/>
```

## 🧩 AI Interpretation Guidelines
- Render using native checkbox input with label.
- Use `bind` for form state control.
- Apply accessibility labels if not visually present.
---