# `<dataTable>` Component

The `<dataTable>` component presents structured tabular data using a columns-first approach, similar to modern tools like Airtable or Notion. Columns are defined using `<dataColumn>` elements, and rows are automatically generated based on the data source.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | No | Global data source path (can be overridden per column) |
| `sortable` | boolean | No | Enable sort interactions globally |
| `filterable` | boolean | No | Enable filter UI globally |
| `paginate` | boolean | No | Enable pagination UI |
| `pageSize` | number | No | Items per page (default: 50) |
| `ai-hint` | string | No | Describes the type of data shown |

## ✅ Allowed Content
- `<dataColumn>` elements
- Optional `<columnGroup>` for grouping columns
- Optional `<features>` for advanced functionality

## 💡 Examples

**Basic Table**
```xml
<dataTable source="orders">
  <dataColumn name="orderId" header="Order ID" dataType="text"/>
  <dataColumn name="total" header="Total" dataType="currency" currency="USD"/>
</dataTable>
```

**Advanced Table with Features**
```xml
<dataTable 
  source="orders"
  sortable="true"
  filterable="true"
  paginate="true"
  pageSize="50"
>
  <columnGroup header="Order Details">
    <dataColumn 
      name="orderId"
      header="Order ID"
      dataType="text"
      sortable="true"
      width="120px"
      fixed="left"
    />
    <dataColumn 
      name="date"
      header="Date"
      dataType="date"
      format="MM/DD/YYYY"
    />
  </columnGroup>

  <dataColumn 
    name="customer"
    header="Customer"
    dataType="text"
    source="customers"
    bind="name"
  />

  <dataColumn 
    name="status"
    header="Status"
    dataType="select"
    options="PENDING,COMPLETED,CANCELLED"
    transform="PENDING=Pending Review,COMPLETED=Completed,CANCELLED=Cancelled"
  />

  <features>
    <selection mode="multiple"/>
    <expandableRows/>
    <summaryRow position="bottom"/>
  </features>
</dataTable>
```

## 🧩 AI Interpretation Guidelines
- Generate table structure based on column definitions
- Apply data types and formatting per column
- Implement sorting, filtering, and pagination as specified
- Handle data binding and transformations
- Apply column grouping and advanced features
- Generate appropriate UI components for the target framework
---