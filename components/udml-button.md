
# `<button>` Component

The `<button>` component is a semantic representation of an interactive control that performs an action when activated by the user. It supports a range of visual variants, sizes, and interaction hooks, and is a core primitive in UDML.

---

## 🔤 Tag

```xml
<button>Click Me</button>
```

---

## 🧠 Purpose

Buttons are used to trigger actions, submit forms, open modals, or navigate users to other parts of the application. UDML buttons are explicitly semantic and should not be used purely for layout or decoration.

---

## 🛠 Attributes

| Attribute    | Type     | Required | Description |
|--------------|----------|----------|-------------|
| `action`     | string   | No       | Identifier or name of the action triggered by the button. Often interpreted by AI agents as the name of a function. |
| `variant`    | string   | No       | Style variation of the button (e.g. `primary`, `secondary`, `outline`, `ghost`, etc.) |
| `size`       | string   | No       | Size of the button (`sm`, `md`, `lg`) |
| `icon`       | string   | No       | Optional icon name to render alongside the text |
| `disabled`   | boolean  | No       | If true, the button is not interactive |
| `loading`    | boolean  | No       | If true, shows a loading state |
| `type`       | string   | No       | `button`, `submit`, or `reset`—mostly relevant in forms |
| `ai-hint`    | string   | No       | Plain language guidance for AI about what the button does |
| `onClick`    | string   | No       | Optional event name or callback hint for interaction logic |

---

## ✅ Allowed Content

A `<button>` can contain:
- Plain text (label)
- Optionally, a single `<icon>` before or after text

Children are **not required**, and **complex nested structures are discouraged**. If needed, provide an `ai-hint` to clarify intent.

---

## ⚠️ Invalid Nesting Example

```xml
<button>
  <carousel/>
</button>
```

This will trigger a linting warning. Consider wrapping the `carousel` in a `<modal>` or restructuring your intent.

---

## 💡 Example: Simple Action Button

```xml
<button action="saveForm" variant="primary">Save</button>
```

---

## 💡 Example: Button with Icon and Hint

```xml
<button icon="download" ai-hint="Downloads the current report as PDF">
  Download
</button>
```

---

## 💡 Example: Loading State

```xml
<button action="submitForm" loading="true">Submitting...</button>
```

---

## 🧩 AI Interpretation Guidelines

When processing a UDML `<button>`, AI agents should:
- Treat `action` as a high-level intent and generate an appropriate handler
- Use `variant` and `size` to choose styling classes or components
- Use `ai-hint` as fallback context if the structure is ambiguous
- Avoid assuming navigation unless paired with an `action`, `onClick`, or contextual `<link>`

---

## 🗂 Related Components

- [`<form>`](./form.md)
- [`<icon>`](./icon.md)
- [`<modal>`](./modal.md)

---
