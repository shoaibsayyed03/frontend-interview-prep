---
title: "Server Actions vs client requests — when to use which?"
type: scenario
difficulty: intermediate
tags: [nextjs, server-actions, mutations, forms]
lastUpdated: 2026-08-01
---

**Server Actions** (`"use server"`) run mutations on the server, callable from forms and client components without hand-written REST endpoints. Good for form posts, auth-gated mutations, and keeping secrets off the client.

**Client-side fetch** (`fetch`, React Query) fits public APIs, rich client caching, optimistic UI, and non-Next backends.

**Examples**

- Update user profile form on same stack → Server Action + revalidatePath.
- Real-time dashboard polling external API → client fetch + React Query.
- Payment with third-party SDK → client or dedicated API route, not arbitrary server action without design review.

**Rule of thumb**

- Prefer Server Actions for same-origin mutations tied to Next cache revalidation; use client libraries for complex client cache graphs.
