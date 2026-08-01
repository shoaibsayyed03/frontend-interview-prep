---
title: "What do [] + [], [] + {}, and {} + [] log?"
type: tricky
difficulty: intermediate
tags: [coercion, arrays, objects, operators]
lastUpdated: 2026-08-01
---

```js
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

**Outputs**

```txt
""
"[object Object]"
"[object Object]"
```

(In a standalone REPL, `{} + []` is sometimes discussed as `0` when `{}` is parsed as an empty **block** and `+[]` is unary plus — that is a **statement-boundary** parse trick, not what happens inside `console.log({} + [])`, where `{}` is an object literal in an addition expression.)

**Why**

- `+` with arrays/objects uses **ToPrimitive** → string coercion when either side is a string.
- `[] + []` → `"" + ""` → `""`.
- `[] + {}` → `"" + "[object Object]"`.
- `{} + []` → `"[object Object]" + ""`.

**Rule of thumb**

- For `+`, know **string coercion order**; for `{}`, know **expression vs statement** parsing.
