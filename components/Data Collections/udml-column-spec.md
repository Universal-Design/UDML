# `<column>` Component

The `<column>` component defines a single column in a `<datatable>`, including the label, data key, and presentation properties.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Key of the data field to display |
| `label` | string | Yes | Header text for the column |
| `width` | string | No | Fixed or percentage width (e.g., `80px`, `25%`) |
| `sortable` | boolean | No | Enable sorting for this column |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**ID column**
```xml
<column name="id" label="User ID" width="80px" sortable="true"/>
```

## 🧩 AI Interpretation Guidelines
- Use `name` to map values from data rows.
- Render `label` as column header.
- Enable sort UI when `sortable` is true.
---