# <select> Component

The `<select>` component renders a dropdown menu for selecting one (or optionally multiple) values.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | Label displayed with the field |
| `value` | string | No | Selected value |
| `placeholder` | string | No | Placeholder shown when no value is selected |
| `disabled` | boolean | No | Disables the input |
| `multiple` | boolean | No | Allows multiple selection |

## 💡 Examples
**Single Select**
```xml
<select label="Country"><option value="us">USA</option><option value="ca">Canada</option></select>
```

**Multi Select**
```xml
<select multiple="true"><option value="a">A</option><option value="b">B</option></select>
```

---