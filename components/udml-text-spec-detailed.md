
# `<text>` Component

The `<text>` component renders readable inline or block content. It supports styling through tokens and properties like size, weight, color, and alignment. It is a foundational building block in UDML, used in nearly all interfaces for displaying readable content.

---

## 🔤 Tag

```xml
<text>This is a paragraph of text.</text>
```

---

## 🧠 Purpose

Use `<text>` to communicate information, labels, messages, or rich content. It can be styled semantically through variants (like headings or body text), or manually via tokens (color, weight, size). While `<text>` can carry semantic intent, authors are encouraged to use meaningful variants or labels where applicable to support AI interpretation.

---

## 🛠 Attributes

| Attribute    | Type     | Required | Description |
|--------------|----------|----------|-------------|
| `variant`    | string   | No       | A semantic text type such as `title`, `subtitle`, `body`, `caption`, `meta` |
| `size`       | string   | No       | Token-based size (e.g., `xs`, `sm`, `md`, `lg`, `xl`) |
| `weight`     | string   | No       | Font weight (`normal`, `medium`, `bold`, `light`) |
| `color`      | string   | No       | Color token or value (e.g., `primary`, `muted`, `#333`) |
| `align`      | string   | No       | Horizontal text alignment (`left`, `center`, `right`) |
| `truncate`   | boolean  | No       | If true, the text is truncated with an ellipsis on overflow |
| `ai-hint`    | string   | No       | Plain language note to help AI understand the intent or usage context |

---

## ✅ Allowed Content

- Plain text content
- Inline `{{ dataBinding }}` expressions
- Must not include child components

---

## ⚠️ Invalid Nesting Example

```xml
<text>
  <button>Click Me</button>
</text>
```

Text is not a container component. This structure is invalid and may result in a generation error.

---

## 💡 Example: Simple Paragraph

```xml
<text size="md" color="muted">
  Welcome to the dashboard. Select an item to view details.
</text>
```

---

## 💡 Example: Headline Text

```xml
<text variant="title" weight="bold" align="center">
  Analytics Overview
</text>
```

---

## 💡 Example: Truncated Metadata Label

```xml
<text variant="meta" truncate="true" ai-hint="This shows the source system name, which can be long">
  Internal System Identifier With A Very Long Name
</text>
```

---

## 🧩 AI Interpretation Guidelines

When processing a UDML `<text>` element, AI agents should:
- Use the `variant` to infer semantic role (heading, caption, etc.)
- Use tokens or explicit values to apply typographic styling
- Recognize `truncate` as a functional request to limit visible lines
- Read the `ai-hint` for ambiguous or dynamic cases

---

## 🗂 Related Components

- [`<label>`](./label.md)
- [`<heading>`](./heading.md)
- [`<badge>`](./badge.md)

---
