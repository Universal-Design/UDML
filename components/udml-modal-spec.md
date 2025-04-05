# <modal> Component

The `<modal>` component displays content in a temporary overlay that interrupts the current UI flow.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `isOpen` | boolean | Yes | Controls visibility of the modal |
| `onClose` | string | No | Handler for closing the modal |
| `size` | string | No | Size of the modal (`sm`, `md`, `lg`) |
| `title` | string | No | Optional header/title text |

## 💡 Examples
**Basic Modal**
```xml
<modal isOpen="true" title="Info"><text>This is a modal</text></modal>
```

**With Close**
```xml
<modal isOpen="true" onClose="closeModal">...</modal>
```

---