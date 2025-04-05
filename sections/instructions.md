# `<instructions>` Section

The `<instructions>` section provides natural language context for AI developer agents. It is not rendered visually, but guides how AI interprets, structures, and generates code from the UDML document.

---

## 🧠 Purpose

Use `<instructions>` to describe the intent of the product, the priorities of the design, the audience, tone, or any constraints. It's like writing a creative brief for an AI instead of a human team.

---

## 🛠 Syntax

```xml
<instructions>
  This is a mobile-first CRM dashboard for field agents.
  Prioritize quick access, offline functionality, and data clarity.
</instructions>
```

- Only **plain text** is allowed.
- Multiple lines are supported.
- No attributes or children.

---

## 🧩 AI Interpretation Guidelines

- AI tools should read this section **before interpreting the UI structure**.
- Can influence **layout decisions**, **component choice**, **tone**, and **visual styling**.
- May include business goals or UX principles.

---

## ❌ Invalid Example

```xml
<instructions><button>Click me</button></instructions>
```

---

## ✅ Example

```xml
<instructions>
  This is a simplified inventory management app for warehouse staff using tablets.
  Interfaces should be large-touch-friendly, with low-distraction visuals and minimal steps to complete a task.
</instructions>
```
