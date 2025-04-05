# `<grid>` Component

The `<grid>` component arranges its children in a two-dimensional grid layout. It provides control over columns, rows, areas, and spacing between grid items.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `columns` | string | No | Number of columns or column sizes (e.g., `3`, `1fr 2fr 1fr`) |
| `rows` | string | No | Number of rows or row sizes (e.g., `auto`, `100px 1fr`) |
| `gap` | string | No | Spacing between grid items (e.g., `16px`) |
| `areas` | string | No | Named grid areas (e.g., `"header header header" "main main sidebar"`) |
| `align` | string | No | Vertical alignment of items (`start`, `center`, `end`, `stretch`) |
| `justify` | string | No | Horizontal alignment of items (`start`, `center`, `end`, `stretch`) |

## Grid Item Attributes
These attributes can be applied to direct children of `<grid>`:
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `area` | string | No | Named grid area to place the item |
| `column` | string | No | Column placement (e.g., `1 / 3`, `span 2`) |
| `row` | string | No | Row placement (e.g., `1 / 3`, `span 2`) |

## ✅ Allowed Content
Any valid UDML components or elements.

## 💡 Examples

**Basic Grid**
```xml
<grid columns="3" gap="16px">
  <box>Item 1</box>
  <box>Item 2</box>
  <box>Item 3</box>
  <box>Item 4</box>
  <box>Item 5</box>
  <box>Item 6</box>
</grid>
```

**Grid with Areas**
```xml
<grid 
  columns="1fr 2fr 1fr"
  rows="auto 1fr auto"
  gap="16px"
  areas="header header header, main main sidebar, footer footer footer"
>
  <box area="header">Header</box>
  <box area="main">Main Content</box>
  <box area="sidebar">Sidebar</box>
  <box area="footer">Footer</box>
</grid>
```

**Complex Grid Layout**
```xml
<grid 
  columns="repeat(12, 1fr)"
  rows="100px 1fr 100px"
  gap="24px"
>
  <box column="1 / 13" row="1">Header</box>
  <box column="1 / 9" row="2">Main Content</box>
  <box column="9 / 13" row="2">Sidebar</box>
  <box column="1 / 13" row="3">Footer</box>
</grid>
```

## 🧩 AI Interpretation Guidelines
- Generate a CSS Grid container
- Apply specified column and row definitions
- Add gap between items if specified
- Handle grid area definitions
- Apply proper alignment to grid items
- Support responsive grid layouts
- Maintain proper spacing and alignment in nested structures
--- 