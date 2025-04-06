import { ComponentMeta, ComponentStory } from '@storybook/react';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { glob } from 'glob';

interface ComponentMapping {
  name: string;
  path: string;
  props: Record<string, any>;
  stories: string[];
}

function generateMappingsFromStorybook() {
  const mappings: ComponentMapping[] = [];
  
  // Get all story files
  const storyFiles = glob.sync('src/**/*.stories.tsx');
  
  storyFiles.forEach(storyFile => {
    const componentPath = storyFile.replace('.stories.tsx', '.tsx');
    const stories = require(storyFile);
    
    // Extract component metadata
    const meta = stories.default as ComponentMeta<any>;
    const componentName = meta.title.split('/').pop();
    
    // Extract props from TypeScript types
    const props = extractPropsFromTypes(componentPath);
    
    // Extract stories for examples
    const storyNames = Object.keys(stories)
      .filter(key => key !== 'default');
    
    mappings.push({
      name: componentName.toLowerCase(),
      path: componentPath,
      props,
      stories: storyNames
    });
  });
  
  // Generate UDML mappings
  const udmlMappings = generateUDMLMappings(mappings);
  
  // Write to file
  writeFileSync(
    'udml-mappings.xml',
    udmlMappings,
    'utf-8'
  );
}

function extractPropsFromTypes(filePath: string): Record<string, any> {
  // Implementation would use TypeScript compiler API
  // to extract prop types from the component
  return {};
}

function generateUDMLMappings(mappings: ComponentMapping[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<mappings>
  ${mappings.map(mapping => `
  <component 
    name="${mapping.name}"
    path="${mapping.path}"
    props="${JSON.stringify(mapping.props)}"
  >
    ${mapping.stories.map(story => `
    <story name="${story}"/>
    `).join('')}
  </component>
  `).join('')}
</mappings>`;
}

export { generateMappingsFromStorybook }; 