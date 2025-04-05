---
description: ': A Universal Design Language for the AI Era'
---

# What is UDML?

\##A Universal Design Language for the AI Era

## UDML (Universal Design Markup Language) – Specification v0.1

> A semantic, XML-based design language for describing user interfaces in a way that AI developer agents can transform into fully functional applications across any platform or framework.

***

### 1. Purpose

UDML provides a framework-agnostic, machine-readable way to describe the structure, style, and behavior of user interfaces. Unlike traditional design files (e.g., Figma or Sketch), UDML is inherently semantic and designed for consumption by AI agents such as Copilot, Cursor, or custom AI tooling.

***

### 2. Core Concepts

#### 2.1 Semantic UI Definition

Every element in UDML represents a meaningful UI concept (e.g., button, card, screen), not just a rectangle or group. This enables better reasoning and portability across platforms.

#### 2.2 AI-Oriented Metadata

UDML allows authors to express **intent**, not just structure—helping AI developer tools infer user goals and context during code generation.

#### 2.3 Modularity

Supports reusable components, external design libraries, and multi-screen apps.

#### 2.4 Extensibility

New components, tokens, or behaviors can be added without breaking the core language.

***

### 3. File Structure

```xml
<udml version="1.0">
  <instructions>...</instructions>    <!-- Optional: natural language guidance for AI agents -->
  <meta>...</meta>                    <!-- Optional: structured metadata -->

  <tokens>...</tokens>                <!-- Global design tokens (colors, spacing, typography) -->
  <styles>...</styles>                <!-- Reusable named style definitions -->
  <components>...</components>        <!-- Custom components, made from base elements -->
  <screens>...</screens>              <!-- Individual UI screens or views -->
  <imports>...</imports>              <!-- External UDML documents (design libraries) -->
</udml>
```

***

### 4. Sections Overview

#### 4.1 `<instructions>`

Optional block of plain language design intent, helpful for AI tools.

```xml
<instructions>
  This is a mobile-first ecommerce UI for small shops.
  Prioritize large touch targets, fast browsing, and clear visual hierarchy.
</instructions>
```

#### 4.2 `<meta>`

Structured metadata to support tooling, versioning, or design context.

```xml
<meta>
  <author name="Jane Doe"/>
  <project name="QuickShop"/>
  <preferredLibrary>React</preferredLibrary>
</meta>
```

#### 4.3 `<tokens>`

Design tokens for color, spacing, font, and border radius:

```xml
<color name="primary" value="#3366FF"/>
<spacing name="md" value="16px"/>
<font name="heading" value="Inter" size="24px"/>
```

#### 4.4 `<styles>`

Named collections of properties that can be applied to any component:

```xml
<style name="card-default">
  <property name="elevation" value="1"/>
  <property name="padding" value="16"/>
</style>
```

#### 4.5 `<components>`

Custom reusable components composed of UDML primitives:

```xml
<component name="UserCard">
  <card style="card-default">
    <slot name="avatar"/>
    <slot name="name"/>
    <slot name="action"/>
  </card>
</component>
```

#### 4.6 `<screens>`

Each screen defines a complete UI view:

```xml
<screen name="Home">
  <layout type="stack">
    <text>Welcome to QuickShop</text>
    <component is="UserCard">
      <avatar slot="avatar" src="user.png"/>
      <text slot="name">Jane Doe</text>
      <button slot="action">View Profile</button>
    </component>
  </layout>
</screen>
```

#### 4.7 `<imports>`

Reference external design systems or shared components:

```xml
<import src="https://cdn.example.com/ui/tokens.udml"/>
```

***

### 5. Roadmap for UDML v1.0

* Define a formal schema (XSD or JSON Schema)
* Build a validator and converter CLI
* Create an official documentation site (Docusaurus or GitBook)
* Develop tooling (e.g. Figma exporter, browser-based live renderer)
* Establish contribution process and working group

***

### 6. License

MIT or similar—pending open-source plan
