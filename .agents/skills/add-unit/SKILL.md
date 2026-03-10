---
name: add-unit
description: Create or update a grammar unit in the `essential-english-grammar` project. Use when the user asks to add a specific unit, add the next unit, complete a stub unit, or turn a book unit into the app's bilingual `Unit` format under `src/data/units/` with original theory, examples, practice, quiz, and summary content.
---

# Add Unit

Create or update one full grammar unit for the `essential-english-grammar` app.

## Workflow

### 1. Resolve the unit number

- If the user says `next`, prefer running `bun run unit:next --json` inside the repo.
- If the helper is unavailable, read `UNITS.md` and choose the first row whose status is `stub` or `—`.
- If the user provides a number, use that unit directly.
- Announce the resolved unit before writing files.

### 2. Build context

- Read `CLAUDE.md`, `AGENTS.md`, and `UNITS.md`.
- Read `src/types/unit.ts`, `src/data/units/index.ts`, and one strong reference unit such as `src/data/units/unit1.ts`.
- Read `references/markdown/unit-NNN.md` for the matching unit if it exists.
- Read `references/markdown/additional-exercises/README.md` plus only the relevant `page-XXX.md` files that mention the unit, if they exist.
- Read nearby units only when needed for continuity, contrast, or `nextUnit` wording.

### 3. Write or update the unit

- Create or update `src/data/units/unitN.ts`.
- Export a `Unit` object.
- Use the standard 6-step flow:
  1. `theory`
  2. `examples`
  3. `theory`
  4. `practice`
  5. `quiz`
  6. `summary`
- Keep every user-facing field bilingual with `en` and `ru`.
- Keep theory accurate in meaning to Murphy, but rewrite it from scratch.
- Write fresh examples, practice prompts, quiz options, explanations, and summary points.
- Use `altAnswers` whenever more than one answer should be accepted.
- Keep `highlight` as a literal substring of `english`.
- Use only `<b>` and `<em>` inside `explanation` and `points`.
- Use stable ids such as `p14-1` and `q14-1`.

### 4. Register the unit

- Add the import to `src/data/units/index.ts`.
- Insert the unit into the exported array in numeric order.
- Update the corresponding row in `UNITS.md` to `done`.

### 5. Verify

- Run `bun run build`.
- Fix any TypeScript or Vite issues before finishing.
- Report the resolved unit number, references consulted, and any content assumptions.
- Do not commit unless the user explicitly asks.

## Content Rules

- Never copy or closely paraphrase the book's explanations, tables, examples, exercise wording, answer order, answer key, images, audio, or layout.
- Use the book and markdown exports only as editorial references for scope and correctness.
- Additional exercises may confirm difficulty and topic coverage for the unit, but should not be transcribed into the app.
- Match the app's existing structure and tone.
- Reuse the existing `Unit` and `Step[]` architecture; add a new step type only if the UI genuinely requires a new interaction.
