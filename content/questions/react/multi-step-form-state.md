---
title: "How would you implement state management for a multi-step form in React?"
type: scenario
difficulty: intermediate
tags: [forms, wizard, validation, state-management]
lastUpdated: 2026-08-01
---

**Single source of truth** for all steps — one object (or React Hook Form instance) so data survives back/next navigation.

```jsx
const steps = ["profile", "address", "review"];
const [step, setStep] = useState(0);
const [values, setValues] = useState(initialValues);
const [errors, setErrors] = useState({});

async function goNext() {
  const stepErrors = await validateStep(steps[step], values);
  if (Object.keys(stepErrors).length) {
    setErrors(stepErrors);
    return;
  }
  setErrors({});
  setStep((s) => Math.min(s + 1, steps.length - 1));
}
```

**Patterns**

- **React Hook Form + Zod** — one `useForm({ defaultValues })`; validate only active step fields on Next.
- **Context or Zustand** — when steps are deep in the tree; persist to `sessionStorage` for refresh safety.
- **URL step** — `?step=2` for shareable wizard state (optional).

**Navigation:** Disable Next until step valid; Back preserves `values`; Review step is read-only summary before submit.

**Rule of thumb**

- Never unmount earlier steps if you need their data — hide with CSS or keep one form; remounting loses dirty state unless lifted.
