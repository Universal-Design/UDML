# `<accordion>` Component

The `<accordion>` component allows users to toggle visibility of detailed content, grouped under expandable headers.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `multiExpand` | boolean | No | Allow multiple items open at once |
| `defaultOpen` | string | No | ID(s) of panels open by default |

## ✅ Allowed Content
<accordionItem> children only.

## 💡 Examples
**Multi-panel accordion**
```xml
<accordion multiExpand="true">
  <accordionItem id="panel1" title="Section A">A details</accordionItem>
  <accordionItem id="panel2" title="Section B">B details</accordionItem>
</accordion>
```

## 🧩 AI Interpretation Guidelines
- Render collapsible sections based on `accordionItem` children.
- Use `multiExpand` to allow toggling more than one at a time.
- Match `defaultOpen` to item IDs to initialize expanded state.
---