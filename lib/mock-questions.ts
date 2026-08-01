export type QuestionItem = {
  id: string;
  question: string;
  answer: string;
  topic: string;
  tags: string[];
};

export const MOCK_QUESTIONS: QuestionItem[] = [
  {
    id: "closure-scope",
    topic: "JavaScript",
    question:
      "What is a closure, and why do interviewers keep asking about it?",
    answer:
      "A closure is when a function remembers variables from the scope where it was created, even after that outer function has finished running. In practice, any inner function that touches an outer variable forms a closure. Interviewers care because closures show up everywhere: event handlers, React hooks, debouncing, and module patterns. A classic gotcha is looping with `var` and creating functions in the loop — each closure captures the same mutable binding, so they all see the final value unless you use `let` or an IIFE. When you explain it, tie it to something concrete: a counter factory where the inner function closes over `count` and keeps it alive between calls.",
    tags: ["Scope", "Functions", "Memory"],
  },
  {
    id: "react-reconciliation",
    topic: "React",
    question:
      "How does React decide what to update in the DOM during a re-render?",
    answer:
      "React builds a description of the UI (elements, props, children) and compares the new description to the previous one. That diffing step is reconciliation: React walks the tree, matches by type and key, and figures out the smallest set of DOM changes. Keys matter for lists so React can tell items apart when order changes. Fiber lets React split work into units, pause, and resume — which is why concurrent features exist. You do not need to say “virtual DOM” as magic; say React compares trees and commits patches. Mention that unnecessary re-renders still cost work even if the DOM change is skipped, which is why memoization and state colocation help.",
    tags: ["Virtual DOM", "Reconciliation", "Fiber"],
  },
  {
    id: "event-loop-tricky",
    topic: "JavaScript",
    question:
      "In what order do `console.log` calls run in a snippet mixing sync code, microtasks, and macrotasks?",
    answer:
      "Sync code runs to completion first. Then the microtask queue drains (Promise callbacks, `queueMicrotask`, `MutationObserver`) before the next macrotask (`setTimeout`, `setInterval`, I/O). So: synchronous logs, then all microtasks in order, then one macrotask, then microtasks again, and so on. A common interview snippet stacks `setTimeout(0)`, `Promise.resolve().then`, and straight `console.log` — the sync line wins, then the Promise, then the timeout. `async/await` is sugar over Promises, so `await` boundaries enqueue microtasks too. If you can narrate one example from memory without guessing, you sound sharper than reciting a diagram.",
    tags: ["Event loop", "Promises", "setTimeout"],
  },
  {
    id: "a11y-button",
    topic: "Frontend Theory",
    question:
      "What makes a custom button accessible compared to a styled `<div>`?",
    answer:
      'Use a real `<button>` when you can — you get focus, Enter/Space activation, and disabled semantics for free. If you must use a div, add `role="button"`, `tabIndex={0}`, keyboard handlers for Enter and Space, and an accessible name (visible text or `aria-label`). Disabled divs are easy to get wrong; native buttons ignore clicks and drop out of the tab order with `disabled`. For icon-only controls, always label them. Interviewers want to hear that accessibility is default platform behavior first, ARIA second — not the other way around.',
    tags: ["Accessibility", "Keyboard", "ARIA"],
  },
];

export const ANSWER_CLAMP_CHARS = 280;
