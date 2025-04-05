# `<list>` Component

The `<list>` component renders a vertical or horizontal list of repeated items.

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | `vertical` or `horizontal` |
| `gap` | string | No | Spacing between list items |
| `data` | string | No | Data binding or reference to an iterable |

## 💡 Examples
**Vertical List**
```xml
<list><listItem>One</listItem><listItem>Two</listItem></list>
```

**Bound List**
```xml
<list data="{{ users }}"><listItem>{{ user.name }}</listItem></list>
```