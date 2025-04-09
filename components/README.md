# Components

## Core Component Attributes

Every UDML component supports these standard attributes for consistent behavior and styling. Components define their base structure and variations through complete structural definitions, allowing the AI to identify and apply differences automatically.

## 🛠 Standard Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | string | No | Visual style variant of the component |
| `size` | string | No | Size variant of the component |
| `state` | string | No | Current state of the component |
| `style` | string | No | Additional style overrides |
| `ai-hint` | string | No | Context for AI interpretation |

## Component Definition Structure

Components are defined using a `<component>` element containing:
- A `<base>` element defining the default structure
- `<variant>` elements for style variations
- `<size>` elements for size variations
- `<state>` elements for state variations

```xml
<component name="button">
  <!-- Base Structure -->
  <base>
    <row padding="5 10 5 10" color="blue">
      <icon name="leadIcon" />
      <text name="buttonLabel" textStyle="buttonMedium">Button Label</text>
      <icon name="endIcon" />
    </row>
  </base>

  <!-- Size Variants -->
  <size name="small">
    <row padding="3 8 3 8" color="blue">
      <icon name="leadIcon" size="16" />
      <text name="buttonLabel" textStyle="buttonSmall">Button Label</text>
      <icon name="endIcon" size="16" />
    </row>
  </size>

  <size name="large">
    <row padding="10 20 10 20" color="blue">
      <icon name="leadIcon" size="24" />
      <text name="buttonLabel" textStyle="buttonLarge">Button Label</text>
      <icon name="endIcon" size="24" />
    </row>
  </size>

  <!-- Style Variants -->
  <variant name="primary">
    <row padding="5 10 5 10" color="blue">
      <icon name="leadIcon" color="white" />
      <text name="buttonLabel" textStyle="buttonMedium" color="white">Button Label</text>
      <icon name="endIcon" color="white" />
    </row>
  </variant>

  <variant name="secondary">
    <row padding="5 10 5 10" color="gray">
      <icon name="leadIcon" color="black" />
      <text name="buttonLabel" textStyle="buttonMedium" color="black">Button Label</text>
      <icon name="endIcon" color="black" />
    </row>
  </variant>

  <!-- State Variants -->
  <state name="hover">
    <row padding="5 10 5 10" color="darkBlue">
      <icon name="leadIcon" color="white" />
      <text name="buttonLabel" textStyle="buttonMedium" color="white">Button Label</text>
      <icon name="endIcon" color="white" />
    </row>
  </state>

  <state name="disabled">
    <row padding="5 10 5 10" color="blue" opacity="0.5">
      <icon name="leadIcon" color="white" opacity="0.5" />
      <text name="buttonLabel" textStyle="buttonMedium" color="white" opacity="0.5">Button Label</text>
      <icon name="endIcon" color="white" opacity="0.5" />
    </row>
  </state>
</component>
```

## Usage Examples

```xml
<!-- Basic Usage -->
<button>Click me</button>

<!-- With Variants -->
<button variant="primary" size="large">Large Primary Button</button>

<!-- With State -->
<button state="disabled">Disabled Button</button>

<!-- Combined Attributes -->
<button 
  variant="secondary" 
  size="small" 
  state="hover"
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

### Variation Application
- Compare complete structures to identify differences
- Apply differences in a cascading manner
- Handle conflicts based on priority (state > variant > size > base)
- Maintain structural integrity
- Preserve accessibility attributes

### Attribute Priority
1. State attributes (highest priority)
2. Variant attributes
3. Size attributes
4. Base attributes (lowest priority)
5. Custom style overrides (applied last)

### Best Practices
- Define complete structures for each variation
- Maintain consistent element naming
- Include all necessary attributes in each variation
- Consider accessibility in all variations
- Document expected behavior in ai-hint

## Common Variations

### Size Variations
- `small`: Compact version
- `medium`: Default size
- `large`: Expanded version

### State Variations
- `default`: Normal state
- `hover`: Mouse over state
- `focus`: Keyboard focus state
- `active`: Being interacted with
- `disabled`: Non-interactive state
- `loading`: Processing state

### Style Variations
- `primary`: Main action style
- `secondary`: Alternative style
- `tertiary`: Subtle style
- `danger`: Error/warning style
- `success`: Positive action style