# `<cell>` Component

The `<cell>` component represents a single cell in a data table row. It may contain static content or be bound to data.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `align` | string | No | `left`, `center`, or `right` |
| `colSpan` | int | No | Number of columns to span |
| `bind` | string | No | Data path to populate this cell from the row context |

## ✅ Allowed Content
Text or dynamic binding content.

## 💡 Examples
**Bound cell**
```xml
<cell bind="order.total" align="right"/>
```

## 🧩 AI Interpretation Guidelines
- Resolve `bind` within the row's data context.
- Apply text alignment and column spanning as needed.
- Fallback to `placeholder` or default value if binding is missing.
---