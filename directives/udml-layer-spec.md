# `<layer>` Directive

The `<layer>` directive defines the z-axis position and spatial positioning of elements relative to their container or viewport. It provides a semantic way to control element stacking and positioning.

---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `z-index` | number | No | Z-axis position (default: 0) |
| `type` | string | No | Semantic type ('overlay', 'tooltip', 'modal', 'navigation', etc.) |
| `position` | string | No | Positioning method ('absolute', 'fixed', 'relative') |
| `align` | string | No | Alignment ('start', 'center', 'end') |
| `edge` | string | No | Edge anchoring ('left', 'right', 'top', 'bottom', 'center') |
| `margin` | string | No | Margin from edge (e.g., '10px', '1rem') |
| `offset` | string | No | Additional offset from alignment |
| `parent` | string | No | ID of parent layer group |

## ✅ Allowed Content
- Any UDML elements that need positioning or layering
- Nested layer groups
- Positioning context containers

## 💡 Examples

**Basic Z-Index Layering**
```xml
<button layer z-index="1">Base Button</button>
<button layer z-index="2">Raised Button</button>
<button layer z-index="3">Highest Button</button>
```

**Modal Overlay**
```xml
<modal layer z-index="100" type="modal" position="fixed" align="center" edge="center">
  <content>Modal Content</content>
</modal>
```

**Navigation Arrows**
```xml
<button layer z-index="2" 
        type="navigation" 
        position="absolute" 
        align="center" 
        edge="left" 
        margin="10px"
        class="arrow-left">
  <icon name="chevron-left"/>
</button>

<button layer z-index="2" 
        type="navigation" 
        position="absolute" 
        align="center" 
        edge="right" 
        margin="10px"
        class="arrow-right">
  <icon name="chevron-right"/>
</button>
```

**Tooltip System**
```xml
<button layer z-index="1">Hover me</button>
<tooltip layer z-index="50" 
         type="tooltip" 
         position="absolute" 
         align="start" 
         edge="right" 
         margin="5px"
         parent="button1">
  <content>Tooltip content</content>
</tooltip>
```

**Dropdown Menu**
```xml
<button layer z-index="1">Menu</button>
<menu layer z-index="10" 
      type="dropdown" 
      position="absolute" 
      align="start" 
      edge="bottom" 
      margin="5px"
      parent="menuButton">
  <item>Option 1</item>
  <item>Option 2</item>
  <item>Option 3</item>
</menu>
```

## 🧩 AI Interpretation Guidelines

### Z-Index Handling
- Higher z-index values appear above lower values
- Elements with same z-index follow DOM order
- Consider semantic layer types for accessibility
- Maintain consistent layer hierarchy
- Handle layer conflicts appropriately

### Positioning
- Convert position attributes to appropriate CSS
- Handle edge cases for multiple alignments
- Maintain responsive behavior
- Consider parent container constraints
- Ensure proper stacking context
- Handle nested positioning correctly

### Accessibility
- Use semantic layer types for screen readers
- Maintain proper focus order
- Ensure keyboard navigation works
- Consider reduced motion preferences
- Handle high contrast modes

### Performance
- Minimize layer changes
- Use hardware acceleration when possible
- Consider layer composition
- Handle layer updates efficiently
- Manage memory for fixed layers

## Common Layer Types

| Type | Description | Typical z-index | Use Case |
|------|-------------|-----------------|----------|
| `base` | Default layer | 0 | Regular content |
| `raised` | Slightly elevated | 1-10 | Hover states, cards |
| `overlay` | Content overlay | 20-30 | Dropdowns, tooltips |
| `modal` | Modal dialogs | 100-200 | Dialogs, alerts |
| `toast` | Notifications | 300-400 | System messages |
| `loading` | Loading states | 500-600 | Loading indicators |
| `debug` | Debug overlay | 9999 | Development tools |

## Positioning Contexts

### Absolute Positioning
- Positioned relative to nearest positioned ancestor
- Use for overlays within containers
- Maintains scroll context

### Fixed Positioning
- Positioned relative to viewport
- Use for persistent UI elements
- Ignores scroll context

### Relative Positioning
- Establishes positioning context
- Use for container elements
- Maintains document flow