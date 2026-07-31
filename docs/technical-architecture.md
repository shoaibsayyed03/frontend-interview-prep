# Technical Architecture
## Frontend Interview Prep

**Last updated:** July 31, 2026

---

## 1. Tech Stack

- **Framework:** Next.js (React) — SEO-friendly rendering for question content, file-based routing.
- **Styling:** Tailwind CSS
- **Component library:** shadcn/ui (Radix primitives + Tailwind) — Button, Badge, Select, Collapsible, Input, Command (for search)
- **Fonts:** `Lexend` (headings/titles) + `Geist` (body/UI text), loaded via `next/font`

---

## 2. Color Palette

Dark theme. All values are shadcn/Tailwind-compatible hex tokens.

### Base / Surface

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#09090B` | Page background (near-black) |
| `--surface-1` | `#111113` | Nav bar / filter bar background (barely lighter than page bg) |
| `--surface-2` | `#18181B` | Filter dropdowns, email pill, badge backgrounds |
| `--surface-3` | `#1F1F23` | Default tag/badge background (e.g. "Figma", "GitHub") |
| `--border` | `#27272A` | Hairline dividers between list rows, dropdown borders |
| `--border-subtle` | `#1F1F23` | Faint separators (company logo strip, etc.) |

### Text

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#FAFAFA` | Headings, question titles, primary content |
| `--text-secondary` | `#A1A1AA` | Sub-labels, meta text (e.g. topic name under a question) |
| `--text-muted` | `#71717A` | Placeholder text, disabled states, footer copy |

### Accent (brand)

| Token | Hex | Usage |
|---|---|---|
| `--accent` | `#A3E635` | Primary accent — "remote"-style highlighted word, primary CTA button bg, active filter state |
| `--accent-foreground` | `#0A0F02` | Text/icon color sitting on top of `--accent` (near-black, for contrast) |
| `--accent-muted-bg` | `#1A2E05` | Badge background when badge text is accent-green (e.g. "Featured" tag, salary-style highlight) |
| `--accent-muted-text` | `#A3E635` | Text color used on `--accent-muted-bg` |

### Semantic (optional, for MCQ feedback)

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#4ADE80` | Correct MCQ answer feedback |
| `--destructive` | `#F87171` | Incorrect MCQ answer feedback |

---

## 3. Typography

| Role | Font | Weight | Size (desktop) | Notes |
|---|---|---|---|---|
| Hero H1 | Lexend | 600 | 48px / 1.1 | e.g. "Find your next **frontend** answer" — accent word in `--accent` |
| Section H2 | Lexend | 600 | 28px / 1.2 | Topic page headers |
| Card / Question title | Lexend | 500 | 18–20px / 1.4 | The question itself, bold-ish but not as heavy as hero |
| Body / Answer text | Geist | 400 | 15–16px / 1.6 | Optimized for readability during revision |
| Meta / Labels | Geist | 500 | 13px / 1.4 | Topic name, difficulty label, filter dropdown labels |
| Small / Badge text | Geist | 500 | 12px / 1.2 | Tag pills, counts |
| Nav links | Geist | 500 | 14px | |

Load both via `next/font/google`:
```ts
import { Lexend, Geist } from 'next/font/google'
const lexend = Lexend({ subsets: ['latin'], variable: '--font-heading' })
const geist = Geist({ subsets: ['latin'], variable: '--font-body' })
```
Tailwind config maps `font-heading` → Lexend, `font-sans` (default body) → Geist.

---


## 4. Spacing & Layout Rules

### Grid / Container
- Max content width: `1280px`, centered (`mx-auto`)
- Outer horizontal padding: `32px` desktop, `16px` mobile
- Nav bar height: `72px`, `border-b border-border`, sticky top

### Vertical rhythm
| Section | Top padding | Notes |
|---|---|---|
| Hero | `80px` desktop / `48px` mobile | Stat pill → H1 (`16px` gap) → subtext (`16px` gap) |
| Filter bar | `32px`, `border-b border-border` below it | Horizontal row, `gap-3` between each dropdown, wraps to multiple lines on mobile |
| Results count | `24px` above the list | e.g. `"142 questions found"` — bold count + muted label |
| List rows | Each row: `py-6`, full-width `border-b border-border` | No gap between rows — the hairline *is* the gap |

### Row anatomy (per question item)
```

[Question — Lexend 18–20px bold]
[Answer preview — Geist 15px, line-clamped]
[See more ⌄]  ← toggles to full answer + "See less ⌃"
[tag row: Topic tag | Question Type tag | Difficulty tag | (MCQ tag if applicable)]
```
- Spacing inside a row: `12px` between title block and answer text, `8px` between answer and toggle, `12px` between toggle and tag row.
- Row hover state: very subtle background lift (`hover:bg-surface-1`), no border/shadow change — signals interactivity without implying navigation to a new page.

### Responsive breakpoints
- `≥1024px`: filter bar single row, all dropdowns visible
- `640–1023px`: filter bar wraps to 2 rows
- `<640px`: filter bar collapses into a single "Filters" button opening a bottom sheet (`Sheet` component); question rows stack full-width, avatar/icon hidden or shrunk

---

## 6. Content Display Pattern — No Detail Pages

Per product requirement: **questions and answers render inline in the list — there is no separate detail page to navigate to and back from.**

### Behavior
- Each question renders as: **Question (title)** → **Answer (body)**, directly beneath it, in the same list row.
- If an answer exceeds a set length (e.g. ~4 lines / ~280 characters), it is truncated with a CSS line-clamp and a **"See more"** toggle appears.
- Clicking **"See more"** expands the answer in place (no route change, no scroll jump) and the toggle becomes **"See less"**.
- Multiple rows can be expanded simultaneously — this is not an accordion that closes others. A user scanning several questions should be able to open a few answers at once without losing their place.
- Expand state is local component state (`useState<boolean>` per row, or a single `Set<questionId>` at list level) — **not persisted or routed**, so there is nothing to navigate "back" from.

### Why this matters for the UI
- Eliminates the click-in → read → click-back loop entirely — the core UX complaint this product is meant to solve.
- Supports the "quick revision" goal: a user can rapid-fire expand/collapse many answers while scanning a filtered list (e.g. all "Tricky Questions" in JavaScript) without ever leaving that list.

### Implementation sketch
```tsx
<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <p className={cn("text-body", !isOpen && "line-clamp-4")}>
    {answer}
  </p>
  <CollapsibleTrigger className="text-accent text-sm font-medium mt-2">
    {isOpen ? "See less ⌃" : "See more ⌄"}
  </CollapsibleTrigger>
</Collapsible>
```

### Trade-off worth flagging
Removing per-question detail pages means there's no unique URL per question to deep-link, share, or let search engines index individually — which cuts against SEO being one of the app's own content topics. If discoverability matters, consider a lightweight middle ground later: an anchor-based URL (`/javascript#what-is-a-closure`) that scrolls to and auto-expands the right row on load, without introducing a real "page" or a back-navigation loop.

---

## 7. Page Structure (mapped from the reference screenshot)

1. **Top Nav** — Logo (title font, Lexend) · Star on GitHub button
2. **Hero** — Stat pill ("X questions across Y topics") · H1 with accent-colored keyword · one-line subtext
3. **Filter bar** — Topic · Question Type · Difficulty · Keyword search · sticky on scroll
4. **Results count** — "`142` questions found"
5. **Question list** — flat, hairline-separated rows per §5/§6, infinite scroll or paginated (recommend simple pagination or "Load more" button for v1 — avoids infinite-scroll complexity)

---

## 8. Open Items for Design Review
- Decide default expand behavior for MCQ-type items — likely a different interaction (select an option, then reveal correct answer) rather than the see more/less pattern, since MCQs need graded feedback (`--success` / `--destructive` tokens above are reserved for this).