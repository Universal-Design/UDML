# `<meta>` Section

The `<meta>` section contains structured metadata about the project, including author, environment preferences, and system-level context for AI interpretation.

---

## 🧠 Purpose

To communicate structured project-level info to AI agents, such as:
- Author and team identity
- Preferred libraries or platforms
- Target audience or device type

---

## 🛠 Syntax

```xml
<meta>
  <author name="Jane Doe"/>
  <project name="InventoryApp"/>
  <preferredLibrary>React</preferredLibrary>
</meta>
```

- Each child tag contains key-value metadata.
- No nested elements inside metadata entries.

---

## 🔑 Common Child Tags

| Tag               | Attributes           | Description                          |
|------------------|----------------------|--------------------------------------|
| `<author>`        | `name`               | Name of the creator or team          |
| `<project>`       | `name`               | The name of the project or app       |
| `<preferredLibrary>` | text content       | e.g., `React`, `Vue`, `Flutter`      |

---

## 🧩 AI Interpretation Guidelines

- Use `preferredLibrary` to **guide code generation**.
- `author` and `project` may be used for **documentation, licensing, or branding**.
- Future additions could include device targets, accessibility goals, or localization hints.

---

## ✅ Example

```xml
<meta>
  <author name="Jane Doe"/>
  <project name="QuickCRM"/>
  <preferredLibrary>Vue</preferredLibrary>
</meta>
```