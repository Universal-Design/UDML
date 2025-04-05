# `<box>` Component

The `<box>` component is a versatile container that supports both relative and absolute positioning. It can be used as a basic container or as a positioning context for absolutely positioned children.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `position` | string | No | Positioning context (`relative`, `absolute`, `fixed`) |
| `width` | string | No | Width of the box (e.g., `100%`, `300px`) |
| `height` | string | No | Height of the box (e.g., `100%`, `200px`) |
| `top` | string | No | Top position for absolute/fixed positioning |
| `right` | string | No | Right position for absolute/fixed positioning |
| `bottom` | string | No | Bottom position for absolute/fixed positioning |
| `left` | string | No | Left position for absolute/fixed positioning |
| `padding` | string | No | Inner spacing (e.g., `16px`, `8px 16px`) |
| `margin` | string | No | Outer spacing (e.g., `16px`, `8px 16px`) |
| `background` | string | No | Background color or image |
| `border` | string | No | Border style (e.g., `1px solid #eee`) |
| `radius` | string | No | Border radius (e.g., `4px`, `50%`) |
| `shadow` | string | No | Box shadow (e.g., `0 2px 4px rgba(0,0,0,0.1)`) |
| `overflow` | string | No | Overflow behavior (`visible`, `hidden`, `scroll`, `auto`) |

## ✅ Allowed Content
Any valid UDML components or elements.

## 💡 Examples

**Basic Container**
```xml
<box 
  padding="16px"
  background="#fff"
  border="1px solid #eee"
  radius="4px"
>
  <text>Content</text>
</box>
```

**Positioning Context**
```xml
<box position="relative" height="200px">
  <text>Main Content</text>
  <box 
    position="absolute"
    top="16px"
    right="16px"
    background="#f5f5f5"
    padding="8px"
  >
    <text>Floating Content</text>
  </box>
</box>
```

**Card with Shadow**
```xml
<box 
  padding="24px"
  background="#fff"
  radius="8px"
  shadow="0 4px 6px rgba(0,0,0,0.1)"
>
  <column gap="16px">
    <text>Card Title</text>
    <text>Card Content</text>
    <row justify="end">
      <button>Action</button>
    </row>
  </column>
</box>
```

## 🧩 AI Interpretation Guidelines
- Generate appropriate container element based on context
- Apply specified positioning and dimensions
- Handle padding and margin correctly
- Apply visual styles (background, border, shadow)
- Maintain proper stacking context for absolute positioning
- Handle overflow behavior appropriately
- Support nested positioning contexts
---
