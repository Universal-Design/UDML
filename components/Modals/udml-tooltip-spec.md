# `<tooltip>` Component

The `<tooltip>` component provides contextual help or labels when users hover or focus on an element.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | Tooltip content |
| `position` | string | No | `top`, `bottom`, `left`, `right` |
| `trigger` | string | No | `hover`, `focus`, `manual` |

## ✅ Allowed Content
Single interactive or icon element as a child.

## 💡 Examples
**Tooltip on icon**
```xml
<tooltip text="Settings" position="bottom">
  <icon name="gear"/>
</tooltip>
```

## 🧩 AI Interpretation Guidelines
- Wrap target element with tooltip handler.
- Use `text` as the content and `position` for placement.
- Trigger on hover/focus unless `manual` is specified.
---