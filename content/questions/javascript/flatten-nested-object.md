---
title: "How would you flatten a deeply nested object into key-value paths?"
type: coding
difficulty: intermediate
tags: [recursion, objects, interview]
lastUpdated: 2026-08-01
---

Walk keys recursively; build dot/bracket paths for leaf values.

```js
function flattenObject(obj, prefix = "", out = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenObject(value, path, out);
    } else {
      out[path] = value;
    }
  }
  return out;
}
```

Handle arrays per spec (index segments vs skip). Common interview follow-up: unflatten back to nested form.

**Rule of thumb**

- Define behavior for `null`, arrays, and circular refs before coding (`WeakSet` for cycles).
