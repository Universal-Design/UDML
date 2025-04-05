# <image> Component

The `<image>` component renders a static image. Used for avatars, product photos, icons, etc.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | Yes | Image source URL |
| `alt` | string | No | Alt text for screen readers |
| `fit` | string | No | `cover`, `contain`, or `fill` |
| `radius` | string | No | Border radius or shape token |
| `width` | string | No | Explicit width |
| `height` | string | No | Explicit height |

## 💡 Examples
**Basic Image**
```xml
<image src="cover.jpg" alt="Cover photo"/>
```

**Avatar Style**
```xml
<image src="user.jpg" radius="full" width="64px"/>
```

---