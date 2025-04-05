# `<select>` Component

The `<select>` component presents a dropdown list of options. Use with nested `<option>` elements.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Form field name |
| `value` | string | No | Currently selected value |
| `placeholder` | string | No | Displayed when no option is selected |
| `bind` | string | No | Data binding path |
| `multiple` | boolean | No | Allow multiple selections |

## ✅ Allowed Content
`<option>` children only.

## 💡 Examples
**Country dropdown**
```xml
<select bind="user.country">
  <option value="us">USA</option>
  <option value="ca">Canada</option>
</select>
```

## 🧩 AI Interpretation Guidelines
- Render as `<select>` or equivalent component.
- Loop options from nested `<option>` nodes.
- Handle multi-select mode and default selection.
---