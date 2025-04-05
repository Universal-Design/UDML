# <tabs> Component

The `<tabs>` component manages tabbed navigation with associated panels.
---

## 🛠 Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `defaultIndex` | int | No | Index of the tab selected by default |
| `onChange` | string | No | Handler for tab selection changes |

## 💡 Examples
**Simple Tabs**
```xml
<tabs><tab label="A"/><tab label="B"/></tabs>
```

**With Panels**
```xml
<tabs><tab label="Info"><text>Info panel</text></tab><tab label="Settings"><text>Settings panel</text></tab></tabs>
```

---