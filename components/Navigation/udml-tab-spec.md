# `<tab>` Component

The `<tab>` component defines an individual tab within a `<tabs>` container, including its label and content.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique ID used to identify and activate the tab |
| `label` | string | Yes | Label displayed on the tab header |
| `disabled` | boolean | No | Disables interaction with this tab |

## ✅ Allowed Content
Any content components or layouts.

## 💡 Examples
**Tab item**
```xml
<tab id="profile" label="Profile">Profile content here</tab>
```

## 🧩 AI Interpretation Guidelines
- Render tab button with `label` and link it to the panel via `id`.
- Hide tab content unless active.
- Disable selection if `disabled` is true.
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
