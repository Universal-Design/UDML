# `<switch>` Component

The `<switch>` component is a toggle switch (alternative to checkbox) used to represent binary on/off states.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | Descriptive label |
| `checked` | boolean | No | Initial toggle state |
| `bind` | string | No | Path to bound state |
| `disabled` | boolean | No | Disables interaction |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Notifications toggle**
```xml
<switch label="Enable notifications" bind="user.notificationsEnabled"/>
```

## 🧩 AI Interpretation Guidelines
- Render using a toggle UI element with clear labels.
- Map to state hook or form field if `bind` is present.
- Ensure accessible labels and state sync.
---