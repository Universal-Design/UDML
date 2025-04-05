# `<popover>` Component

The `<popover>` component displays a small bubble near a trigger element, often with actions or additional context.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `open` | boolean | Yes | Controls visibility |
| `position` | string | No | `top`, `bottom`, `left`, `right` |
| `trigger` | string | No | `click`, `hover`, `manual` |

## ✅ Allowed Content
Trigger and content children (e.g., buttons, lists).

## 💡 Examples
**Popover menu**
```xml
<popover open="true" position="bottom">
  <button>Options</button>
  <list>
    <listItem>Settings</listItem>
    <listItem>Log out</listItem>
  </list>
</popover>
```

## 🧩 AI Interpretation Guidelines
- Render popover relative to the first child as trigger.
- Toggle visibility based on `open` and `trigger`.
- Position based on the `position` attribute.
---