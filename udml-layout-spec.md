# `<layout>` Component

The `<layout>` component defines spatial arrangement of child elements using a named layout model such as `stack`, `row`, or `grid`.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | `stack`, `row`, or `grid` |
| `gap` | string | No | Spacing between children (e.g., `sm`, `md`, `lg`, or a spacing token) |
| `align` | string | No | `start`, `center`, `end`, `stretch` |
| `justify` | string | No | `start`, `center`, `between`, `around`, etc. |
| `columns` | int | No | Number of columns (only valid for `grid`) |
| `responsive` | boolean | No | Enable adaptive layout per breakpoint (or wrap in `<responsive>`) |

## ✅ Allowed Content
Any child components or layouts.

## 💡 Examples
**Grid layout**
```xml
<layout type="grid" columns="3" gap="md">...</layout>
```

**Stacked column**
```xml
<layout type="stack" gap="lg">...</layout>
```

## 🧩 AI Interpretation Guidelines
- Use `type` to determine flex or grid layout.
- Map `gap`, `align`, `justify`, and `columns` to layout-specific styles.
- Respect layout responsiveness via `responsive` or wrapping in `<responsive>`.
---