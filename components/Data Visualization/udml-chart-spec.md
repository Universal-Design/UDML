# `<chart>` Component

The `<chart>` component renders a visual data representation such as a bar chart, line chart, or pie chart.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | `bar`, `line`, `area`, `pie`, `donut`, `scatter` |
| `bind` | string | Yes | Path to the dataset |
| `xKey` | string | No | Field to use for x-axis values (for Cartesian charts) |
| `yKey` | string | No | Field to use for y-axis values |
| `title` | string | No | Optional chart title |
| `legend` | boolean | No | Whether to show a legend |

## ✅ Allowed Content
Self-closing or may contain `<axis>`, `<series>`, and `<legend>` overrides.

## 💡 Examples
**Bar chart**
```xml
<chart type="bar" bind="salesData" xKey="month" yKey="revenue" title="Monthly Sales" legend="true"/>
```

## 🧩 AI Interpretation Guidelines
- Render based on `type`, and use `bind` for dataset.
- If `xKey`/`yKey` are provided, map fields accordingly.
- Auto-generate axes, series, and legends unless overridden.
---