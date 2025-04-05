# `<components>` Section

The `<components>` section defines custom reusable components made from UDML primitives. These are composable blocks with named `<slot>` placeholders for dynamic content.

---

## 🧠 Purpose

To support system design principles like reusability, consistency, and separation of concerns by enabling authors to define UI components once and use them anywhere.

---

## 🛠 Syntax

```xml
<components>
  <component name="UserCard">
    <card>
      <slot name="avatar"/>
      <slot name="name"/>
      <slot name="actions"/>
    </card>
  </component>
</components>
```

---

## 🔑 Child Tags

| Tag        | Required Attributes | Purpose                        |
|-------------|----------------------|---------------------------------|
| `<component>` | `name`               | Defines the reusable block      |
| `<slot>`      | `name`               | Declares a dynamic placeholder  |

---

## ✅ Example Use in Screens

```xml
<component is="UserCard">
  <avatar slot="avatar" src="user.png"/>
  <text slot="name">Jane Doe</text>
  <button slot="actions">View</button>
</component>
```

---

## 🧩 AI Interpretation Guidelines

- Expand `<component is="...">` blocks with the defined structure.
- Replace `<slot name="...">` with slotted content provided in use.
- Preserve custom structure and style of the original definition.

---