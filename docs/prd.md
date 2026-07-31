# Product Requirements Document
## Frontend Interview Prep

**Last updated:** July 31, 2026

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

- Structured content library of Q&As across defined topics.
- Browse, search, and filter by topic, question type, and keyword.

---

## 6. Content Taxonomy

Content is organized along two independent axes so users can filter by either or both:

**By Topic:**
- JavaScript (language & runtime fundamentals)
- React (or framework-agnostic + React-specific split)
- Frontend theory (browser, rendering, performance, accessibility)
- SEO
- System design (frontend-specific: component architecture, state management at scale, design systems)
- Coding-style / DSA (frontend-flavored: array/string problems, algorithmic thinking)

**By Question Type:**
- Conceptual Q&A (short, direct explanations)
- Tricky/gotcha questions (common misconceptions)
- Scenario-based ("what would you do if...")
- Multiple-choice quick-checks (self-testing)
- Coding problems (with walkthroughs)
- System design explainers (longer-form, structured)

Each content item should carry metadata: topic, question type, difficulty (Beginner/Intermediate/Advanced), and tags (freeform keywords) to power search and filtering.

---

## 7. Core Features

| # | Feature | Description |
|---|---|---|
| M1 | **Content Library** | Structured repository of questions, each with a plain-language answer. Core data model: Question, Answer, Topic, Type, Difficulty, Tags. |
| M2 | **Browse by Topic** | Landing pages per topic (e.g., "JavaScript") listing all questions under it, with sub-filtering by type/difficulty. |
| M3 | **Browse by Question Type** | Ability to filter/browse across all topics by type (e.g., "show me all Scenario questions"). |
| M4 | **Keyword Search** | Full-text search across questions, answers, and tags with instant/typeahead results. |
| M5 | **Multiple-Choice Quick Checks** | Interactive MCQ format for self-testing, with immediate correct/incorrect feedback and explanation. |
| M6 | **Coding-Style DSA Section** | Problem statement, approach explanation, and solution walkthrough (not just a code dump). |
| M7 | **System Design Explainers** | Longer-form structured content: problem framing, trade-offs, example solution structure. |
| M8 | **Responsive Web UI** | Fully usable on desktop and mobile browsers — revision often happens on the go. |
| M9 | **Content Freshness/Versioning** | Each item shows last-updated date so users trust the content is current. |
| M10 | **Basic Site Search Analytics** | Track what's searched/browsed most, to guide content prioritization (internal, not user-facing). |

---

## 8. User Journey

1. User lands on homepage → selects a topic (e.g., React) or searches a keyword.
2. Browses list, filtered by type (e.g., "Tricky Questions") and/or difficulty.
3. Reads answers quickly.
4. Optionally takes an MCQ quick-check to self-test.

---

## 9. Non-Functional Requirements

- **Performance:** Page should load in under 1–2 seconds; search results should return near-instantly (sub-300ms perceived).
- **Accessibility:** WCAG 2.1 AA baseline — keyboard navigable, screen-reader friendly, sufficient color contrast.
- **Scalability:** Content model should support hundreds to low-thousands of questions without needing an architecture rework.

---

## 10. Content Strategy Notes

- Every answer should be written as if explaining to a peer — plain language, short paragraphs, code examples where useful, no unnecessary jargon.
- Avoid "list of resources" style; each question should be self-contained enough that a user doesn't need to click away to understand it.
- Maintain a consistent internal style guide (answer length, tone, code formatting) so quality doesn't degrade as the library scales, especially once community contributions are introduced.

---

## END