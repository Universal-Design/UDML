# `<styles>` Section

The `<styles>` section defines reusable named style presets that can be applied to components using attributes like `textStyle`, `fillStyle`, `strokeStyle`, and `effectStyle`. It also supports **combined custom styles** that reference multiple named styles under a single alias.

---

## 🧠 Purpose

To separate styling concerns from structure by creating tokenized, reusable visual presets that:
- Promote consistency across components and screens
- Simplify markup by avoiding repetitive style references
- Enable teams to define composite styles that match design system patterns

---

## 🛠 Syntax

```xml
<styles>
  <textStyle name="title-lg" font="Inter" weight="600" size="32px"/>
  <fillStyle name="surface" color="#ffffff"/>
  <strokeStyle name="outline" color="#E0E0E0" width="1px"/>
  <effectStyle name="card-shadow" type="shadow" blur="12px" color="rgba(0,0,0,0.1)"/>

  <customStyle name="card" 
    textStyle="title-lg"
    fillStyle="surface"
    strokeStyle="outline"
    effectStyle="card-shadow"/>
</styles>
```

---

## 🔑 Supported Style Types

| Tag             | Attributes                               | Purpose                        |
|------------------|------------------------------------------|---------------------------------|
| `<textStyle>`    | `name`, `font`, `size`, `weight`         | Typography presets             |
| `<fillStyle>`    | `name`, `color`                          | Background color/fill          |
| `<strokeStyle>`  | `name`, `color`, `width`                 | Borders or outlines            |
| `<effectStyle>`  | `name`, `type`, `blur`, `color`          | Shadows or visual effects      |
| `<customStyle>`  | `name`, one or more style refs           | Combines references to other named styles |

---

## 🧩 Applying Styles to Components

You can apply individual styles:
```xml
<text textStyle="title-lg">Hello</text>
<card fillStyle="surface" strokeStyle="outline"/>
```

Or use a combined style:
```xml
<card style="card">
  <text style="title-lg">Card Title</text>
</card>
```

When `style="card"` is used, it expands to the styles defined in `<customStyle name="card">`.

---

## 🧠 AI Interpretation Guidelines

- Resolve style references (`textStyle`, `fillStyle`, `style`) using the style name map in `<styles>`.
- For `<customStyle>`, expand referenced style attributes to concrete values or classnames.
- Apply inherited properties unless explicitly overridden at the component level.
- Use `style="..."` as a shorthand for multiple styles to streamline code generation.

---

## ✅ Example

```xml
<styles>
  <textStyle name="title-lg" font="Inter" weight="600" size="32px"/>
  <fillStyle name="surface" color="#ffffff"/>
  <strokeStyle name="outline" color="#E0E0E0" width="1px"/>
  <effectStyle name="card-shadow" type="shadow" blur="12px" color="rgba(0,0,0,0.1)"/>

  <customStyle name="card" 
    textStyle="title-lg" 
    fillStyle="surface"
    strokeStyle="outline"
    effectStyle="card-shadow"/>
</styles>
```

---

## 🗂 Related Elements

- `<tokens>`
- `<text>`
- `<card>`
- `<layout>`
- `<component>`

---