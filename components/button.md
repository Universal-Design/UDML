# Button Component

The Button component is a fundamental interactive element used to trigger actions in the user interface.

## Overview

Buttons in UDML can be defined with various properties, states, and variants to capture their complete functionality and appearance across different contexts and interaction states.

## Interactive Example

<ComponentPreview name="Button" />

## Properties

| Property    | Type      | Default    | Description                               |
|-------------|-----------|------------|-------------------------------------------|
| label       | string    | *Required* | Text displayed on the button              |
| variant     | string    | "primary"  | Visual style (primary, secondary, etc.)   |
| size        | string    | "medium"   | Button size (small, medium, large)        |
| disabled    | boolean   | false      | Whether the button is disabled            |
| fullWidth   | boolean   | false      | Whether button spans full container width |
| iconStart   | string    | -          | Icon to display before label              |
| iconEnd     | string    | -          | Icon to display after label               |
| onClick     | action    | -          | Action to trigger when button is clicked  |

## States

Buttons have multiple states to represent different interaction points:

- **Default**: The standard appearance
- **Hover**: When the user hovers over the button
- **Active**: When the button is being pressed
- **Focus**: When the button has keyboard focus
- **Disabled**: When the button is disabled

## Variants

- **Primary**: High emphasis, for main actions
- **Secondary**: Medium emphasis, for secondary actions
- **Tertiary**: Low emphasis, for tertiary actions
- **Danger**: For destructive actions

## Accessibility

Buttons follow WCAG accessibility guidelines with proper keyboard interactions and ARIA attributes.

## UDML Definition

```xml
<Component 
  name="Button" 
  description="Interactive element that triggers an action when clicked">
  
  <Properties>
    <Property name="label" type="string" description="Text displayed on the button" required="true"/>
    <Property name="variant" type="string" default="primary" allowedValues="primary,secondary,tertiary,danger" description="Visual style variant"/>
    <Property name="size" type="string" default="medium" allowedValues="small,medium,large" description="Button size"/>
    <Property name="disabled" type="boolean" default="false" description="Whether the button is disabled"/>
    <Property name="fullWidth" type="boolean" default="false" description="Whether the button spans full width of container"/>
    <Property name="iconStart" type="string" description="Icon to display before label"/>
    <Property name="iconEnd" type="string" description="Icon to display after label"/>
    <Property name="onClick" type="action" description="Action to trigger when button is clicked"/>
  </Properties>
  
  <States>
    <State name="default">
      <Background color="{theme.colors[variant].default}"/>
      <Text color="{variant === 'tertiary' ? theme.colors[variant].contrast : theme.colors.white}"/>
      <Border radius="6px" width="{variant === 'tertiary' ? '1px' : '0'}" color="{theme.colors[variant].default}"/>
    </State>
    
    <State name="hover">
      <Background color="{theme.colors[variant].hover}"/>
      <Cursor>pointer</Cursor>
    </State>
    
    <State name="active">
      <Background color="{theme.colors[variant].active}"/>
      <Transform>scale(0.98)</Transform>
    </State>
    
    <State name="focus">
      <Outline color="{theme.colors[variant].focus}" width="2px" offset="2px"/>
    </State>
    
    <State name="disabled">
      <Background color="{theme.colors.disabled.background}"/>
      <Text color="{theme.colors.disabled.text}"/>
      <Cursor>not-allowed</Cursor>
      <Opacity>0.6</Opacity>
    </State>
  </States>
  
  <Variants>
    <Variant name="primary">
      <Description>High emphasis, primary action</Description>
    </Variant>
    
    <Variant name="secondary">
      <Description>Medium emphasis, secondary action</Description>
    </Variant>
    
    <Variant name="tertiary">
      <Description>Low emphasis, tertiary action</Description>
    </Variant>
    
    <Variant name="danger">
      <Description>Destructive action</Description>
    </Variant>
  </Variants>
  
  <Accessibility>
    <Role>button</Role>
    <AriaAttributes>
      <Attribute name="aria-disabled" value="{disabled}"/>
      <Attribute name="aria-label" value="{accessibilityLabel || label}"/>
    </AriaAttributes>
    <KeyboardInteractions>
      <Interaction key="Enter" action="click"/>
      <Interaction key="Space" action="click"/>
    </KeyboardInteractions>
  </Accessibility>
  
  <Content>
    <Container 
      display="inline-flex" 
      alignItems="center" 
      justifyContent="center" 
      padding="{size === 'small' ? '8px 16px' : size === 'medium' ? '12px 20px' : '16px 24px'}"
      gap="8px">
      
      <If condition="{iconStart}">
        <Icon name="{iconStart}" size="{size === 'small' ? 14 : size === 'medium' ? 18 : 22}"/>
      </If>
      
      <Text 
        fontFamily="{theme.typography.button.fontFamily}"
        fontSize="{theme.typography.button.fontSize}"
        fontWeight="{theme.typography.button.fontWeight}"
        lineHeight="1">
        {label}
      </Text>
      
      <If condition="{iconEnd}">
        <Icon name="{iconEnd}" size="{size === 'small' ? 14 : size === 'medium' ? 18 : 22}"/>
      </If>
    </Container>
  </Content>
  
  <ResponsiveBehavior>
    <Breakpoint name="mobile">
      <Override property="padding" value="{size === 'small' ? '10px 16px' : size === 'medium' ? '14px 20px' : '18px 24px'}"/>
      <Override property="fontSize" value="{theme.typography.button.fontSize + 2}"/>
    </Breakpoint>
  </ResponsiveBehavior>
</Component>
```

## Usage Examples

### Primary Button

```xml
<Button 
  label="Get Started" 
  variant="primary" 
  size="medium"
  onClick="navigateTo('/signup')"/>
```

### Danger Button with Icon

```xml
<Button 
  label="Delete Account" 
  variant="danger" 
  size="medium"
  iconStart="trash"
  onClick="showConfirmationDialog('delete-account')"/>
```

### Disabled Button

```xml
<Button 
  label="Submit"
  variant="primary"
  disabled="true"/>
```

## Framework Implementation Examples

<Tabs>
  <Tab title="React">
    ```jsx
    const Button = ({ 
      label, 
      variant = 'primary', 
      size = 'medium',
      disabled = false,
      fullWidth = false,
      iconStart,
      iconEnd,
      onClick,
      ...props 
    }) => {
      // Implementation details
    };
    ```
  </Tab>
  <Tab title="Vue">
    ```vue
    <template>
      <button 
        :class="[`btn-${variant}`, `btn-${size}`, { 'btn-full-width': fullWidth }]"
        :disabled="disabled"
        @click="onClick">
        <!-- Implementation details -->
      </button>
    </template>
    ```
  </Tab>
  <Tab title="Angular">
    ```typescript
    @Component({
      selector: 'app-button',
      template: `
        <button 
          [ngClass]="['btn-' + variant, 'btn-' + size, { 'btn-full-width': fullWidth }]"
          [disabled]="disabled"
          (click)="onClick()">
          <!-- Implementation details -->
        </button>
      `
    })
    export class ButtonComponent {
      // Implementation details
    }
    ```
  </Tab>
</Tabs>

## Best Practices

- Use the primary variant for the main call-to-action
- Limit the number of primary buttons on a single screen
- Use clear, action-oriented labels
- Include icons when they enhance understanding
- Ensure buttons have sufficient contrast against their background
- Maintain consistent button styles throughout your application

## Related Components

- [IconButton](/components/icon-button)
- [ButtonGroup](/components/button-group)
- [ToggleButton](/components/toggle-button)
- [Link](/components/link)

## Design Guidelines

- [Using Buttons Effectively](/guidelines/buttons)
- [Call-to-Action Hierarchy](/guidelines/cta-hierarchy)
- [Button Accessibility](/guidelines/button-accessibility)
