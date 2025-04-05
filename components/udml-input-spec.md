# <input> Component

The `<input>` component is used in forms for collecting user-entered text data.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | `text`, `email`, `password`, `number`, etc. |
| `label` | string | No | Visual or semantic label |
| `placeholder` | string | No | Input placeholder text |
| `value` | string | No | Controlled value |
| `disabled` | boolean | No | Disables the input |
| `required` | boolean | No | Marks the input as required |
| `onChange` | string | No | Handler or data binding reference |

## 💡 Examples
**Text Input**
```xml
<input type="text" placeholder="Enter your name"/>
```

**Email Field**
```xml
<input type="email" label="Email Address"/>
```

---