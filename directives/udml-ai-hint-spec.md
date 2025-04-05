# `ai-hint` Attribute Specification

The `ai-hint` attribute is a lightweight, optional tool for providing natural-language context to AI developer tools. It can clarify the purpose of any component, layout, slot, or binding.

---

## 🧠 Purpose

To help AI developer agents infer semantic roles, expected behavior, or business logic when structure alone isn't clear.

---

## 🛠 Usage

### On components

```xml
<button ai-hint="This button submits the login form.">
  Sign In
</button>
```

### On generic or ambiguous elements

```xml
<group ai-hint="Likely a card summarizing a user's profile with avatar and text."/>
```

### On slots

```xml
<slot name="meta" ai-hint="Subheading or timestamp shown below the title"/>
```

---

## 🔁 Applicability

`ai-hint` can be used on:
- Layout primitives (`<layout>`, `<group>`, `<box>`)
- Interactive elements (`<button>`, `<input>`, `<link>`)
- Data-driven content (`<binding>`, `<slot>`)
- Custom components and containers

---

## 🧠 AI Interpretation Guidelines

- Read `ai-hint` as freeform intent description
- Use it to resolve ambiguities, especially in generic tags
- Optionally surface `ai-hint` as part of docs, tooltips, or dev comments

---

## ✅ Summary

- Always optional, never rendered
- Enhances AI inference and code scaffolding
- Valuable for ambiguous or flexible elements

---