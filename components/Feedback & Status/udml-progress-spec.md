# `<progress>` Component

The `<progress>` component displays a visual indication of task or operation completion, linear or circular.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | number | Yes | Current progress value (0–100) |
| `type` | string | No | `linear` (default) or `circular` |
| `label` | string | No | Optional text label (e.g. 'Uploading...') |
| `size` | string | No | `sm`, `md`, `lg` (used for circular) |

## ✅ Allowed Content
Self-closing only.

## 💡 Examples
**Linear progress**
```xml
<progress value="66" label="Uploading..."/>
```

## 🧩 AI Interpretation Guidelines
- Render as progress bar or spinner depending on `type`.
- Bind `value` as percentage of completion.
- Show `label` adjacent or inside the progress indicator.
---