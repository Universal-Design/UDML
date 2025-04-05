# `<formGroup>` Component

The `<formGroup>` component groups related fields together visually and semantically. It is typically used to organize input fields into sections.
---

## 🛠 Attributes
| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | Optional heading or label for the group |
| `description` | string | No | Helper or contextual description text |
| `ai-hint` | string | No | Clarifies the purpose of the field group |

## ✅ Allowed Content
Any input or layout elements.

## 💡 Examples
**Grouped fields**
```xml
<formGroup label="Billing Address">...</formGroup>
```

## 🧩 AI Interpretation Guidelines
- Use to structure the form into semantic or visual sections.
- Render label and description as headings or help text.
- Optionally wrap group in a semantic section or fieldset.
---