# `<row>` Component

The `<row>` component arranges its children horizontally in a flex container. It provides control over horizontal and vertical alignment, spacing, and wrapping behavior.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `align` | string | No | Vertical alignment of items (`start`, `center`, `end`, `stretch`, `baseline`) |
| `justify` | string | No | Horizontal alignment of items (`start`, `center`, `end`, `space-between`, `space-around`, `space-evenly`) |
| `gap` | string | No | Spacing between items (e.g., `8px`, `1rem`) |
| `wrap` | boolean | No | Allow items to wrap to next line (`true`, `false`) |
| `reverse` | boolean | No | Reverse the order of items (`true`, `false`) |
| `height` | string | No | Height of the row (e.g., `100%`, `auto`) |

## ✅ Allowed Content
Any valid UDML components or elements.

## 💡 Examples

**Basic Row**
```xml
<row gap="16px">
  <button>First</button>
  <button>Second</button>
  <button>Third</button>
</row>
```

**Centered Row with Wrapping**
```xml
<row 
  align="center"
  justify="center"
  gap="8px"
  wrap="true"
>
  <box width="200px">Item 1</box>
  <box width="200px">Item 2</box>
  <box width="200px">Item 3</box>
</row>
```

**Space Between Row**
```xml
<row justify="space-between" align="center">
  <text>Left Content</text>
  <row gap="8px">
    <button>Action 1</button>
    <button>Action 2</button>
  </row>
</row>
```

## 🧩 AI Interpretation Guidelines
- Generate a flex container with `flex-direction: row`
- Apply specified alignment and justification
- Add gap between items if specified
- Enable wrapping if `wrap="true"`
- Reverse order if `reverse="true"`
- Maintain proper spacing and alignment in nested structures
--- 