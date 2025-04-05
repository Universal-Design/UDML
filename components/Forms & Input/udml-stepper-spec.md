# `<stepper>` Component

The `<stepper>` component provides increment/decrement control for numeric values, typically with plus/minus buttons.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `min` | number | No | Minimum allowed value |
| `max` | number | No | Maximum allowed value |
| `step` | number | No | Increment step |
| `value` | number | No | Current or starting value |
| `bind` | string | No | Data binding path |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Quantity selector**
```xml
<stepper min="1" max="10" bind="form.quantity"/>
```

## 🧩 AI Interpretation Guidelines
- Render with step-up/down buttons and numeric field.
- Bind to state or form schema appropriately.
---