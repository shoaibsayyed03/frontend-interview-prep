---
title: "What is an Execution Context in JavaScript?"
type: conceptual
difficulty: intermediate
tags: [execution-context, hoisting, this, call-stack]
lastUpdated: 2026-08-01
---

An execution context is an environment where JavaScript code is evaluated and executed. It contains information about variables, functions, the scope chain, and the value of the `this` keyword.

## Global Execution Context (GEC)

When you run any JavaScript program, the first execution context created is the Global Execution Context. All the global code that is not inside a function or object will be executed inside this global execution context. Since the JavaScript engine is single-threaded, there will be only one global environment and one global execution context.

It has two phases:

**1. Creation phase (memory creation / hoisting)**

- The JS engine sets up memory before executing code.
- All **variables** declared with `var` are hoisted and initialized to `undefined`.
- All **variables** declared with `let` and `const` are also hoisted, but they stay in the Temporal Dead Zone (TDZ) until the line of initialization is executed.
- All **functions** (function declarations) are hoisted with their full definitions.
- A **global object** is created: `window` in browsers, `global` in Node.js.
- The special `this` keyword is set to `window` (in browsers, non–strict mode) or `undefined` (in strict mode).

**2. Execution phase**

- Code runs line by line, and variables get assigned their actual values.

## Function Execution Context (FEC)

Whenever a function is invoked, the JavaScript engine creates a new execution context for that function on top of the Global Execution Context to evaluate and execute the code within that function.

**Must watch:** [Detailed explanation by Akshay Saini — Namaste JavaScript Ep. 1](https://youtu.be/ZvbzSrg0afE?si=yEE3VhZARbAQhxRI)
