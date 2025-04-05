# `<formField>` Component

The `<formField>` component wraps a single form input, along with its label, validation message, and optional helper text.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | Label for the form field |
| `name` | string | Yes | Unique identifier for form binding |
| `description` | string | No | Optional helper or instruction text |
| `required` | boolean | No | Marks the field as required |
| `ai-hint` | string | No | Clarifies the expected input or purpose |

## ✅ Allowed Content
A single child input, such as `<input>`, `<textarea>`, or `<select>`.

## 💡 Examples
**Field with label**
```xml
<formField name="email" label="Email address">
  <input type="email" bind="user.email"/>
</formField>
```

## 🧩 AI Interpretation Guidelines
- Render label and description using accessibility best practices.
- Bind input value to the `name` path or pass it to form logic.
- Show validation or required indicators based on props.
---