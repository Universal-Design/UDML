# `<button>`

The `<button>` component represents an interactive button used to trigger actions or submit forms. It supports variant styling, size options, and optional icons through a complete structural definition approach.

---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | `button`, `submit`, or `reset` |
| `variant` | string | No | Visual style variant |
| `size` | string | No | Size variant |
| `state` | string | No | Current state |
| `style` | string | No | Additional style overrides |
| `ai-hint` | string | No | Context for AI interpretation |

## Component Definition

```xml
<component name="button">
  <!-- Base Structure -->
  <base>
    <row padding="8 16 8 16" color="blue" radius="4">
      <icon name="leadIcon" />
      <text name="buttonLabel" textStyle="buttonMedium">Button Label</text>
      <icon name="endIcon" />
    </row>
  </base>

  <!-- Size Variants -->
  <size name="sm">
    <row padding="6 12 6 12" color="blue" radius="3">
      <icon name="leadIcon" size="16" />
      <text name="buttonLabel" textStyle="buttonSmall">Button Label</text>
      <icon name="endIcon" size="16" />
    </row>
  </size>

  <size name="lg">
    <row padding="12 24 12 24" color="blue" radius="6">
      <icon name="leadIcon" size="24" />
      <text name="buttonLabel" textStyle="buttonLarge">Button Label</text>
      <icon name="endIcon" size="24" />
    </row>
  </size>

  <!-- Style Variants -->
  <variant name="primary">
    <row padding="8 16 8 16" color="blue" radius="4">
      <icon name="leadIcon" color="white" />
      <text name="buttonLabel" textStyle="buttonMedium" color="white">Button Label</text>
      <icon name="endIcon" color="white" />
    </row>
  </variant>

  <variant name="secondary">
    <row padding="8 16 8 16" color="gray" radius="4">
      <icon name="leadIcon" color="black" />
      <text name="buttonLabel" textStyle="buttonMedium" color="black">Button Label</text>
      <icon name="endIcon" color="black" />
    </row>
  </variant>

  <variant name="ghost">
    <row padding="8 16 8 16" color="transparent" radius="4">
      <icon name="leadIcon" color="blue" />
      <text name="buttonLabel" textStyle="buttonMedium" color="blue">Button Label</text>
      <icon name="endIcon" color="blue" />
    </row>
  </variant>

  <!-- State Variants -->
  <state name="hover">
    <row padding="8 16 8 16" color="darkBlue" radius="4">
      <icon name="leadIcon" color="white" />
      <text name="buttonLabel" textStyle="buttonMedium" color="white">Button Label</text>
      <icon name="endIcon" color="white" />
    </row>
  </state>

  <state name="focus">
    <row padding="8 16 8 16" color="blue" radius="4" outline="2px solid focus">
      <icon name="leadIcon" color="white" />
      <text name="buttonLabel" textStyle="buttonMedium" color="white">Button Label</text>
      <icon name="endIcon" color="white" />
    </row>
  </state>

  <state name="disabled">
    <row padding="8 16 8 16" color="blue" radius="4" opacity="0.5">
      <icon name="leadIcon" color="white" opacity="0.5" />
      <text name="buttonLabel" textStyle="buttonMedium" color="white" opacity="0.5">Button Label</text>
      <icon name="endIcon" color="white" opacity="0.5" />
    </row>
  </state>
</component>
```

## 💡 Examples

**Basic Usage**
```xml
<button>Click me</button>
```

**Primary Button with Icon**
```xml
<button variant="primary" size="lg">
  <icon name="plus" />
  <text>Add Item</text>
</button>
```

**Disabled Secondary Button**
```xml
<button variant="secondary" state="disabled">Save Changes</button>
```

**Ghost Button with Custom Style**
```xml
<button 
  variant="ghost" 
  style="margin: 10px"
  ai-hint="Navigation button in header">
  Menu
</button>
```

## 🧩 AI Interpretation Guidelines

### Component Rendering
1. Start with the base structure
2. Apply size variations if specified
3. Apply style variations if specified
4. Apply state variations if specified
5. Apply any custom style overrides
6. Apply AI hints for context

### State Management
- Handle hover/focus states automatically
- Apply disabled state when specified
- Maintain proper focus management
- Ensure keyboard accessibility
- Support screen readers

### Best Practices
- Use semantic HTML (`<button>` element)
- Include proper ARIA attributes
- Maintain consistent spacing
- Ensure sufficient contrast
- Support keyboard navigation