# `<dialog>` Component

The `<dialog>` component is a smaller, simpler variation of `<modal>` typically used for confirmations, alerts, and interactions.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `open` | boolean | Yes | Controls visibility |
| `title` | string | No | Dialog heading text |
| `closable` | boolean | No | Show a close button |
| `size` | string | No | `sm`, `md` (default is `sm`) |
| `type` | string | No | `alert`, `confirm`, `custom` |

## ✅ Allowed Content
Text, buttons, or simple forms.

## 💡 Examples
**Confirmation dialog**
```xml
<dialog open="true" title="Delete item?" type="confirm">...</dialog>
```

## 🧩 AI Interpretation Guidelines
- Render as alert or confirm dialog depending on `type`.
- Support cancel/confirm actions as needed.
- Bind open state to toggle visibility.
---