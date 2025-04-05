# `<series>` Component

The `<series>` component configures a specific data series to show in a chart, used for multi-series charts.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Label or ID for the series |
| `dataKey` | string | Yes | Field to use from the dataset |
| `color` | string | No | Optional color override |

## ✅ Allowed Content
Self-closing only, inside `<chart>`.

## 💡 Examples
**Multiple lines**
```xml
<series name="North" dataKey="northSales" color="#3366ff"/>
```

## 🧩 AI Interpretation Guidelines
- Loop over each `<series>` and render with label and color.
- Support legends, tooltips, and differentiation of visual styles.
- If only one series exists, it may be implied from `yKey`.
---