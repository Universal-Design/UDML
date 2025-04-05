# `<image>` Component

The `<image>` component renders an image with optional alt text, sizing, and display fit.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | Yes | Image source path or URL |
| `alt` | string | No | Accessible description or label |
| `fit` | string | No | `cover`, `contain`, or `fill` |
| `width` | string | No | Fixed or max width |
| `height` | string | No | Fixed or max height |
| `radius` | string | No | Corner rounding |
| `fillStyle` | string | No | Background or surface styling |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Hero image**
```xml
<image src="cover.jpg" fit="cover" alt="Hero banner"/>
```

## 🧩 AI Interpretation Guidelines
- Render with `img` tag or equivalent image component.
- Respect `alt` for accessibility.
- Map `fit` and `radius` to object-fit and border-radius.
---