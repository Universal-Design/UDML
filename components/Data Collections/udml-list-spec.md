# `<list>` Component

The `<list>` component displays a vertically stacked collection of items, often interactive or stylized. Use `<listItem>` for individual entries.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | string | No | `unordered`, `ordered`, or `navigation` |
| `divider` | boolean | No | Whether to show a separator between items |
| `iconAlign` | string | No | `left`, `right` (for nav or icon lists) |
| `bind` | string | No | Path to a data array to loop over |
| `ai-hint` | string | No | Describes the type of list (e.g., 'menu', 'task list') |

## ✅ Allowed Content
<listItem> elements.

## 💡 Examples
**Navigation list**
```xml
<list variant="navigation">
  <listItem icon="home">Home</listItem>
  <listItem icon="settings">Settings</listItem>
</list>
```

## 🧩 AI Interpretation Guidelines
- Render as `<ul>`, `<ol>`, or nav depending on `variant`.
- Use data binding (`bind`) to loop over and render items.
- If `divider` is true, insert separators between items.
---