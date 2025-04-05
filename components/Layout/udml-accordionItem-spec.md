# `<accordionItem>` Component

The `<accordionItem>` component defines a single collapsible section within an `<accordion>`. It includes a title and expandable content area.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique ID used to track open/closed state |
| `title` | string | Yes | Text displayed in the accordion header |
| `icon` | string | No | Optional icon to display next to the title |
| `disabled` | boolean | No | Prevents user interaction or toggling |

## ✅ Allowed Content
Any content to display inside the expanded area.

## 💡 Examples
**Accordion section**
```xml
<accordionItem id="details" title="More Details">
  <text>This section includes extra information.</text>
</accordionItem>
```

## 🧩 AI Interpretation Guidelines
- Render header with `title` (and optional `icon`).
- Use `id` to link open/close state from the parent `<accordion>`.
- Display children only when this item is expanded.
- Disable interactivity if `disabled` is true.
---