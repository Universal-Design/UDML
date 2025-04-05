# <card> Component

The `<card>` component visually groups related content, typically with elevation, padding, and optional borders or headers.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `elevation` | int | No | Shadow depth or visual elevation (0–4) |
| `padding` | string | No | Inner spacing |
| `borderRadius` | string | No | Corner radius |
| `background` | string | No | Background color or token |
| `interactive` | boolean | No | Marks the card as clickable or hoverable |

## 💡 Examples
**Simple Card**
```xml
<card padding="md"><text>Card Content</text></card>
```

**Interactive Card**
```xml
<card elevation="2" interactive="true">...</card>
```

---