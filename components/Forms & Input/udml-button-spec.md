# `<button>`

The `<button>` component represents an interactive button used to trigger actions or submit forms. It supports variant styling and optional icons.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | `button`, `submit`, or `reset` |
| `variant` | string | No | `primary`, `secondary`, `ghost`, etc. |
| `size` | string | No | `sm`, `md`, `lg` |
| `icon` | string | No | Name of optional leading icon |
| `disabled` | boolean | No | Disables the button |
| `style` | string | No | Reference to a named custom style |
| `ai-hint` | string | No | Clarifies the button's intent or behavior |

## ✅ Allowed Content
Text and optionally inline elements.

## 💡 Examples
**Primary Button**
```xml
<button variant="primary" icon="plus">Add</button>
```

**Disabled**
```xml
<button disabled="true">Save</button>
```

## 🧩 AI Interpretation Guidelines
- Render as `<button>` or `<input type='button'>` based on context.
- Apply `variant` and `size` using class tokens or style props.
- Use `ai-hint` to infer logic or form behavior.
---