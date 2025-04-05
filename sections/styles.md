# `<styles>` Section

The `<styles>` section defines reusable named style presets that can be applied to components using attributes like `textStyle`, `fillStyle`, `strokeStyle`, and `effectStyle`.

---

## 🧠 Purpose

To separate visual styling from component structure by creating named, tokenized styles that can be reused across a UDML document or shared library.

---

## 🛠 Syntax

```xml
<styles>
  <textStyle name="title-lg" font="Inter" weight="600" size="32px"/>
  <fillStyle name="surface" color="#ffffff"/>
  <strokeStyle name="outline" color="#E0E0E0" width="1px"/>
  <effectStyle name="card-shadow" type="shadow" blur="12px" color="rgba(0,0,0,0.1)"/>
</styles>
```

---

## 🔑 Supported Style Types

| Tag           | Attributes                         | Purpose                    |
|----------------|----------------------------------|-----------------------------|
| `<textStyle>`  | `name`, `font`, `size`, `weight` | Typography tokens           |
| `<fillStyle>`  | `name`, `color`                  | Background fills            |
| `<strokeStyle>`| `name`, `color`, `width`         | Borders                     |
| `<effectStyle>`| `name`, `type`, `blur`, `color`  | Shadows or glow effects     |

---

## ✅ Example Use in Components

```xml
<text textStyle="title-lg">Dashboard</text>
<card fillStyle="surface" strokeStyle="outline" effectStyle="card-shadow">...</card>
```

---

## 🧩 AI Interpretation Guidelines

- AI tools should resolve named styles to concrete values during UI generation.
- Named styles enhance maintainability and help enforce design system consistency.
- Style definitions can be imported across UDML files.

---