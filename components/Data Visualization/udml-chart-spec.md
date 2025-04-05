# `<chart>` Component

The `<chart>` component creates data visualizations with clear configuration and data mapping.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Chart type (`bar`, `line`, `area`, `pie`, `donut`, `scatter`) |
| `title` | string | No | Chart title |
| `width` | string | No | Chart width (e.g., `100%`, `600px`) |
| `height` | string | No | Chart height (e.g., `400px`) |
| `theme` | string | No | Color theme (`light`, `dark`, `custom`) |

## Data Configuration
```xml
<chart type="bar">
  <!-- Data source configuration -->
  <data source="salesData">
    <!-- X-axis configuration -->
    <xAxis 
      field="month" 
      type="category"
      label="Month"
      format="MMM YYYY"
    />
    
    <!-- Y-axis configuration -->
    <yAxis 
      field="revenue" 
      type="number"
      label="Revenue"
      format="currency"
      currency="USD"
    />
    
    <!-- Series configuration -->
    <series 
      name="Revenue"
      type="bar"
      color="#3366FF"
      stack="true"
    />
    
    <!-- Additional series -->
    <series 
      name="Profit"
      field="profit"
      type="line"
      color="#00CC66"
    />
  </data>
  
  <!-- Chart customization -->
  <style>
    <grid show="true" color="#eee"/>
    <tooltip show="true" format="currency"/>
    <legend position="bottom" orientation="horizontal"/>
    <animation duration="500"/>
  </style>
</chart>
```

## Chart Types and Their Specific Configurations

### Bar Chart
```xml
<chart type="bar">
  <data source="salesData">
    <xAxis field="month" type="category"/>
    <yAxis field="revenue" type="number"/>
    <series name="Revenue" type="bar"/>
    <series name="Profit" type="bar" stack="true"/>
  </data>
  <style>
    <bar width="0.8"/>
    <spacing category="0.2"/>
  </style>
</chart>
```

### Line Chart
```xml
<chart type="line">
  <data source="trendData">
    <xAxis field="date" type="time"/>
    <yAxis field="value" type="number"/>
    <series name="Trend" type="line"/>
  </data>
  <style>
    <line width="2"/>
    <point radius="4"/>
    <area fill="true" opacity="0.2"/>
  </style>
</chart>
```

### Pie/Donut Chart
```xml
<chart type="donut">
  <data source="categoryData">
    <category field="name"/>
    <value field="amount"/>
  </data>
  <style>
    <innerRadius>0.6</innerRadius>
    <label show="true" format="percent"/>
  </style>
</chart>
```

## 🧩 AI Interpretation Guidelines
- Generate appropriate chart library initialization
- Map data fields to chart dimensions
- Apply styling and formatting
- Handle interactions and tooltips
- Support responsive sizing
- Implement accessibility features
- Generate appropriate legends and labels
---