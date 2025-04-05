# `<breadcrumbs>` Component

The `<breadcrumbs>` component displays a navigation trail showing the user’s current location within a hierarchy.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `separator` | string | No | Character or icon between breadcrumb items (e.g., `/`, `>`) |

## ✅ Allowed Content
Combination of `<link>`, `<text>`, or `<breadcrumbItem>`.

## 💡 Examples
**Basic breadcrumb**
```xml
<breadcrumbs>
  <link href="/home">Home</link>
  <link href="/products">Products</link>
  <text>Widgets</text>
</breadcrumbs>
```

## 🧩 AI Interpretation Guidelines
- Render items inline with `separator` between them.
- Use the last item as current/active page.
- Mark accessibility role as `navigation` with `aria-label`.
---