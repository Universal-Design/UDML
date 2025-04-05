# `<text>`

The `<text>` component renders inline or block text content. It supports styling and semantic variants for body copy, labels, metadata, and headings.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | string | No | Semantic role (e.g., `title`, `body`, `caption`, `meta`) |
| `size` | string | No | Font size token (e.g., `sm`, `md`, `xl`) |
| `weight` | string | No | `light`, `normal`, `bold` |
| `color` | string | No | Text color or token |
| `align` | string | No | `left`, `center`, `right` |
| `truncate` | boolean | No | If true, text is truncated with an ellipsis |
| `textStyle` | string | No | Reference to named text style |
| `ai-hint` | string | No | Semantic description for ambiguous or dynamic content |

## ✅ Allowed Content
Plain text or binding.

## 💡 Examples
**Body text**
```xml
<text size="md" color="muted">This is a paragraph.</text>
```

**Heading**
```xml
<text variant="title" weight="bold">Dashboard</text>
```

## 🧩 AI Interpretation Guidelines
- Use `variant` or `textStyle` to determine semantics and styling.
- Resolve `truncate` and layout-related attributes for overflow control.
- Use `ai-hint` to clarify purpose or data intent.
---