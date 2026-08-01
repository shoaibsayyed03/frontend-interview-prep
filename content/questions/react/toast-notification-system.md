---
title: "How would you build a toast notification system with queuing and auto-dismiss?"
type: coding
difficulty: intermediate
tags: [toast, notifications, context, accessibility]
lastUpdated: 2026-08-01
---

**Store:** queue of toasts `{ id, message, variant, duration, priority }`. Push on enqueue; shift or filter on dismiss.

```jsx
const ToastContext = createContext(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((toast) => {
    setToasts((q) => [...q, { id: crypto.randomUUID(), ...toast }]);
  }, []);
  const dismiss = (id) =>
    setToasts((q) => q.filter((t) => t.id !== id));

  return (
    <ToastContext value={{ push, dismiss }}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext>
  );
}
```

**Queueing:** Cap visible count (e.g. 3); stack newest on top or FIFO. Priority toasts can jump the queue.

**a11y:** `role="status"` or `role="alert"` for errors; `aria-live="polite"` (assertive for errors); focus not stolen unless modal toast.

**Libraries:** Sonner, Radix Toast, react-hot-toast — same patterns.

**Rule of thumb**

- Context is enough for most apps; Redux only if notifications are driven by global async middleware everywhere.
