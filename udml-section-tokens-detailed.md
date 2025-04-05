# `<tokens>` Section

The `<tokens>` section defines global design variables that can be reused across all components and screens. This includes things like colors, spacing, typography, border radii, and elevations.

---

## 🧠 Purpose

Tokens create consistency and portability across the design system. They act as design variables that AI agents can resolve into concrete values in the final output.

---

## 🛠 Syntax

```xml
<tokens>
  <color name="primary" value="#3366FF"/>
  <spacing name="md" value="16px"/>
  <font name="heading" value="Inter" weight="600" size="24px"/>
</tokens>
```

- Each token type has a required `name` and one or more value attributes.
- Names are used to reference tokens in components (e.g., `color="primary"`).

---

## 🔑 Supported Token Types

| Tag        | Attributes                         | Example Use           |
|------------|------------------------------------|------------------------|
| `<color>`  | `name`, `value`                    | Button background      |
| `<spacing>`| `name`, `value`                    | Gap in layouts         |
| `<font>`   | `name`, `value`, `weight`, `size`  | Typography             |
| `<radius>` | `name`, `value`                    | Border radius          |
| `<elevation>`| `name`, `value`                  | Shadow depth           |

---

## 🧩 AI Interpretation Guidelines

- AI agents should **resolve token references** (e.g., `color="primary"`) into concrete values during code generation.
- Tokens map directly to style systems in CSS, Tailwind, or component libraries.

---

## ✅ Example

```xml
<tokens>
  <color name="accent" value="#00B894"/>
  <spacing name="xl" value="32px"/>
  <radius name="rounded" value="12px"/>
</tokens>
```