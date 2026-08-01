---
title: "How do you handle dynamic forms and validation in React?"
type: scenario
difficulty: intermediate
tags: [forms, validation, react-hook-form, dynamic-fields]
lastUpdated: 2026-08-01
---

Dynamic forms add/remove fields based on user input (e.g. multiple addresses).

**Approaches**

- **Controlled fields** in state array; map to inputs with stable `key` per row.
- **Libraries** — React Hook Form + Zod/Yup schema; `useFieldArray` for repeating sections.
- Validate on blur/submit; show field-level errors from schema parse.

```jsx
const { register, control, handleSubmit } = useForm();
const { fields, append, remove } = useFieldArray({ control, name: "items" });
```

**Rule of thumb**

- Schema validation on server too — client validation is UX, not security.
