# `<pagination>` Component

The `<pagination>` component lets users navigate through pages of content or data.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `total` | number | Yes | Total number of pages |
| `current` | number | Yes | Current active page |
| `size` | string | No | `sm`, `md`, `lg` |
| `ai-hint` | string | No | Clarify content type being paginated (e.g., 'articles', 'results') |

## ✅ Allowed Content
Self-closing or include custom slot content.

## 💡 Examples
**Pagination controls**
```xml
<pagination total="5" current="2"/>
```

## 🧩 AI Interpretation Guidelines
- Render page number buttons and next/prev controls.
- Mark `current` as active and disabled.
- Generate page array from 1 to `total`.
---