# `<tracking>` Directive

The `<tracking>` directive defines analytics and event tracking behavior. It provides a declarative way to specify what events should be tracked and how, separate from UI interactions.

---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the tracking event |
| `category` | string | Yes | Event category (e.g., 'user', 'system', 'error') |
| `action` | string | Yes | Specific action being tracked |
| `label` | string | No | Additional context for the event |
| `value` | number | No | Numeric value associated with the event |
| `ai-hint` | string | No | Additional context for AI interpretation |

## ✅ Allowed Content
- `<property>` elements for custom event properties
- `<condition>` elements for conditional tracking

## 💡 Examples

**Basic Click Tracking**
```xml
<tracking 
  name="submitButtonClick" 
  category="user" 
  action="click" 
  label="Submit Form"
>
  <property name="formId" value="userProfile"/>
  <property name="timestamp" value="now()"/>
</tracking>

<button tracking="submitButtonClick">Submit</button>
```

**Conditional Error Tracking**
```xml
<tracking 
  name="formError" 
  category="error" 
  action="validation" 
  label="Form Validation Failed"
>
  <condition property="form.errors" exists="true">
    <property name="errorCount" value="count(form.errors)"/>
    <property name="errorTypes" value="form.errors.map(e => e.type)"/>
  </condition>
</tracking>

<form tracking="formError">
  <!-- form fields -->
</form>
```

**System Performance Tracking**
```xml
<tracking 
  name="pageLoad" 
  category="system" 
  action="performance" 
  label="Page Load Time"
>
  <property name="loadTime" value="performance.now()"/>
  <property name="userAgent" value="navigator.userAgent"/>
</tracking>

<screen tracking="pageLoad">
  <!-- screen content -->
</screen>
```

## 🧩 AI Interpretation Guidelines
- Map tracking events to appropriate analytics systems
- Handle conditional tracking with proper guards
- Preserve event context and properties
- Implement proper timing for performance metrics
- Ensure privacy compliance
- Support multiple analytics providers

## Property Types

### `property`
Defines a custom property for the tracking event.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Property name |
| `value` | any | Yes | Property value (can be dynamic) |
| `type` | string | No | Data type (string, number, boolean, array) |

### `condition`
Defines when tracking should occur.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `property` | string | Yes | Property to check |
| `exists` | boolean | No | Check if property exists |
| `equals` | any | No | Value to compare against |