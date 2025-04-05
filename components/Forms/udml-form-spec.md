# `<form>` Component

The `<form>` component serves as the top-level wrapper for a group of input fields and submission controls. It may include layout and validation handling hints.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | No | Optional URL endpoint to submit the form data |
| `method` | string | No | `post`, `get`, or custom transport hint |
| `name` | string | No | Identifier for form binding or schema |
| `submitLabel` | string | No | Optional label for default submit button |
| `ai-hint` | string | No | Natural-language intent of the form (e.g. 'login form') |

## ✅ Allowed Content
Any input, layout, or grouping components.

## 💡 Examples
**Basic form**
```xml
<form name="signupForm" submitLabel="Register">...</form>
```

## 🧩 AI Interpretation Guidelines
- Treat `<form>` as a logical form block and optionally generate a submit handler.
- Use `submitLabel` to auto-generate a submit button if not already present.
- In React, generate state and validation scaffolding using `name`.
---