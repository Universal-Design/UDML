# `<binding>` Directive Specification (Global Data Binding Model)

The `<binding>` directive in UDML allows authors to mark any content or attribute as dynamic. It can specify a suggested data path, a fallback placeholder, and an optional semantic hint to guide AI interpretation or mock rendering.

---

## 🧠 Purpose

To indicate that a value in the UI should be dynamically loaded or computed at runtime, while still preserving meaning and providing design-time feedback.

---

## 🛠 Usage Syntax

### 1. As a child element

```xml
<text>
  <binding path="user.name" placeholder="Jane Doe" hint="Full name of the logged-in user"/>
</text>
```

### 2. As attributes

```xml
<input type="email" bind="user.email" placeholder="jane@example.com" hint="User email address"/>
```

### 3. As inline shorthand

```xml
<text>{{ ?user.name || "Jane Doe" }}</text>
```

---

## 🔑 Attributes

| Attribute     | Required | Description |
|---------------|----------|-------------|
| `path`        | No       | Suggested data binding path (e.g., `user.name`) |
| `placeholder` | Yes      | Default or mock value for rendering |
| `hint`        | No       | Semantic meaning for the bound value |
| `type`        | No       | Optional type hint (e.g., `string`, `image`, `boolean`) |

---

## ✅ Example Usages

```xml
<avatar src="{{ user.avatarUrl || '/images/default.png' }}" hint="User profile picture"/>
```

```xml
<text>
  <binding path="invoice.total" placeholder="$149.00" hint="Total amount due"/>
</text>
```

---

## 🧠 AI Interpretation Guidelines

- Use `path` as a data reference for props/state
- Display `placeholder` in mock UI or previews
- Use `hint` to infer structure, logic, or naming
- `type` may help determine UI widgets or validation

---

## 🗂 Related Elements

- `<text>`, `<input>`, `<image>`, `<card>`, `<listItem>`, etc.

---