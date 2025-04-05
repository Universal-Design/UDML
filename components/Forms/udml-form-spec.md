# `<form>` Component

The `<form>` component serves as a container for form elements, providing form-level functionality like validation, submission handling, and state management. It can automatically generate appropriate form structure, validation, and submission logic based on its contents.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the form |
| `action` | string | No | URL endpoint for form submission |
| `method` | string | No | HTTP method (`post`, `get`) |
| `submitLabel` | string | No | Label for auto-generated submit button |
| `validate` | boolean | No | Enable automatic validation |
| `autoSubmit` | boolean | No | Submit on valid input |
| `resetOnSubmit` | boolean | No | Clear form after successful submission |
| `ai-hint` | string | No | Natural language description of form purpose |

## Form State Attributes
These attributes can be used within the form to access form state:
| Attribute | Type | Description |
|-----------|------|-------------|
| `formState` | object | Current form values |
| `formErrors` | object | Current validation errors |
| `isValid` | boolean | Form validation status |
| `isSubmitting` | boolean | Submission status |

## ✅ Allowed Content
- Form input components
- Layout components
- Validation messages
- Submit/reset buttons

## 💡 Examples

**Basic Form with Validation**
```xml
<form name="login" validate="true">
  <column gap="16px">
    <input 
      name="email" 
      type="email" 
      required 
      placeholder="Email"
    />
    <input 
      name="password" 
      type="password" 
      required 
      placeholder="Password"
    />
    <button type="submit">Login</button>
  </column>
</form>
```

**Complex Form with State**
```xml
<form 
  name="userProfile" 
  validate="true"
  autoSubmit="true"
  resetOnSubmit="true"
>
  <column gap="24px">
    <text>User Profile</text>
    
    <input 
      name="name" 
      required 
      placeholder="Full Name"
    />
    
    <input 
      name="email" 
      type="email" 
      required 
      placeholder="Email"
    />
    
    <select name="role" required>
      <option value="">Select Role</option>
      <option value="admin">Administrator</option>
      <option value="user">User</option>
    </select>
    
    <!-- Show error message if form has errors -->
    <text if="formErrors" color="error">
      Please fix the errors above
    </text>
    
    <!-- Disable submit button while submitting -->
    <button 
      type="submit" 
      disabled="isSubmitting"
    >
      Save Profile
    </button>
  </column>
</form>
```

## 🧩 AI Interpretation Guidelines
- Generate appropriate form element with method and action
- Create form state management (React state, Vue data, etc.)
- Implement validation logic based on input attributes
- Handle form submission and reset
- Generate appropriate error handling
- Create accessibility attributes
- Implement proper form structure and semantics
---