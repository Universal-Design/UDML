# `<container>` Component

The `<container>` component defines a constrained content wrapper, often used to center or limit content width.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `maxWidth` | string | No | Sets a maximum width (e.g., `768px`, `container-lg`) |
| `padding` | string | No | Applies padding to the container |
| `align` | string | No | `left`, `center`, or `right` alignment within the parent |

## ✅ Allowed Content
Any layout or content components.

## 💡 Examples
**Centered container**
```xml
<container maxWidth="1024px" align="center">...</container>
```

## 🧩 AI Interpretation Guidelines
- Wrap page or section content to align and constrain layout width.
- Apply responsive widths where applicable.
- Use for sectioning within screens.
---