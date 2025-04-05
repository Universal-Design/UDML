# `<data>` Directive Specification

The `<data>` directive provides a simple way to specify data binding for individual elements within a visual design.

---

## 🧠 Purpose

To enable designers to specify what data should populate each visual element, while maintaining complete control over the element's appearance and layout.

---

## 🛠 Usage Syntax

### 1. Basic Element Data
```xml
<card>
  <row gap="16px" align="center">
    <image width="48px" height="48px" radius="24px">
      <data 
        description="User's profile picture"
        mock="avatar"
        type="image"
      />
    </image>
    <column>
      <text size="large" weight="bold">
        <data 
          description="User's full name"
          mock="John Smith"
          type="string"
        />
      </text>
      <text color="gray">
        <data 
          description="User's role"
          mock="Design Lead"
          type="string"
        />
      </text>
    </column>
  </row>
</card>
```

### 2. Form Field Data
```xml
<column gap="16px">
  <text size="small" color="gray">Email Address</text>
  <input type="email" width="100%" padding="12px">
    <data 
      description="User's email address"
      mock="john.smith@example.com"
      type="email"
      required="true"
    />
  </input>
</column>
```

### 3. Table Column Data
```xml
<dataTable>
  <column name="customer" header="Customer">
    <data 
      description="Customer's full name"
      mock="customer"
      type="string"
    />
  </column>
  <column name="orderDate" header="Order Date">
    <data 
      description="Date the order was placed"
      mock="date"
      type="date"
      format="MM/DD/YYYY"
    />
  </column>
</dataTable>
```

---

## 🔑 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `description` | string | Yes | Semantic description of the data |
| `mock` | string | No | Mock value or mock data type |
| `type` | string | No | Data type (`string`, `number`, `boolean`, `date`, `image`, `status`) |
| `format` | string | No | Format pattern (e.g., "MM/DD/YYYY" for dates) |
| `transform` | string | No | Transformation expression |
| `required` | boolean | No | Whether the field is required |

---

## ✅ Example Usages

**User Profile Card**
```xml
<card padding="24px" radius="8px">
  <column gap="24px">
    <row gap="16px" align="center">
      <image width="64px" height="64px" radius="32px">
        <data 
          description="User's profile picture"
          mock="avatar"
          type="image"
        />
      </image>
      <column>
        <text size="xlarge" weight="bold">
          <data 
            description="User's full name"
            mock="John Smith"
            type="string"
          />
        </text>
        <text color="gray">
          <data 
            description="User's role"
            mock="Design Lead"
            type="string"
          />
        </text>
      </column>
    </row>
  </column>
</card>
```

**Status Indicator**
```xml
<box 
  padding="8px 16px" 
  background="#f0f9ff" 
  radius="4px"
  width="fit-content"
>
  <text color="#0066cc">
    <data 
      description="User's status"
      mock="Active"
      type="status"
    />
  </text>
</box>
```

---

## 🧠 AI Interpretation Guidelines
- Preserve all visual styling and layout
- Apply data binding based on the data specification
- Generate appropriate mock data based on type
- Handle data transformations
- Support nested structures
- Maintain accessibility
- Generate appropriate data fetching logic

---

## 🗂 Related Elements

- `<text>`, `<input>`, `<image>`, `<card>`, `<listItem>`, etc.

---