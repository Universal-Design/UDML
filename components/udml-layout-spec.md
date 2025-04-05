# <layout> Component

The `<layout>` component arranges child elements using semantic layout models such as stack, row, or grid.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | `stack`, `row`, or `grid` |
| `gap` | string | No | Spacing between child elements (e.g., `md`) |
| `align` | string | No | `start`, `center`, `end`, `stretch` |
| `justify` | string | No | Main axis alignment (`start`, `center`, `between`, etc.) |
| `columns` | int | No | Number of columns (for grid layouts) |

## 💡 Examples
**Vertical Stack**
```xml
<layout type="stack" gap="md">...</layout>
```

**Grid Layout**
```xml
<layout type="grid" columns="3">...</layout>
```

---