# `<row>` Component

The `<row>` component represents one row of data within a `<datatable>`. Typically used when binding is not declared at table level.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|

## ✅ Allowed Content
<cell> elements only.

## 💡 Examples
**Manual row**
```xml
<row>
  <cell>001</cell>
  <cell>$120.00</cell>
</row>
```

## 🧩 AI Interpretation Guidelines
- Render as single row in a table body.
- Used when row generation is manual or mixed.
---