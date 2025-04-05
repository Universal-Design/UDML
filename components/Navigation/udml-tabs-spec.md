# `<tabs>` Component

The `<tabs>` component groups content under multiple tabs. Use nested `<tab>` elements for each tab panel.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | string | No | The `id` of the currently selected tab |
| `align` | string | No | `start`, `center`, or `end` |
| `orientation` | string | No | `horizontal` (default) or `vertical` |

## ✅ Allowed Content
<tab> children only.

## 💡 Examples
**Horizontal tabs**
```xml
<tabs active="overview">
  <tab id="overview" label="Overview">...</tab>
  <tab id="settings" label="Settings">...</tab>
</tabs>
```

## 🧩 AI Interpretation Guidelines
- Render as tab list + tab panels.
- Match `active` to child tab `id`.
- Support keyboard navigation and accessibility roles.
---


**Tab structure clarification:**  
Each `<tab>` element should contain its associated content as nested children. Only the content of the `<tab>` with an `id` matching the parent `<tabs active="...">` value should be rendered or displayed.

**Example with nested content:**
```xml
<tabs active="profile">
  <tab id="overview" label="Overview">
    <text>This is the overview.</text>
  </tab>
  <tab id="profile" label="Profile">
    <form>
      <formField name="name" label="Name">
        <input type="text" bind="user.name"/>
      </formField>
    </form>
  </tab>
</tabs>
```
