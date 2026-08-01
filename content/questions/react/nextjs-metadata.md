---
title: "Can you generate metadata in Next.js?"
type: conceptual
difficulty: beginner
tags: [nextjs, metadata, seo, generateMetadata]
lastUpdated: 2026-08-01
---

Yes. App Router supports static `export const metadata` or dynamic `generateMetadata` for title, description, Open Graph, Twitter cards, and robots.

```ts
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  return {
    title: product.name,
    description: product.summary,
    openGraph: { images: [product.image] },
  };
}
```

Pages Router uses `next/head` or `getServerSideProps` to inject tags.

**Rule of thumb**

- Dynamic SEO pages (product, blog) should use server-generated metadata, not client-only `useEffect` tags.
