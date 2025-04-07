# `<interaction>` Directive

The `<interaction>` directive defines how UI elements respond to user events and system triggers. It supports both simple UI interactions and complex business logic through a flexible, AI-friendly format.

---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the interaction |
| `event` | string | Yes | Type of event (click, hover, focus, etc.) |
| `target` | string | No | ID or name of element to affect |
| `type` | string | No | 'simple' or 'complex' (default: simple) |
| `ai-hint` | string | No | Additional context for AI interpretation |

## ✅ Allowed Content
- For simple interactions:
  - `<action>` elements
  - `<condition>` elements
  - `<effect>` elements

- For complex interactions:
  - `<description>` element
  - `<requirements>` elements
  - `<constraints>` elements
  - `<examples>` elements

## 💡 Examples

### Simple Interactions

**Modal Dialog**
```xml
<interaction name="openModal" event="click" type="simple">
  <action type="setProperty" target="modal" property="visible" value="true"/>
  <action type="setProperty" target="modal" property="active" value="true"/>
  <action type="setProperty" target="body" property="overflow" value="hidden"/>
</interaction>

<button interaction="openModal">Open Settings</button>
```


**Form Field Validation**
```xml
<interaction name="validateEmail" event="blur" type="simple">
  <condition property="email.value" matches="^[^@]+@[^@]+\.[^@]+$">
    <action type="setProperty" target="email" property="valid" value="true"/>
    <action type="setProperty" target="email.error" property="visible" value="false"/>
  </condition>
  <condition property="email.value" matches="^[^@]+@[^@]+\.[^@]+$" equals="false">
    <action type="setProperty" target="email" property="valid" value="false"/>
    <action type="setProperty" target="email.error" property="visible" value="true"/>
    <action type="setProperty" target="email.error" property="text" value="Please enter a valid email address"/>
  </condition>
</interaction>

<input type="email" interaction="validateEmail"/>
```

### Complex Interaction

**Order Submission**
```xml
<interaction name="submitOrder" event="click" type="complex">
  <description>
    When the user submits their order:
    1. Validate all form fields
    2. Check inventory for all items
    3. Calculate shipping costs based on address
    4. Apply any valid promo codes
    5. Show order summary
    6. Process payment
    7. Send confirmation email
    8. Update inventory
  </description>
  
  <requirements>
    <requirement>Must validate all required fields</requirement>
    <requirement>Must check inventory before processing</requirement>
    <requirement>Must handle payment errors gracefully</requirement>
  </requirements>
  
  <constraints>
    <constraint>Order total must be positive</constraint>
    <constraint>Shipping address must be valid</constraint>
    <constraint>Payment must be authorized</constraint>
  </constraints>
  
  <examples>
    <example>
      User submits order with valid payment:
      1. Form validates successfully
      2. Payment processes
      3. Order confirmation shows
      4. Email sends
    </example>
    <example>
      User submits with invalid payment:
      1. Form validates
      2. Payment fails
      3. Error message shows
      4. User can retry payment
    </example>
  </examples>
</interaction>
```

## 🧩 AI Interpretation Guidelines

### For Simple Interactions
- Map events to appropriate framework event handlers
- Implement conditions as if/else statements
- Chain actions in sequence
- Handle animations using framework animation systems
- Maintain state consistency
- Ensure accessibility

### For Complex Interactions
- Parse natural language description into logical steps
- Identify required data transformations
- Map business rules to appropriate services
- Handle error cases and edge conditions
- Implement proper state management
- Ensure data consistency
- Follow security best practices

## Action Types

### `setProperty`
Updates a property of a target element.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | Element to modify |
| `property` | string | Yes | Property to update |
| `value` | any | Yes | New value to set |

### `animate`
Animates a property change over time.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | Element to animate |
| `property` | string | Yes | Property to animate |
| `from` | any | Yes | Starting value |
| `to` | any | Yes | Ending value |
| `duration` | string | No | Animation duration (default: 200ms) |
| `easing` | string | No | Easing function (default: ease-in-out) |

### `validate`
Validates form input or data.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | Form or input to validate |
| `rules` | string | No | Validation rules to apply |

### `submit`
Submits data to a server or handler.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | Form or data to submit |
| `endpoint` | string | No | API endpoint to submit to |

### `toggle`
Toggles a boolean property between true and false.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | Element to modify |
| `property` | string | Yes | Boolean property to toggle |

### `show`
Shows or hides an element.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | Element to show/hide |
| `visible` | boolean | Yes | Whether to show or hide |

### `focus`
Sets focus to an element.

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | Element to focus |
| `select` | boolean | No | Whether to select text (default: false) |

---

### 1. Event Binding via Directives

Interactive elements can declare event-based triggers using attributes such as `onClick`, `onHover`, `onFocus`, etc., and bind them to named actions:

```xml
<Button onClick="submitForm">Submit</Button>
```

These directives reference actions defined in the current component, screen, or globally.

---

### 2. Action Definition

An `<Action>` defines one or more effects to perform when triggered. Each action has a required `name` and contains one or more effect nodes such as `<SetProperty>`, `<CallAction>`, or `<AnimateProperty>`.

```xml
<Action name="showArrows">
  <SetProperty target="arrows" property="visibility" value="true" />
</Action>
```

---

### 3. Available Directives

- `onClick`
- `onHover`
- `onFocus`
- `onBlur`
- `onChange`
- `onMount`
- `onEnter`, `onLeave`

Each directive triggers an action by name.

---

### 4. Action Elements

#### `<SetProperty>`

Sets a property of a given target component.

| Attribute  | Description                         |
| ---------- | ----------------------------------- |
| `target`   | ID or name of the element to affect |
| `property` | The property to update              |
| `value`    | The new value to assign             |

```xml
<SetProperty target="sidebar" property="expanded" value="false" />
```

#### `<CallAction>`

Calls another action by name. Enables **chaining**.

```xml
<CallAction name="logAnalyticsEvent" />
```

#### `<AnimateProperty>` *(optional / future spec)*

Defines a visual transition of a property over time.

---

### 5. Conditional Logic

Actions can include conditions using the `<If>` directive. The action will only execute the child effects if the condition evaluates to true.

```xml
<Action name="toggleDropdown">
  <If property="dropdown.visible" equals="false">
    <SetProperty target="dropdown" property="visible" value="true" />
  </If>
  <If property="dropdown.visible" equals="true">
    <SetProperty target="dropdown" property="visible" value="false" />
  </If>
</Action>
```

#### `<If>` Attributes

| Attribute  | Description                          |
| ---------- | ------------------------------------ |
| `property` | Path to a property or state variable |
| `equals`   | Value to compare against             |

---

### 6. Chained Actions

You can call other actions as part of a flow using `<CallAction>`. Actions will be executed in order of appearance.

```xml
<Action name="submitForm">
  <CallAction name="validateFields" />
  <CallAction name="sendToAPI" />
  <CallAction name="showSuccessMessage" />
</Action>
```

---

### 7. Action Scope

Actions can be declared:

- **Locally** inside a `<Component>` or `<Screen>`
- **Globally** in shared documents or libraries

```xml
<Component name="ListingCard">
  <Actions>
    <Action name="showArrows">
      <SetProperty target="arrows" property="visibility" value="true" />
    </Action>
  </Actions>
</Component>
```

---

### 8. Complete Example: Hover to Show Arrows (with conditions and chaining)

```xml
<Actions>
  <Action name="showArrows">
    <If property="arrows.visible" equals="false">
      <SetProperty target="arrows" property="visibility" value="true" />
      <CallAction name="trackArrowReveal" />
    </If>
  </Action>

  <Action name="trackArrowReveal">
    <SetProperty target="analytics" property="event" value="carousel_hover_arrows_shown" />
  </Action>
</Actions>

<Carousel id="carousel" onHover="showArrows">
  <Image src="1.jpg" />
  <IconButton id="arrows" icon="chevron-left" visibility="false" />
  <IconButton id="arrows" icon="chevron-right" visibility="false" />
</Carousel>
```

---

