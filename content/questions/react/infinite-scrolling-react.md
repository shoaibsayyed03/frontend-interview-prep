---
title: "How would you implement infinite scrolling in React?"
type: coding
difficulty: intermediate
tags: [infinite-scroll, pagination, intersection-observer, performance]
lastUpdated: 2026-08-01
---

**Trigger loads** when the user nears the end of the scroll container or page — `IntersectionObserver` on a sentinel node is cleaner than raw scroll listeners.

```jsx
function InfiniteList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["items"],
      queryFn: ({ pageParam = 0 }) => fetchPage(pageParam),
      getNextPageParam: (last) => last.nextCursor,
    });

  const sentinelRef = useRef(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasNextPage) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && fetchNextPage(),
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      {data.pages.flatMap((p) => p.items).map((item) => (
        <Row key={item.id} item={item} />
      ))}
      <div ref={sentinelRef} aria-hidden />
      {isFetchingNextPage ? <Spinner /> : null}
    </>
  );
}
```

**State:** page/cursor, `isLoading`, `isFetchingNextPage`, `hasNextPage`, append-only list (or virtualize if the merged list grows huge).

**Throttle/debounce:** Prefer observer + guard `if (isFetchingNextPage) return` over debouncing every scroll event. Debounce is for search, not scroll fetch triggers.

**Rule of thumb**

- TanStack Query `useInfiniteQuery` or SWR infinite helpers handle deduping and race conditions; pair with virtualization once item count exceeds a few hundred DOM nodes.
