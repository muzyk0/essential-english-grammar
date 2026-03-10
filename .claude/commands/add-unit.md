Add a new unit to the Essential Grammar in Use interactive app.

## Step 0 — Resolve the unit number

Read `UNITS.md` first.

- If `$ARGUMENTS` is `next`:
  - Prefer running `bun run unit:next --json` and use its result directly.
  - If the helper is unavailable, find the **first row** where Status is `stub` or `—`, use that unit number.
  - Announce: "Next unit to add: Unit N — Topic".
- Otherwise: use `$ARGUMENTS` as the unit number directly.

Call the resolved number **N** for the rest of this prompt.

---

## Step 1 — Read context files

Read these files before writing any code:
- `CLAUDE.md` — architecture rules
- `AGENTS.md` — repo-specific workflow rules
- `UNITS.md` — source of truth for unit order and status
- `src/types/unit.ts` — TypeScript types (must conform exactly)
- `src/data/units/unit1.ts` — reference implementation (depth and structure to match)
- `src/data/units/index.ts` — where to register the new unit
- `references/markdown/unit-NNN.md` for the matching book unit, if it exists
- `references/markdown/additional-exercises/README.md` and any related `page-XXX.md` files that mention Unit N, if they exist

---

## Step 2 — Write the unit file

Create or update `src/data/units/unitN.ts` (replace N with the actual number):

```typescript
import type { Unit } from '../../types/unit';

const unitN: Unit = {
  id: 'unitN',
  number: N,
  title: { en: '...', ru: '...' },
  description: { en: '...', ru: '...' },
  steps: [ /* 6 steps */ ],
};

export default unitN;
```

**Required 6 steps in order:**

| # | type | left page | right page |
|---|------|-----------|------------|
| 1 | `theory` | Main grammar rule + form table | 7–9 examples with `highlight` and `russian` |
| 2 | `examples` | Secondary rule or contrast + table | 7–9 examples |
| 3 | `theory` | Third aspect (questions, contractions, usage) + table | Examples |
| 4 | `practice` | Quick-reference table (key rows from steps 1–3) | 6 fill-blank questions with `explanation` |
| 5 | `quiz` | — | 5 multiple-choice questions with `explanation` |
| 6 | `summary` | — | 6 bullet `points` (key rules) + `nextUnit` |

**Content rules:**
- Every step: both `en` and `ru` for ALL fields (titles, explanations, table headers/rows, notes, items, questions, options, explanations, points).
- Theory must be accurate in grammar meaning to Murphy's unit, but all user-facing explanation text must be rewritten from scratch. Do not copy or closely paraphrase the book's wording sentence-by-sentence.
- Examples may teach the same rule, but should be newly authored whenever possible rather than copied from the book.
- Practice, quiz, and summary content must be original. Do not reproduce the book's exercise wording, answer order, answer keys, or example sets 1:1.
- Additional exercises may cover multiple units. Use them only to verify scope and difficulty; do not transcribe them directly into the app.
- Never copy the book's images, audio, page artwork, or fixed-layout structure into app content.
- `explanation` / `points` may use `<b>` and `<em>` tags only.
- `highlight` must be a literal substring of the `english` string.
- Practice `correctAnswer` must match exactly what the user types (include contractions: `'m`, `'re`, `isn't`, etc.).
- Quiz `correctIndex` is 0-based.
- Question ids unique within unit: `pN-1`, `qN-1`, etc.

---

## Step 3 — Register the unit

Edit `src/data/units/index.ts`:
- Add `import unitN from './unitN';`
- Add `unitN` to the array at the correct position

---

## Step 4 — Update UNITS.md

Edit `UNITS.md`: find the row for Unit N and change its Status cell to `done`.

---

## Step 5 — Build check

Run `bun run build`. Fix any TypeScript errors before continuing.

---

## Step 6 — Report

Print a short summary:
- Unit number and topic
- How many steps created
- UNITS.md updated: what the new status row looks like
- Any grammar points where you were uncertain about Murphy's book content

Do not commit unless the user explicitly asks.
