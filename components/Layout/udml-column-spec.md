# `<column>` Component

The `<column>` component arranges its children vertically in a flex container. It provides control over vertical and horizontal alignment, spacing, and content distribution.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `align` | string | No | Horizontal alignment of items (`start`, `center`, `end`, `stretch`) |
| `justify` | string | No | Vertical alignment of items (`start`, `center`, `end`, `space-between`, `space-around`, `space-evenly`) |
| `gap` | string | No | Spacing between items (e.g., `8px`, `1rem`) |
| `width` | string | No | Width of the column (e.g., `100%`, `300px`) |
| `maxHeight` | string | No | Maximum height before scrolling (e.g., `100vh`, `500px`) |
| `scroll` | boolean | No | Enable vertical scrolling when content exceeds maxHeight |

## ✅ Allowed Content
Any valid UDML components or elements.

## 💡 Examples

**Basic Column**
```xml
<column gap="16px">
  <text>Header</text>
  <text>Content</text>
  <text>Footer</text>
</column>
```

**Centered Column with Scrolling**
```xml
<column 
  align="center"
  gap="8px"
  maxHeight="400px"
  scroll="true"
>
  <box>Item 1</box>
  <box>Item 2</box>
  <box>Item 3</box>
  <!-- More items will scroll -->
</column>
```

**Form Layout**
```xml
<column gap="24px" width="400px">
  <text>Sign Up Form</text>
  <input placeholder="Email"/>
  <input placeholder="Password"/>
  <row justify="space-between">
    <checkbox>Remember me</checkbox>
    <button>Submit</button>
  </row>
</column>
```

## 🧩 AI Interpretation Guidelines
- Generate a flex container with `flex-direction: column`
- Apply specified alignment and justification
- Add gap between items if specified
- Enable scrolling if `scroll="true"` and content exceeds `maxHeight`
- Maintain proper spacing and alignment in nested structures
- Handle width constraints appropriately
--- 