# `<repeat>` Directive

The `<repeat>` directive creates multiple instances of its content based on a data source or count. It's particularly useful for creating repeating patterns in layouts like grids, lists, or carousels.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | No | Data array to iterate over |
| `count` | number | No | Fixed number of items to create (if no source) |
| `maxItems` | number | No | Maximum number of items to create |
| `maxPerRow` | number | No | Maximum items per row in grid layouts |
| `itemName` | string | No | Name of the current item in the iteration context |
| `indexName` | string | No | Name of the index variable in the iteration context |

## ✅ Allowed Content
Any valid UDML components or elements.

## 💡 Examples

**Basic Grid with Repeating Items**
```xml
<grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="16px">
  <repeat count="6">
    <box padding="16px" background="#f5f5f5">
      <text>Item</text>
    </box>
  </repeat>
</grid>
```

**Data-Driven List**
```xml
<column gap="8px">
  <repeat source="users" maxItems="10">
    <box padding="16px">
      <text bind="name"/>
      <text bind="email"/>
    </box>
  </repeat>
</column>
```

**Grid with Max Items Per Row**
```xml
<grid columns="repeat(3, 1fr)" gap="16px">
  <repeat source="products" maxPerRow="3">
    <box padding="16px">
      <image bind="imageUrl"/>
      <text bind="name"/>
      <text bind="price"/>
    </box>
  </repeat>
</grid>
```

**Complex Repeating Pattern**
```xml
<grid columns="repeat(2, 1fr)" gap="24px">
  <repeat source="categories" itemName="category">
    <box padding="16px">
      <text bind="category.name"/>
      <column gap="8px">
        <repeat 
          source="category.products" 
          maxItems="3"
          itemName="product"
        >
          <box padding="8px">
            <text bind="product.name"/>
            <text bind="product.price"/>
          </box>
        </repeat>
      </column>
    </box>
  </repeat>
</grid>
```

## 🧩 AI Interpretation Guidelines
- Generate appropriate iteration logic based on source or count
- Apply maxItems and maxPerRow constraints
- Handle nested repeats correctly
- Maintain proper context for data binding
- Generate appropriate layout structure
- Handle empty states and edge cases
---