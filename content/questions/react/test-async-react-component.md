---
title: "How do you test a React component that fetches async data?"
type: scenario
difficulty: intermediate
tags: [testing, react-testing-library, async, jest]
lastUpdated: 2026-08-01
---

**Unit/integration with RTL:** mock `fetch` or MSW (Mock Service Worker) to return fixtures; render component; `await screen.findByText(...)` for post-fetch UI.

```jsx
import { render, screen } from "@testing-library/react";

test("shows users after load", async () => {
  server.use(rest.get("/api/users", (req, res, ctx) =>
    res(ctx.json([{ name: "Ada" }]))
  ));
  render(<UserList />);
  expect(await screen.findByText("Ada")).toBeInTheDocument();
});
```

**What to assert:** loading skeleton → success content; error state on 500; empty state.

**Avoid:** testing implementation (hook call order); test user-visible outcomes.

**Rule of thumb**

- MSW over manual `global.fetch` mocks — closer to real HTTP and reusable across tests.
