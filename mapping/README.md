---
hidden: true
---

# UDML Mapping Tools

This directory contains tools for automatically generating UDML mappings from your existing React components.

## Tools

### 1. Storybook Mapping Generator

Generates UDML mappings from your Storybook components and stories.

```bash
# Install dependencies
npm install @storybook/react glob

# Run the generator
node storybook-mapping-generator.js
```

### 2. VS Code Extension

A VS Code extension that automatically generates and updates UDML mappings as you work.

```bash
# Install the extension
code --install-extension udml-mapping-generator-0.0.1.vsix

# Or develop locally
npm install
npm run compile
```

## Generated Mappings

The tools generate mappings in the following format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mappings>
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
</mappings>
```

## Usage in UDML

Once mappings are generated, you can use them in your UDML specs:

```xml
<screen name="UserProfile">
  <button variant="primary" size="md">
    Save Changes
  </button>
</screen>
```

## Configuration

### VS Code Settings

```json
{
  "udml.mappings.include": [
    "src/components/**/*"
  ],
  "udml.mappings.exclude": [
    "**/node_modules/**"
  ]
}
```

### Storybook Configuration

Add to `.storybook/main.js`:

```javascript
module.exports = {
  addons: [
    {
      name: '@storybook/addon-udml',
      options: {
        generateMappings: true,
        outputPath: './udml-mappings.xml'
      }
    }
  ]
};
```

## Development

1. Install dependencies:

```bash
npm install
```

2. Build the VS Code extension:

```bash
npm run compile
```

3. Run tests:

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
