# `<dataColumn>` Component

The `<dataColumn>` component defines a single column in a `<dataTable>`, including its data type, formatting, and behavior properties. Each column can have its own data source, binding, and display rules.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the column |
| `header` | string | Yes | Display text for the column header |
| `dataType` | string | Yes | Type of data (text, number, currency, date, select, etc.) |
| `source` | string | No | Override global data source for this column |
| `bind` | string | No | Field path to display from the source data |
| `width` | string | No | Fixed or percentage width (e.g., `120px`, `25%`) |
| `fixed` | string | No | Pin column to `left` or `right` |
| `sortable` | boolean | No | Enable sorting for this column |
| `filterable` | boolean | No | Enable filtering for this column |
| `format` | string | No | Format string for the data type |
| `transform` | string | No | Value mapping (e.g., "PENDING=Pending Review") |

## Data Type Specific Attributes

### Currency
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | Yes | Currency code (e.g., "USD") |
| `format` | string | No | Number format (e.g., "#,##0.00") |

### Date
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `format` | string | No | Date format (e.g., "MM/DD/YYYY") |

### Select
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | string | Yes | Comma-separated list of options |
| `transform` | string | No | Value to display mapping |

### Actions
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `actions` | string | Yes | Comma-separated list of actions |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples

**Basic Text Column**
```xml
<dataColumn 
  name="orderId" 
  header="Order ID" 
  dataType="text"
  width="120px"
  sortable="true"
/>
```

**Currency Column**
```xml
<dataColumn 
  name="total" 
  header="Total" 
  dataType="currency"
  currency="USD"
  format="#,##0.00"
  sortable="true"
/>
```

**Date Column**
```xml
<dataColumn 
  name="createdAt" 
  header="Created" 
  dataType="date"
  format="MM/DD/YYYY"
  sortable="true"
/>
```

**Select Column with Transform**
```xml
<dataColumn 
  name="status" 
  header="Status" 
  dataType="select"
  options="PENDING,COMPLETED,CANCELLED"
  transform="PENDING=Pending Review,COMPLETED=Completed,CANCELLED=Cancelled"
/>
```

**Actions Column**
```xml
<dataColumn 
  name="actions" 
  header="Actions" 
  dataType="actions"
  actions="edit,delete,view"
/>
```

## 🧩 AI Interpretation Guidelines
- Generate appropriate input/display components based on dataType
- Apply formatting and transformations as specified
- Implement sorting and filtering UI when enabled
- Handle data binding and source overrides
- Generate action buttons for actions type
- Apply width and fixed positioning
---