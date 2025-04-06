# `<mappings>` Section

The `<mappings>` section defines how UDML elements map to your existing codebase. It serves as a bridge between UDML's semantic markup and your actual implementation components, styles, and patterns.

## Purpose

The mappings section enables:
- Automatic translation of UDML to your existing components
- Type-safe prop handling
- Design system integration
- Pattern reuse
- Real-time updates as your codebase evolves

## Structure

```xml
<mappings>
  <!-- Component Mappings -->
  <components>
    <component 
      name="button"
      path="src/components/Button/Button.tsx"
      props="{
        variant: 'primary' | 'secondary' | 'tertiary',
        size: 'sm' | 'md' | 'lg',
        disabled: boolean,
        onClick: () => void
      }"
    >
      <story name="Primary"/>
      <story name="Secondary"/>
    </component>
  </components>

  <!-- Design Tokens -->
  <tokens>
    <color name="primary" value="theme.colors.primary" />
    <spacing name="sm" value="theme.spacing.sm" />
    <typography name="heading1" value="theme.typography.heading1" />
  </tokens>

  <!-- Patterns -->
  <patterns>
    <form name="userProfile" validation="src/utils/validation/userProfile.ts" />
    <layout name="dashboard" template="src/templates/Dashboard.tsx" />
  </patterns>
</mappings>
```

## Mapping Types

### 1. Component Mappings
- Maps UDML elements to React components
- Defines prop types and interfaces
- Includes Storybook stories for examples
- Supports component variants

### 2. Design Token Mappings
- Maps UDML style attributes to design tokens
- Supports colors, spacing, typography
- Integrates with your theme system
- Enables consistent styling

### 3. Pattern Mappings
- Defines reusable UI patterns
- Includes validation rules
- Specifies layout templates
- Supports complex component compositions

## Generation Tools

### 1. Storybook Integration
- Automatically generates mappings from Storybook components
- Extracts prop types and stories
- Updates mappings when components change
- Integrates with Storybook's documentation

### 2. VS Code Extension
- Real-time mapping generation
- Watches for component changes
- Provides IntelliSense for UDML
- Supports custom mapping rules

### 3. CLI Tools
- Batch generation of mappings
- Migration of existing components
- Validation of mappings
- Export to different formats

## Usage in UDML

```xml
<screen name="UserProfile">
  <!-- Uses mapped Button component -->
  <button variant="primary" size="md">
    Save Changes
  </button>

  <!-- Uses mapped design tokens -->
  <text typography="heading1" color="primary">
    Edit Profile
  </text>

  <!-- Uses mapped form pattern -->
  <form name="userProfile">
    <input name="email" type="email"/>
  </form>
</screen>
```

## Benefits

1. **Type Safety**
   - Prop types are enforced
   - Design tokens are validated
   - Patterns are type-checked

2. **Maintainability**
   - Single source of truth
   - Automatic updates
   - Clear documentation

3. **Developer Experience**
   - IntelliSense support
   - Real-time feedback
   - Easy migration

4. **Design System Integration**
   - Consistent styling
   - Pattern reuse
   - Theme support

## Future Enhancements

1. **Advanced Pattern Support**
   - Nested patterns
   - Conditional rendering
   - Dynamic content

2. **State Management**
   - Form state
   - UI state
   - Data fetching

3. **Testing Integration**
   - Component testing
   - Pattern testing
   - Accessibility testing

4. **Performance Optimization**
   - Code splitting
   - Lazy loading
   - Bundle analysis 