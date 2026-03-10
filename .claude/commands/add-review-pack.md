Add a new review pack / extra-practice pack to the Essential Grammar in Use interactive app.

## Step 0 — Resolve the pack scope

Read `CLAUDE.md`, `AGENTS.md`, `src/data/review-packs/index.ts`, and `references/markdown/additional-exercises/README.md` first.

- If `$ARGUMENTS` is `next`:
  - Prefer running `bun run review-pack:next --json` and use its result directly.
  - If the helper is unavailable, fall back to the manual rules below.
  - Inspect existing review packs and collect their `coversUnits`.
  - Inspect `references/markdown/additional-exercises/README.md` in listed order.
  - Expand only simple contiguous labels:
    - `Unit N` -> `[N]`
    - `Units A–B` -> `[A, A+1, ..., B]`
  - Ignore mixed non-contiguous labels like `Units 1–2, 5–7, 9` for automatic selection.
  - Skip any candidate range that:
    - is already covered by an existing review pack
    - contains a unit that does not yet exist in `src/data/units/index.ts`
  - Choose the **first remaining contiguous candidate** from the Additional exercises index.
  - Announce: "Next review pack to add: Units X–Y — <focus>"
- Otherwise:
  - Use `$ARGUMENTS` as the requested scope directly. It may be a range (`3-4`, `10-12`) or a topic if the relevant units can be inferred safely.

Call the resolved unit list **COVERED_UNITS** for the rest of this prompt.

---

## Step 1 — Read context files

Read these files before writing any code:
- `CLAUDE.md`
- `AGENTS.md`
- `src/types/unit.ts`
- `src/data/review-packs/index.ts`
- one existing pack such as `src/data/review-packs/reviewPack1to2.ts`
- `src/components/ReviewPage.tsx`
- `src/components/UnitPage.tsx`
- the relevant `src/data/units/unitN.ts` files for `COVERED_UNITS`
- `references/markdown/additional-exercises/README.md`
- the relevant `references/markdown/additional-exercises/page-XXX.md` files for the chosen range

---

## Step 2 — Write the review pack file

Create `src/data/review-packs/reviewPackXtoY.ts` with a `ReviewPack` export.

Use this shape:

```typescript
import type { ReviewPack } from '../../types/unit';

const reviewPackXtoY: ReviewPack = {
  id: 'review-pack-x-y',
  title: { en: '...', ru: '...' },
  description: { en: '...', ru: '...' },
  coverageLabel: { en: 'Units X-Y', ru: 'Юниты X-Y' },
  coversUnits: [X, Y],
  steps: [/* 5-6 steps */],
};

export default reviewPackXtoY;
```

Recommended step flow:
1. `theory` — review map / key forms
2. `examples` — contrasts or common errors
3. `practice` — mixed exercise set A
4. `practice` or `examples` — mixed exercise set B
5. `quiz`
6. `summary`

Content rules:
- Every user-facing field must have both `en` and `ru`.
- Review packs must be original app content, not a reconstruction of the book page.
- Use the selected Additional exercises pages only to confirm topic mix, scope, and difficulty.
- Do not copy wording, answer order, answer keys, examples, images, audio, or page layout from the book.
- Keep theory accurate in meaning, but rewrite it from scratch.
- Write fresh examples, fresh practice prompts, and fresh quiz distractors.
- Use `altAnswers` whenever multiple forms should be accepted.
- `highlight` must be a literal substring of `english`.
- `explanation` and `points` may use only `<b>` and `<em>`.
- Use stable ids like `rp34-p1`, `rp34-q1`.

---

## Step 3 — Register the pack

Edit `src/data/review-packs/index.ts`:
- Add the import
- Add the pack to the exported array

Do not create a fake `unitN` file for extra practice.

---

## Step 4 — Build check

Run `bun run build`. Fix any TypeScript errors before continuing.

---

## Step 5 — Report

Print a short summary:
- review pack id
- covered units
- which Additional exercises pages were used as references
- any assumptions made while resolving `next`
