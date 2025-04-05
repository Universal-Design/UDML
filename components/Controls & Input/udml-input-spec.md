# `<input>` Component

The `<input>` component is a versatile form control that supports various input types, formatting, validation, and rich features like icons and help text.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Input type (`text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `time`, `datetime-local`) |
| `name` | string | Yes | Field name for form binding |
| `label` | string | No | Field label text |
| `labelPosition` | string | No | Label position (`top`, `left`, `floating`) |
| `placeholder` | string | No | Hint text inside the input |
| `value` | string | No | Initial or bound value |
| `required` | boolean | No | Marks the field as required |
| `disabled` | boolean | No | Disables user input |
| `readonly` | boolean | No | Makes input readonly |
| `autocomplete` | string | No | Autocomplete behavior (`on`, `off`, `name`, `email`, etc.) |
| `maxLength` | number | No | Maximum character length |
| `minLength` | number | No | Minimum character length |
| `pattern` | string | No | Regex pattern for validation |
| `error` | string | No | Error message to display |
| `help` | string | No | Help text below the input |
| `size` | string | No | Input size (`small`, `medium`, `large`) |
| `variant` | string | No | Visual variant (`outlined`, `filled`, `underline`) |
| `state` | string | No | Visual state (`default`, `error`, `success`, `warning`) |

## Formatting and Masking
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `format` | string | No | Format mask (e.g., `(###) ###-####` for phone) |
| `prefix` | string | No | Text to show before input (e.g., `$` for currency) |
| `suffix` | string | No | Text to show after input (e.g., `%` for percentage) |
| `thousandsSeparator` | string | No | Character for thousands separation (e.g., `,`) |
| `decimalSeparator` | string | No | Character for decimal separation (e.g., `.`) |

## Icons and Add-ons
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `leadingIcon` | string | No | Icon name to show before input |
| `trailingIcon` | string | No | Icon name to show after input |
| `clearable` | boolean | No | Show clear button when input has value |
| `passwordToggle` | boolean | No | Show password visibility toggle (for password type) |

## ✅ Allowed Content
Self-closing or may contain:
- `<icon>` for custom leading/trailing icons
- `<addon>` for custom input add-ons

## 💡 Examples

**Basic Text Input with Label**
```xml
<input 
  type="text"
  name="username"
  label="Username"
  placeholder="Enter your username"
  required="true"
  help="Username must be 3-20 characters long"
/>
```

**Email Input with Icons and Validation**
```xml
<input 
  type="email"
  name="email"
  label="Email Address"
  labelPosition="floating"
  placeholder="Enter your email"
  leadingIcon="email"
  required="true"
  error="Please enter a valid email address"
/>
```

**Phone Input with Formatting**
```xml
<input 
  type="tel"
  name="phone"
  label="Phone Number"
  format="(###) ###-####"
  placeholder="(555) 123-4567"
  leadingIcon="phone"
  clearable="true"
/>
```

**Currency Input with Add-ons**
```xml
<input 
  type="number"
  name="price"
  label="Price"
  prefix="$"
  thousandsSeparator=","
  decimalSeparator="."
  min="0"
  step="0.01"
  variant="outlined"
  state="success"
/>
```

**Search Input with Custom Icons**
```xml
<input 
  type="search"
  name="search"
  placeholder="Search..."
  leadingIcon="search"
  clearable="true"
  size="large"
>
  <icon name="search" slot="leading"/>
  <icon name="clear" slot="trailing"/>
</input>
```

**Password Input with Toggle**
```xml
<input 
  type="password"
  name="password"
  label="Password"
  placeholder="Enter your password"
  passwordToggle="true"
  minLength="8"
  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
  help="Password must be at least 8 characters and contain letters and numbers"
/>
```

## 🧩 AI Interpretation Guidelines
- Generate appropriate input element with type and attributes
- Apply formatting and masking if specified
- Handle icon placement and styling
- Implement validation and error states
- Support accessibility features
- Handle different label positions
- Apply appropriate styling based on variant and state
- Implement clear and password toggle functionality
- Support custom add-ons and icons
- Handle form binding and state management
---