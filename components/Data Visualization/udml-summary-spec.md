# `<summary>` Component

The `<summary>` component presents a high-level overview of key data, often using bold numbers or simple metrics.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Label or heading for the metric |
| `value` | string | Yes | Displayed summary value |
| `description` | string | No | Optional secondary text |
| `icon` | string | No | Optional decorative icon |
| `variant` | string | No | `neutral`, `positive`, `negative`, `warning` |

## ✅ Allowed Content
Self-closing or may contain layout overrides.

## 💡 Examples
**KPI box**
```xml
<summary title="Revenue" value="$24.6K" description="+12% from last week" icon="bar-chart"/>
```

## 🧩 AI Interpretation Guidelines
- Display `title` and `value` prominently with `description` as secondary.
- Use `icon` and `variant` to indicate significance or trend.
- Use in dashboards, reports, or header widgets.
---