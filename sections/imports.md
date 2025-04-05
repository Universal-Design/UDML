# `<imports>` Section

The `<imports>` section allows UDML documents to reference and reuse external UDML files, typically to include shared tokens, styles, or components.

---

## 🧠 Purpose

To promote modularity, reuse, and consistent design across large projects by enabling shared design systems and libraries.

---

## 🛠 Syntax

```xml
<imports>
  <import src="https://cdn.example.com/tokens.udml"/>
</imports>
```

---

## 🔑 Child Tags

| Tag        | Required Attributes | Description                        |
|-------------|----------------------|------------------------------------|
| `<import>`  | `src` (URL or path)  | Path to the external UDML document |

---

## 🧩 AI Interpretation Guidelines

- Resolve all imports **before** interpreting the current document.
- Merge tokens, styles, or components as needed.
- Respect scope and naming to avoid conflicts.

---