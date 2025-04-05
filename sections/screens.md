# `<screens>` Section

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