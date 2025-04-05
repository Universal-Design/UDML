# `<datatable>` Component

The `<datatable>` component presents structured tabular data. Define columns using `<column>` and rows using `<row>` and `<cell>`.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `bind` | string | Yes | Data array path to render as rows |
| `sortable` | boolean | No | Enable sort interactions |
| `filterable` | boolean | No | Enable filter UI |
| `paginate` | boolean | No | Enable pagination UI |
| `ai-hint` | string | No | Describes the type of data shown |

## ✅ Allowed Content
<column> and optionally inline <row>/<cell>.

## 💡 Examples
**Simple table**
```xml
<datatable bind="orders">
  <column name="orderId" label="Order ID"/>
  <column name="total" label="Total"/>
</datatable>
```

## 🧩 AI Interpretation Guidelines
- Loop over `bind` array and generate rows with corresponding cells.
- Use `<column>` definitions for headers and data mapping.
- Apply interactivity if `sortable`, `filterable`, or `paginate` are true.
---