---
name: add-extra-practice
description: Create or update multi-unit extra-practice review packs in the `essential-english-grammar` project. Use when the user asks to add additional practice, review packs, mixed revision, or content inspired by the book's Additional exercises section; this skill maps book coverage to original `ReviewPack` content under `src/data/review-packs/` without copying the source material.
---

# Add Extra Practice

Create original multi-unit extra practice for the `essential-english-grammar` app by adding or updating a `ReviewPack`.

## Workflow

### 1. Resolve the scope

- If the user says `next`, choose the next review pack automatically instead of asking for unit numbers.
- For `next`, prefer running `bun run review-pack:next --json` inside the repo if that helper exists.
- If the helper is unavailable, read `references/markdown/additional-exercises/README.md`, `src/data/review-packs/index.ts`, and the existing pack files and apply the fallback rules below.
- Expand coverage labels into explicit unit lists whenever the label is contiguous, for example:
  - `Units 3–4` -> `[3, 4]`
  - `Units 10–12` -> `[10, 11, 12]`
  - `Unit 9` -> `[9]`
- Ignore mixed non-contiguous labels such as `Units 1–2, 5–7, 9` when choosing `next`; prefer a clean contiguous pack first.
- Skip a candidate if:
  - a review pack already exists for the same `coversUnits`
  - one or more units in that range do not exist yet in `src/data/units/index.ts`
- Choose the first remaining contiguous candidate in the order shown in `references/markdown/additional-exercises/README.md`.
- Announce the chosen scope before writing files. With the current repo state, `next` should normally pick `Units 3–4` because `Units 1–2` is already covered.
- If the user gives explicit units or a topic, use that instead of auto-selection.

### 2. Build context

- Read `CLAUDE.md` and `AGENTS.md`.
- Read `UNITS.md` if the request is phrased by topic instead of unit numbers.
- Read `src/types/unit.ts`, `src/data/review-packs/index.ts`, and one existing pack such as `src/data/review-packs/reviewPack1to2.ts`.
- Read `src/components/ReviewPage.tsx`, `src/components/UnitPage.tsx`, and `src/context/LanguageContext.tsx` only if the task may require new UI strings or routing changes.
- Read `references/markdown/additional-exercises/README.md` plus only the relevant `page-XXX.md` files for the requested range.
- Read the covered `src/data/units/unitN.ts` files to align the pack with the existing progression and terminology.

### 3. Resolve the pack scope

- Convert the request into a concrete pack scope: title, covered units, and main grammar contrasts.
- Use `coverageLabel` for the UI label shown on cards and unit pages.
- Fill `coversUnits` with explicit unit numbers; these numbers drive related links from unit pages.
- If the request is still too vague after applying the `next` rules, ask one short clarification question.
- Treat the book's Additional exercises as editorial evidence of scope and difficulty only.

### 4. Write or update the pack

- Create `src/data/review-packs/reviewPackXtoY.ts` for a new pack, or update the matching existing file.
- Export a `ReviewPack` object.
- Prefer a 5-6 step flow:
  1. `theory` for the review map
  2. `examples` for contrasts or common mistakes
  3. `practice` for a mixed fill-blank round
  4. `practice` or `examples` for a second mixed round
  5. `quiz`
  6. `summary`
- Keep every user-facing field bilingual with `en` and `ru`.
- Keep theory accurate in meaning, but rewrite it from scratch.
- Write fresh examples, prompts, quiz options, and explanations.
- Use `altAnswers` whenever more than one answer should be accepted.
- Keep `highlight` as a literal substring of `english`.
- Use only `<b>` and `<em>` inside `explanation` and `points`.
- Use stable question ids with a pack prefix such as `rp34-p1` and `rp34-q1`.

### 5. Register the pack

- Add the pack to `src/data/review-packs/index.ts`.
- Do not create fake `unitN` files for extra practice.
- Rely on `coverageLabel` and `coversUnits` so the existing home page, sidebar, and related pack links pick up the new pack automatically.
- Touch UI files only if the current review-pack infrastructure cannot represent the new content.

### 6. Verify

- Run `bun run build`.
- Fix TypeScript or Vite issues before finishing.
- Report the pack id, covered units, Additional exercises pages consulted, and any content assumptions.
- Do not commit unless the user explicitly asks.

## Content Rules

- Never copy or closely paraphrase the book's explanations, exercise wording, answer order, answer key, images, audio, or page layout.
- Expect one Additional exercises page to cover several different unit ranges.
- Prefer original mixed practice that blends the covered units instead of reconstructing the book page by page.
- Match the app's existing tone and difficulty.
- Reuse the existing `ReviewPack` architecture and `Step[]` model; add a new step type only if the UI genuinely needs it.
- When selecting `next`, prefer the smallest uncovered contiguous range before broader cumulative ranges such as `Units 3–20`.
