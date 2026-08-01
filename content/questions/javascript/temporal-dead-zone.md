---
title: "What is Temporal Dead Zone (TDZ)?"
type: conceptual
difficulty: intermediate
tags: [tdz, let, const, hoisting]
lastUpdated: 2026-08-01
---

The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted and when it is initialized in code. During this time, accessing the variable will throw a `ReferenceError`, even though the variable technically exists in memory. It prevents the use of variables before their intended declaration, making code more predictable compared to `var`.
