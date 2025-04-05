# `<icon>`

The `<icon>` component renders a named vector icon. It supports alignment, size, and color styling.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Icon identifier (e.g., `search`, `check`, `trash`) |
| `size` | string | No | Pixel or token value (e.g., `24px`, `sm`) |
| `color` | string | No | Icon color or token |
| `ariaLabel` | string | No | Accessible label for screen readers |

## ✅ Allowed Content
Self-closing only. No children.

## 💡 Examples
**Simple icon**
```xml
<icon name="check" color="success"/>
```

## 🧩 AI Interpretation Guidelines
- Map `name` to an icon set (e.g., Lucide, Material, Feather).
- Use `ariaLabel` for accessible usage if the icon is not decorative.
- Position inline with text or next to interactive elements.
---