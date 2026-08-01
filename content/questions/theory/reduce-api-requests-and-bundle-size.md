---
title: "How do you reduce API requests and bundle size?"
type: scenario
difficulty: intermediate
tags: [bundle-size, api, caching, performance]
lastUpdated: 2026-08-01
---

**Fewer API requests**

- Batch endpoints; GraphQL or aggregated REST resources.
- Client cache (React Query) with stale times; HTTP caching and ETags.
- Debounce search; pagination instead of loading entire datasets.
- Server Components / SSR to fetch on server in one round trip.

**Smaller bundles**

- Route-based code splitting and dynamic `import()`.
- Tree-shaking friendly imports (`import debounce from 'lodash/debounce'`).
- Analyze with `@next/bundle-analyzer` or webpack-bundle-analyzer.
- Replace heavy libraries; load charts/editors lazily.
- Ship less client JS with RSC and static server rendering.

**Rule of thumb**

- Measure bundle with analyzer; measure network with DevTools — fix the largest slice first.
