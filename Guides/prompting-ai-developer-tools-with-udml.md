# 🧠 Prompting AI Developer Tools with UDML

Once you have a well-structured UDML file describing your user interface, the next step is to **prompt an AI assistant** (like Claude, Cursor, or Copilot) to generate **production-grade code** from it.

This guide outlines how to write effective prompts that help AI understand your UDML document and produce accurate, maintainable output.

---

## ✅ What the AI Needs to Know

Before the AI can generate code, it needs to understand:

1. **What the document is**  
   - Let it know this is a UDML file containing UI structure, intent, and components.

2. **How to interpret special sections**  
   - Specifically: `<instructions>`, `<meta>`, and any `ai-hint` attributes.

3. **What the desired output is**  
   - HTML, React, Vue, Flutter? A single file or a component per screen?

4. **Any constraints**  
   - Use Tailwind? Avoid inline styles? Follow accessibility guidelines?

---

## 📋 Basic Prompt Template

```text
This is a UDML document describing the UI for an application.
Please read the <instructions> section carefully before beginning.

- Use the <tokens> and <styles> to resolve any visual styling
- Expand each <screen> into a corresponding component (one file per screen)
- Use the <components> definitions where referenced
- Follow hints in the `ai-hint` attributes or <meta> fields
- Output React (TypeScript) code using TailwindCSS
- Keep accessibility in mind (ARIA labels, semantic HTML)

Here is the UDML:
[PASTE HERE]
```

---

## 🔎 Prompting Considerations

### 🧠 Tell the AI to read `<instructions>`
This is often the most important section. It may describe layout philosophy, audience needs, platform constraints, or branding.

> "Please read and follow the `<instructions>` block at the top. It contains essential guidance for how the UI should be structured."

---

### 📌 Guide the AI to use design tokens and styles
If you’ve defined tokens and named styles, include:

> "Resolve all `textStyle`, `fillStyle`, and `effectStyle` attributes using the definitions in `<styles>` and `<tokens>`."

This helps the AI apply consistent visual formatting across the output.

---

### 📦 Ask for modular output
A UDML document might represent an entire app. Be explicit if you want separate files for screens, components, styles, etc.

> "Generate one React component per `<screen>`, and save each as a named file based on the `name` attribute."

---

### 💬 Remind the AI about `ai-hint` and `meta`
These can clarify ambiguous cases or guide architectural decisions.

> "Follow `ai-hint` attributes where present for component-level interpretation."
> "Use `<meta><preferredLibrary>React</preferredLibrary></meta>` to choose the implementation stack."

---

## 💡 Example Prompt for Cursor

```text
This is a complete UDML file for a mobile-first sales dashboard.

- Build each screen as a separate React (TypeScript) component
- Use Tailwind for styling
- Use the tokens and styles provided
- Preserve the structure of custom components from <components>
- Follow instructions and use `ai-hint` where provided
- Include accessible markup

Start by generating the Home screen. Let me know if you need clarification before continuing.
```

---

## 🚫 Common Pitfalls to Avoid

| Pitfall | Fix |
|--------|------|
| AI ignores `<instructions>` | Explicitly tell it to read them first |
| Styling is inconsistent | Remind AI to resolve style and token references |
| Nested components break | Remind AI to look up `<component is="...">` definitions |
| Output is overly verbose | Ask AI to use idiomatic code for the target language/framework |

---

## 🧩 Summary

Prompting AI from UDML works best when you're:

- Clear about the purpose of the file
- Direct about which sections matter (especially `<instructions>`, `ai-hint`, and `<meta>`)
- Specific about what you want generated
- Helpful in guiding the tool to stay modular, semantic, and accessible

Let UDML handle the **structure and meaning**—your prompt provides the **intent and constraints** for translation.