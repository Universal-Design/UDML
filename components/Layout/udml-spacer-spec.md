# `<spacer>`

The `<spacer>` component adds flexible or fixed whitespace between elements. It may grow, shrink, or push content in flex layouts.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `size` | string | No | Fixed spacing size (e.g., `md`, `32px`) |
| `grow` | boolean | No | If true, spacer flexes to fill space |

## ✅ Allowed Content
Standalone only, typically inside layouts.

## 💡 Examples
**Fixed spacer**
```xml
<spacer size="lg"/>
```

**Flexible push spacer**
```xml
<spacer grow="true"/>
```

## 🧩 AI Interpretation Guidelines
- Use to push or pad content within flex/stack layouts.
- Map to margin utilities or flex-grow depending on intent.
---
