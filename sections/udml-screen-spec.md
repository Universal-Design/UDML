# `<screens>`

The `<screens>` section defines the top-level visual structure of each screen in the application. Each `<screen>` block is a single view or route, built from layouts and components.

---

## 🧠 Purpose

To encapsulate and separate views in a multi-screen app, allowing AI tools to generate screens as files, components, or pages based on their names and content.

---

## 🛠 Syntax

```xml
<screens>
  <screen name="Home">
    <layout type="stack">
      <text variant="title">Welcome</text>
      <button>Start</button>
    </layout>
  </screen>
</screens>
```

---

## 🔑 Required Attributes

| Tag       | Attributes | Description                    |
|------------|------------|--------------------------------|
| `<screen>` | `name`     | Unique screen/view identifier  |

---

## 🧩 AI Interpretation Guidelines

- Treat each `<screen>` as a self-contained route or view.
- Use `name` to determine output file/component naming.
- Extract nested layouts and components to structure the rendered page.

---

## 🧩 Modal Screen Support

UDML supports defining reusable modals and overlays as special screen types.

### ✅ Usage

```xml
<screens>
  <screen name="home">...</screen>
  <screen name="settings">...</screen>

  <!-- Modal defined as a screen -->
  <screen name="deleteConfirm" type="modal">
    <dialog title="Are you sure?" type="confirm">
      <text>This action cannot be undone.</text>
      <layout type="row" justify="end">
        <button variant="secondary">Cancel</button>
        <button variant="primary">Delete</button>
      </layout>
    </dialog>
  </screen>
</screens>
```

### 🔑 Rules

- `type="modal"` defines the screen as a modal overlay, not a full view.
- Modals can be **reused across multiple flows** by referencing the `name`.
- Useful for dialogs, confirmations, alerts, authentication popups, etc.
- AI agents should **not treat these as primary routes** unless triggered contextually.

### 🧠 AI Guidelines

- Render `screen[type="modal"]` as an overlay or layer on top of the invoking screen.
- Trigger visibility using a state variable or interaction.
- Treat modals as independently scoped UI units (like named components).