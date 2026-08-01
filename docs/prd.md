# Product Requirements Document
## Frontend Interview Prep

**Last updated:** August 1, 2026

---

## 1. Overview

Frontend Interview Prep is a web application that consolidates frontend interview questions, answers, and explanations into a single, well-organized, searchable library. Instead of hunting across scattered notes, GitHub repos, blog posts, and forum threads, a candidate can come to one place, browse by topic or question type, and get plain-language answers written for learning rather than as link dumps.

**One-line pitch:** The single, tidy home for every frontend interview question and answer you'll ever need — organized, searchable, and written to actually teach you.

---

## 2. Problem Statement

Frontend interview preparation material today is:

- **Fragmented** — spread across personal notes, scattered blog posts, GitHub repos, and social media threads.
- **Duplicated** — the same questions ("what is a closure?", "explain the virtual DOM") are rewritten hundreds of times at inconsistent quality.
- **Hard to search** — no consistent taxonomy by topic, question type, or difficulty.
- **Poorly suited for cramming** — much of it is written as reference documentation or curated link-lists, not as answers optimized for fast revision the night before an interview.

This creates real friction and anxiety for candidates in the final days before an interview, and wastes time for anyone maintaining their own scattered "prep notes."

---

## 3. Target Users

### Primary persona: "The Active Job Seeker"
- Frontend/full-stack developer (0–6 YOE) actively interviewing.
- Needs fast, confident revision — often within days of an interview.
- Wants credible, correct answers without wading through 15 tabs.

### Secondary persona: "The Long-Term Learner"
- Developer strengthening fundamentals over weeks/months, not urgently interviewing.
- Wants structured browsing, progress tracking, and depth (not just cram answers).

### Tertiary persona: "The Interviewer"
- Engineers/hiring managers looking for well-vetted questions (with model answers) to use when interviewing candidates.

---

## 4. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Become the go-to single source for frontend interview prep | Weekly active users; returning-user rate |
| Enable fast pre-interview revision | Median session length under 15 min for "revision mode" sessions; % of sessions using search/filter |
| Build a durable, high-quality content library | Number of published Q&As; content freshness (% reviewed in last 6 months) |

---

## 5. Scope

### Product scope (north star)
- Structured content library of Q&As across defined topics.
- Browse, search, and filter by topic, question type, difficulty, and keyword.
- Inline reading on a single list — no per-question detail pages or back-navigation loop.

### Shipped in v1 (current codebase)
- **Single homepage** (`/`) with hero, sticky filter bar, and a flat question list.
- **Markdown content pipeline** (Velite): questions live under `content/questions/{topic}/{slug}.md`, validated at build time.
- **Filters synced to the URL**: `topic`, `type`, `difficulty`, and `q` (keyword). Shareable filtered views; no full page reload when filters change.
- **Keyword search** (300ms debounce): matches **question title and tags** (not full answer body yet).
- **Standard Q&A rows**: title + rendered markdown answer, **2-line clamp** when long, expand/collapse in place (multiple rows can stay open).
- **MCQ rows**: optional prompt body, selectable options, immediate correct/incorrect styling, explanation after answer (UI ready; MCQ markdown files can be added under the same schema).
- **Responsive filter UX**: desktop inline dropdowns + search; mobile search + **Filters** dialog (bottom sheet pattern).
- **Dark theme** UI with shadcn/Radix components.

### Not in v1 (planned / backlog)
- Per-topic landing routes (e.g. `/javascript`).
- Full-text search across answer bodies.
- Results count line (e.g. "142 questions found").
- Pagination or virtualized infinite scroll (all matching rows render today).
- Display of `lastUpdated` in the UI (field exists in content schema only).
- Per-question URLs / deep links / SEO for individual questions.
- Analytics on search and browse behavior.
- Progress tracking, accounts, or contributor workflows.

---

## 6. Content Taxonomy

Content is organized along two independent axes so users can filter by either or both. Folder slugs and filter values are defined in `lib/content-taxonomy.ts` and enforced by Velite.

**By topic** (`content/questions/{topic}/…`):

| Slug | Label |
|---|---|
| `javascript` | JavaScript |
| `react` | React |
| `theory` | Frontend Theory |
| `seo` | SEO |
| `system-design` | System Design |
| `dsa` | Coding / DSA |

**By question type** (frontmatter `type`):

| Value | Label |
|---|---|
| `conceptual` | Conceptual |
| `tricky` | Tricky |
| `scenario` | Scenario |
| `mcq` | MCQ |
| `coding` | Coding |
| `system-design` | System Design |

**Difficulty:** `beginner` | `intermediate` | `advanced`

**Tags:** freeform string array in frontmatter; shown as badges and included in keyword search.

**Required frontmatter (all items):** `title`, `type`, `difficulty`, `tags`, `lastUpdated`, and markdown `body`.

**MCQ-only fields:** `options` (array of `{ id, text }`), `correctOptionId`, optional `explanation`.

Each built item gets a stable id `{topic}-{slug}` (slug from filename).

---

## 7. Core Features

| # | Feature | Status | Description |
|---|---|---|---|
| M1 | **Content library** | Shipped | Markdown questions compiled to typed JSON via Velite; loaded on the server for the homepage. |
| M2 | **Browse by topic** | Partial | Filter by topic on the homepage + URL param; dedicated topic pages not built. |
| M3 | **Browse by question type** | Shipped | Filter by type (and difficulty) on homepage + URL. |
| M4 | **Keyword search** | Partial | Debounced search on title + tags; URL param `q`; answer body not indexed. |
| M5 | **MCQ quick checks** | Shipped (UI) | Interactive options with success/destructive feedback; content can use `type: mcq`. |
| M6 | **Coding-style DSA section** | Content | Same inline list UX as other types; type `coding` in taxonomy. |
| M7 | **System design explainers** | Content | Same inline list UX; type `system-design` in taxonomy. |
| M8 | **Responsive web UI** | Shipped | Desktop filter row; mobile filters dialog; readable typography for long answers. |
| M9 | **Content freshness** | Schema only | `lastUpdated` required in markdown; not shown in UI yet. |
| M10 | **Search analytics** | Not started | Internal prioritization; no instrumentation in app. |

---

## 8. User Journey (v1)

1. User opens the homepage → sees hero stats (total questions × topics with content) and the filter bar.
2. User sets **topic**, **question type**, and/or **difficulty** via dropdowns (or opens **Filters** on mobile).
3. User types in **search**; after a short debounce, the list and URL update.
4. User scans the list: for normal Q&As, clicks the row (or uses keyboard) to **See more** / **See less**; for MCQs, picks an option and reads the explanation.
5. User adjusts filters without leaving the page; expanded rows stay local to the session (not in the URL).

---

## 9. Non-Functional Requirements

- **Performance:** Static generation of the homepage; client-side filtering over the in-memory question set. Acceptable for low hundreds of items; revisit pagination/virtualization as the library grows.
- **Accessibility:** Keyboard-expandable rows when clamped; labeled search and filter controls; Radix primitives for dialog/popover/collapsible. Full WCAG audit not claimed for v1.
- **Scalability:** Content model supports hundreds of questions; duplicate ids and invalid topics fail the Velite strict build.

---

## 10. Content Strategy Notes

- Every answer should be written as if explaining to a peer — plain language, short paragraphs, code examples where useful, no unnecessary jargon.
- Avoid "list of resources" style; each question should be self-contained enough that a user doesn't need to click away to understand it.
- Maintain a consistent internal style guide (answer length, tone, code formatting) so quality doesn't degrade as the library scales, especially once community contributions are introduced.

---

## END
