# `<avatar>` Component

The `<avatar>` component displays a profile image or initials as a circular or rounded shape.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | No | Image source URL |
| `alt` | string | No | Accessible label (e.g., user's name) |
| `initials` | string | No | Fallback initials (e.g., `JD`) |
| `size` | string | No | `sm`, `md`, `lg`, or exact pixel value |
| `radius` | string | No | `full`, `rounded`, or custom |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**User avatar**
```xml
<avatar src="/images/user.png" alt="Jane Doe"/>
```

**Initials fallback**
```xml
<avatar initials="JD" size="lg"/>
```

## 🧩 AI Interpretation Guidelines
- Render with image and fallback initials logic.
- Ensure circle or rounded frame with border-radius.
- Map to user profile display components.
---