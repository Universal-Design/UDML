# Working with UDML in an Existing Codebase

UDML (Universal Design Markup Language) is a structured, semantic XML format used to describe user interfaces. When working in an existing project (e.g., a React + Tailwind codebase), your goal is not to regenerate everything, but to **translate the intent and structure of the UDML into the appropriate parts of your application.**

This guide shows how to write effective prompts for AI assistants like Cursor or Claude when integrating UDML-based UI specs into an active codebase.

***

## ✅ What the AI Needs to Know

1.  **What UDML is**

    > "This is an XML-based UI description. It defines screens, layouts, components, and styles in a way that is meant to guide interface generation."
2. **How to interpret key sections**
   * `<instructions>`: High-level intent
   * `<meta>`: Project/library context
   * `<components>`: Custom UI blocks
   * `<tokens>` and `<styles>`: Design system
3. **Where and how to apply it**
   * Targeted file or folder
   * Reuse of existing components
   * Refactoring existing UI

***

## 📋 Prompt Template for Existing Codebases

```
This is an XML-based UI spec called UDML (Universal Design Markup Language).

It defines interface structure, layout, and styling in a semantic format intended for AI-assisted development. Please interpret the UDML structure and apply it to the following context:

- This screen maps to: `src/pages/Home.tsx`
- Use existing components from `@components` where appropriate (e.g., Button, Card, Layout)
- Interpret `textStyle`, `fillStyle`, etc., using Tailwind classes or system tokens
- Follow guidance in the <instructions> and <meta> blocks
- Use component definitions from <components>
- Maintain accessibility (ARIA, semantic HTML)
- Keep the output clean and idiomatic to our stack (React + Tailwind)

Please begin by showing me the JSX/TSX implementation of the <screen name="Home"> screen.
Let me know if you need clarification before proceeding.

[PASTE UDML HERE]
```

***

## 🧩 Special Considerations

### 🎯 Target the Right File

Be explicit about where the output should go:

> “Update `src/screens/Settings.tsx` using the UDML `<screen name='Settings'>` definition.”

### 🧱 Reuse Existing Components

Let the AI know when to use your codebase's components:

> “Map `<button>` to our `Button` component from `@components/ui`.”

### 🎨 Resolve Styles

If UDML uses:

```xml
<text textStyle="title-lg">Welcome</text>
```

Prompt:

> “Translate `textStyle='title-lg'` to `className='text-2xl font-semibold'`, or use `HeadingText` from our design system.”

### 💬 Use Hints and Meta

> “Refer to `ai-hint` attributes and `<instructions>` for behavior and layout intent.”

***

## 💡 Example Prompt for Cursor

```
This UDML document describes a CRM dashboard UI in semantic XML format.

Please generate a React (TypeScript) implementation of the `<screen name="Home">` using our existing design system:

- Use our custom components where possible (Button, UserCard, etc.)
- Use Tailwind for styling, mapping tokens or styles to utility classes
- This code belongs in: `src/pages/Home.tsx`
- Follow the design principles described in the <instructions> section

Start with the Home screen and let me review before continuing.
```

***

## 🧠 Summary

To prompt an AI assistant effectively using UDML in a real project:

* Be explicit about what UDML is and how to interpret it
* Define where in your codebase it should be applied
* Guide the AI to reuse and refactor, not recreate
* Direct attention to `<instructions>`, `<meta>`, and `ai-hint` fields
* Specify your target stack (framework, style system, file structure)

The more you provide **context + intent**, the better UDML becomes a seamless input for your codebase.
