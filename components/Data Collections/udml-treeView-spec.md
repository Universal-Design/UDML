# `<treeView>` Component

The `<treeView>` component displays nested hierarchical data with expandable/collapsible nodes.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `bind` | string | Yes | Path to a nested data array |
| `labelKey` | string | No | Field name to display for each node label |
| `childrenKey` | string | No | Field name for nested children arrays |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**File explorer**
```xml
<treeView bind="files" labelKey="name" childrenKey="children"/>
```

## 🧩 AI Interpretation Guidelines
- Render tree using recursive component patterns.
- Display each node’s `labelKey` and use `childrenKey` for nesting.
- Support expand/collapse interactions for child nodes.
---