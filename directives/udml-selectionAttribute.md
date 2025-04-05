# Selection Attributes for Containers

These attributes can be added to any container component to enable selection behavior.

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectionMode` | string | No | Selection behavior (`single`, `multiple`) |
| `maxSelections` | number | No | Maximum number of selectable items |
| `allowDeselect` | boolean | No | Allow deselecting selected items |
| `selectedClass` | string | No | CSS class to apply to selected items |
| `onSelect` | string | No | Handler for selection events |

## Child Item Attributes
These attributes can be applied to items within a selection-enabled container:
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectable` | boolean | No | Whether the item can be selected |
| `selected` | boolean | No | Initial selected state |
| `disabled` | boolean | No | Prevent selection |

## 💡 Examples

**Photo Gallery Selection**
```xml
<grid 
  columns="repeat(3, 1fr)" 
  gap="16px"
  selectionMode="multiple"
  maxSelections="3"
  selectedClass="selected"
  onSelect="handlePhotoSelect"
>
  <repeat source="photos">
    <box selectable="true">
      <image bind="url"/>
    </box>
  </repeat>
</grid>
```

**List with Single Selection**
```xml
<column 
  gap="8px"
  selectionMode="single"
  selectedClass="selected"
  onSelect="handleItemSelect"
>
  <repeat source="items">
    <box 
      selectable="true"
      padding="16px"
    >
      <text bind="name"/>
    </box>
  </repeat>
</column>
```

**Nested Selection Groups**
```xml
<column gap="24px">
  <text>Select up to 3 photos:</text>
  <grid 
    columns="repeat(3, 1fr)" 
    gap="16px"
    selectionMode="multiple"
    maxSelections="3"
  >
    <repeat source="photos">
      <box selectable="true">
        <image bind="url"/>
      </box>
    </repeat>
  </grid>
  
  <text>Select one category:</text>
  <column 
    gap="8px"
    selectionMode="single"
  >
    <repeat source="categories">
      <box selectable="true">
        <text bind="name"/>
      </box>
    </repeat>
  </column>
</column>
```

## 🧩 AI Interpretation Guidelines
- Add appropriate selection state management
- Generate selection event handlers
- Apply selectedClass to selected items
- Handle selection constraints (maxSelections)
- Manage selection mode (single/multiple)
- Support keyboard navigation and accessibility
- Handle nested selection contexts
---