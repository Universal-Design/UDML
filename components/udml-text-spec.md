# <text> Component

The `<text>` component renders inline or block text content. It can express different visual weights, sizes, or semantic roles (e.g., heading, body, caption).
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | string | No | Visual/textual variant (e.g., `title`, `body`, `caption`, `meta`) |
| `size` | string | No | Font size (`xs`, `sm`, `md`, `lg`, `xl`, etc.) |
| `weight` | string | No | Font weight (`normal`, `bold`, `light`) |
| `color` | string | No | Text color, can use a token (e.g., `primary`, `onBackground`) |
| `align` | string | No | Text alignment (`left`, `center`, `right`) |
| `ai-hint` | string | No | Optional guidance for AI if the content or usage is ambiguous |

## 💡 Examples
**Simple Heading**
```xml
<text variant="title">Welcome</text>
```

**Body Text**
```xml
<text size="md" color="muted">This is an example of body content.</text>
```

---