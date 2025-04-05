# Components

Components are the building blocks of user interfaces in UDML. They represent reusable UI elements with defined properties, states, and behaviors.

## Overview

Components in UDML allow designers to define UI elements in a way that captures their complete functionality, appearance, and behavior. This structured approach helps AI assistants understand the design intent and generate appropriate implementation code for any framework.

## Component Structure

A UDML Component consists of several key sections:

- **Properties**: Configurable aspects of the component
- **States**: Different visual and behavioral states (default, hover, focus, etc.)
- **Variants**: Predefined variations of the component
- **Accessibility**: Accessibility requirements and behaviors
- **Content**: The component's visual structure and hierarchy

## Basic Syntax

```xml
<Component name="ComponentName" description="Description of the component">
  <!-- Component definition goes here -->
</Component>
```

## Complete Specification

Below is the complete specification for the Component concept in UDML:

```xml
<Specification version="1.0">
  <Concept name="Component">
    <Description>
      Components are the building blocks of user interfaces in UDML. They represent reusable UI elements
      with defined properties, states, and behaviors. Components can be composed of other components
      to create complex interfaces.
    </Description>
    
    <Structure>
      <Element name="Component" required="true">
        <Attribute name="name" type="string" required="true" description="Unique identifier for the component"/>
        <Attribute name="description" type="string" description="Human-readable description of the component's purpose"/>
        <Attribute name="accessibility" type="string" description="ARIA role or accessibility information"/>
        
        <ChildElements>
          <Element name="Properties" minOccurs="0" maxOccurs="1" description="Defines configurable aspects of the component">
            <ChildElements>
              <Element name="Property" minOccurs="0" maxOccurs="unbounded">
                <Attribute name="name" type="string" required="true"/>
                <Attribute name="type" type="string" required="true" allowedValues="string,number,boolean,color,object,array"/>
                <Attribute name="default" type="any" description="Default value for the property"/>
                <Attribute name="description" type="string"/>
                <Attribute name="required" type="boolean" default="false"/>
              </Element>
            </ChildElements>
          </Element>
          
          <Element name="States" minOccurs="0" maxOccurs="1" description="Defines possible component states">
            <ChildElements>
              <Element name="State" minOccurs="0" maxOccurs="unbounded">
                <Attribute name="name" type="string" required="true" allowedValues="default,hover,active,focus,disabled"/>
                <ChildElements>
                  <!-- Style overrides for this state -->
                  <AnyElement/>
                </ChildElements>
              </Element>
            </ChildElements>
          </Element>
          
          <Element name="Variants" minOccurs="0" maxOccurs="1" description="Defines component variations">
            <ChildElements>
              <Element name="Variant" minOccurs="0" maxOccurs="unbounded">
                <Attribute name="name" type="string" required="true"/>
                <ChildElements>
                  <!-- Property and style overrides for this variant -->
                  <AnyElement/>
                </ChildElements>
              </Element>
            </ChildElements>
          </Element>
          
          <Element name="Accessibility" minOccurs="0" maxOccurs="1" description="Accessibility specifications">
            <ChildElements>
              <Element name="Role" type="string" minOccurs="0" maxOccurs="1"/>
              <Element name="AriaAttributes" minOccurs="0" maxOccurs="1"/>
              <Element name="KeyboardInteractions" minOccurs="0" maxOccurs="1"/>
            </ChildElements>
          </Element>
          
          <Element name="Content" minOccurs="0" maxOccurs="1" description="Defines the component's structure">
            <!-- Any UI elements that make up the component -->
            <AnyElement/>
          </Element>
        </ChildElements>
      </Element>
    </Structure>
  </Concept>
</Specification>
```

## Example Usage

Here's a simple example of a component definition:

```xml
<Component name="Avatar" description="User profile image">
  <Properties>
    <Property name="src" type="string" required="true" description="Image source URL"/>
    <Property name="alt" type="string" required="true" description="Alternative text"/>
    <Property name="size" type="number" default="40" description="Size in pixels"/>
    <Property name="shape" type="string" default="circle" allowedValues="circle,square"/>
  </Properties>
  
  <States>
    <State name="hover">
      <Transform>scale(1.05)</Transform>
      <Transition>all 0.2s ease</Transition>
    </State>
  </States>
</Component>
```

## Best Practices

- Give components descriptive, semantic names
- Document all properties thoroughly
- Include accessibility information
- Define states for interactive components
- Provide examples for common use cases
- Use variants for different visual styles rather than creating multiple components

## Related Concepts

- [Properties](/concepts/properties)
- [States](/concepts/states)
- [Variants](/concepts/variants)
- [Accessibility](/concepts/accessibility)
- [Layout](/concepts/layout)

## Next Steps

Now that you understand Components, learn how to create [Composite Components](/concepts/composite-components) by combining multiple components together.
