# `<emptyState>` Component

The `<emptyState>` component is shown when a list, table, or view has no content. It often includes an illustration and call-to-action.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Primary message or heading |
| `description` | string | No | Optional supporting text |
| `icon` | string | No | Name of an icon or illustration |
| `actionLabel` | string | No | Optional CTA button text |

## ✅ Allowed Content
Self-closing or may include child content for layout overrides.

## 💡 Examples
**No data placeholder**
```xml
<emptyState title="No results found" description="Try adjusting your filters." icon="search-off" actionLabel="Clear filters"/>
```

## 🧩 AI Interpretation Guidelines
- Render a centered, visually distinct state when content is missing.
- Use `title`, `description`, and optional `actionLabel` as structured content.
- Display an illustration or icon as needed.
---