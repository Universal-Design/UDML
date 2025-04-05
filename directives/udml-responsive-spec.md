# `<responsive>` Directive Specification

The `<responsive>` directive allows UDML authors to define **layout and component behavior that changes based on viewport size**. It supports adaptive UI structures for mobile, tablet, and desktop scenarios and works by conditionally rendering alternative layouts or components at defined breakpoints.

---

## 🧠 Purpose

To make semantic designs responsive across screen sizes, while keeping them intuitive to define, render, and generate from AI tooling.

---

## 🛠 Syntax

### Recommended Approach (Explicit Structure)

```xml
<responsive>
  <breakpoint ref="desktop">
    <layout type="grid" columns="3">
      <image src="1.jpg"/>
      <image src="2.jpg"/>
      <image src="3.jpg"/>
    </layout>
  </breakpoint>
  <breakpoint ref="mobile">
    <carousel>
      <image src="1.jpg"/>
      <image src="2.jpg"/>
      <image src="3.jpg"/>
    </carousel>
  </breakpoint>
</responsive>
```

---

## 🔑 Breakpoint Reference Model

Breakpoints should be defined in the `<tokens>` section using:

```xml
<breakpoint name="mobile" max="767px"/>
<breakpoint name="tablet" min="768px" max="1023px"/>
<breakpoint name="desktop" min="1024px"/>
```

Then referenced using `ref="..."` in `<breakpoint>` blocks inside `<responsive>`.

---

## ✅ Attributes

### `<breakpoint>`
| Attribute | Required | Description |
|-----------|----------|-------------|
| `ref`     | Yes      | The name of the breakpoint token (e.g., `mobile`, `desktop`) |
| `min`     | No*      | Optional pixel value override if no token is used |
| `max`     | No*      | Optional pixel value override if no token is used |

> *Prefer using `ref`. `min`/`max` are fallbacks or overrides.

---

## ✅ Example

```xml
<responsive>
  <breakpoint ref="desktop">
    <layout type="row">
      <text>Item A</text>
      <text>Item B</text>
    </layout>
  </breakpoint>
  <breakpoint ref="mobile">
    <layout type="stack">
      <text>Item A</text>
      <text>Item B</text>
    </layout>
  </breakpoint>
</responsive>
```

---

## 🧩 AI Interpretation Guidelines

- Use the `<responsive>` block to generate conditional layout logic or responsive classes/media queries
- Respect the order of `<breakpoint>` elements (more specific last)
- Match `ref` values to declared breakpoints in `<tokens>`
- If no match, fallback to `min`/`max` for manual media query generation

---

## 🧠 Design Tool Behavior

- Render only the appropriate layout per screen size
- Allow preview switching between breakpoints
- Show fallback/placeholder elements for unsupported sizes

---

## 🗂 Related Features

- `<tokens>` → `breakpoint` declarations
- `<layout>` and component variants
- Conditional logic directives (`<if>`, `condition`, etc.)

---

## 🔧 Future Support Ideas

- Responsive style overrides (e.g. `fillStyle="..."` per breakpoint)
- Responsive slot content or component visibility
- Default vs override merging logic

---