# <form> Component

The `<form>` component groups and manages input fields. It provides a semantic wrapper for user data entry and submission.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | No | Name of the form submit handler or action |
| `method` | string | No | `post`, `get`, or other custom descriptor |
| `onSubmit` | string | No | Event handler name for form submission |
| `validation` | string | No | Optional validation schema or rule set reference |

## 💡 Examples
**Basic Form**
```xml
<form action="submitForm">...</form>
```

**With Handler**
```xml
<form onSubmit="handleLogin">...</form>
```

---