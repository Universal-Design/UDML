# `<listItem>` Component

The `<listItem>` component represents a single item in a list. It can include text, icons, and nested content.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | string | No | Optional icon name |
| `selected` | boolean | No | Marks the item as selected or active |
| `href` | string | No | Makes the item a navigable link |
| `ai-hint` | string | No | Hint about the item's purpose |

## ✅ Allowed Content
Text and simple elements (e.g. `<icon>`, `<text>`, `<badge>`).

## 💡 Examples
**Menu item**
```xml
<listItem icon="user" href="/profile">Profile</listItem>
```

## 🧩 AI Interpretation Guidelines
- Render as list row with optional icon and interactivity.
- Apply `selected` state visually if present.
- Use `href` for navigation links or route anchors.
---