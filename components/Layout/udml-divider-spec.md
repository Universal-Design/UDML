# `<divider>`

The `<divider>` component visually separates content with a horizontal or vertical line.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `orientation` | string | No | `horizontal` (default) or `vertical` |
| `thickness` | string | No | Line width or border thickness |
| `color` | string | No | Line color or token |
| `length` | string | No | Length override (e.g., `50%`) |

## ✅ Allowed Content
Standalone only. Should not wrap other elements.

## 💡 Examples
**Simple divider**
```xml
<divider/>
```

**Vertical divider**
```xml
<divider orientation="vertical" length="32px"/>
```

## 🧩 AI Interpretation Guidelines
- Render as `<hr>` or styled div based on orientation.
- Use for visual breaks between sections or layout columns.
---
