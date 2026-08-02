export const siteConfig = {
  name: "Frontend Interview Prep",
  /** Canonical production URL (no trailing slash). Used for metadataBase and sitemap. */
  url: "https://fe-interview-prep.vercel.app",
  description:
    "Searchable frontend interview questions and answers for JavaScript, React, the browser, performance, accessibility, SEO, system design, and DSA — written for fast revision before interviews.",
  /** Served from `public/og.png` (1200×630 recommended). */
  ogImage: "/og.png",
  keywords: [
    "frontend interview",
    "frontend interview questions",
    "javascript interview",
    "react interview",
    "web development interview",
    "system design frontend",
    "frontend SEO",
    "interview preparation",
  ],
  github: {
    url: "https://github.com/shoaibsayyed03/frontend-interview-prep",
    label: "Star on GitHub",
  },
  hero: {
    statLabel: "142 questions across 6 topics",
    titleBefore: "All your",
    titleAccent: "frontend",
    titleAfter: "interview questions in one place",
    subtitle:
      "Plain-language questions and answers for JavaScript, React, the browser, performance, accessibility, and more — searchable and written for fast revision.",
  },
} as const;
