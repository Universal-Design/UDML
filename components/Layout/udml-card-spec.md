# `<card>` Component

The `<card>` component is a visually distinct container used to group related content or UI elements, often with padding, border, and elevation.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | string | No | `default`, `elevated`, `outlined`, `hoverable` |
| `padding` | string | No | Spacing inside the card (e.g., `md`, `24px`) |
| `radius` | string | No | Border radius (e.g., `sm`, `lg`, `0`) |
| `shadow` | string | No | Shadow depth or token (e.g., `sm`, `xl`) |
| `fillStyle` | string | No | Named background or surface style |

## ✅ Allowed Content
Any content component or layout element.

## 💡 Examples
**Basic card**
```xml
<card variant="elevated">
  <text>Card content goes here</text>
</card>
```

## 🧩 AI Interpretation Guidelines
- Render with visual styling such as border, padding, radius, and shadow.
- Use `variant` and `fillStyle` to control surface appearance.
- Commonly used to group settings, previews, or widgets.
---