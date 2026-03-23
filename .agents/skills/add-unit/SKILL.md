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
- Read `references/catalog/README.md` and `references/catalog/units/unit-NNN.md` for the matching unit if they exist.
- Use the unit catalog entry to find the real EPUB HTML source pages under `references/EPUB/OEBPS/html/`, then inspect those HTML files when theory accuracy or page structure matters.
- When reading the exercises HTML, inspect hidden answer/example blocks too. The EPUB may embed acceptable answers in the same file instead of providing a separate keys page.
- Read `references/catalog/additional-exercises/page-XXX.md` only when the unit catalog entry points to relevant Additional exercises pages.
- Read nearby units only when needed for continuity, contrast, or `nextUnit` wording.

### 3. Write or update the unit

- Create or update `src/data/units/unitN.ts`.
- Export a `Unit` object.
- Prefer a clear progression such as:
  1. `theory`
  2. `examples`
  3. `theory` or `examples`
  4. one or more `practice` steps
  5. `quiz`
  6. `summary`
- Do not compress distinct source exercise modes into one blurred practice step when the book clearly separates them. If the source distinguishes fixed-answer work, example-answer work, and `true sentences, positive or negative`, reflect that distinction in the app structure too.
- Keep every user-facing field bilingual with `en` and `ru`.
- Keep theory accurate in meaning to Murphy, but rewrite it from scratch.
- Write fresh examples, practice prompts, quiz options, explanations, and summary points.
- Use `altAnswers` whenever more than one answer should be accepted.
- If the source exercise is truth-based, marked `positive or negative`, or shows only example answers, do not flatten it into a fake single-answer task by accident. Either redesign it as original bounded practice, or keep multiple acceptable variants explicit in the app copy and answer data.
- Do not let translations, hints, or explanations force one polarity when the task is intentionally open-ended.
- For open personal/example-answer prompts, do not default to "any non-empty text". If the source prompt gives a structural cue such as `My ...`, `I ...`, or `My favourite colour ...`, add `answerMode: 'example'` together with `acceptedPatterns` so the app checks the required sentence frame while still allowing personal content.
- In `answerMode: 'example'`, treat `correctAnswer` / `altAnswers` as model answers shown on demand, not as the only valid response.
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
- Use the real EPUB HTML pages as the primary editorial reference for scope and correctness.
- Use `references/catalog/` only as a navigation/index layer into those source pages.
- Treat embedded answer blocks and example answers in the EPUB as part of the editorial source. They can show that a task has several acceptable answers or no single fixed answer.
- Additional exercises may confirm difficulty and topic coverage for the unit, but should not be transcribed into the app.
- Match the app's existing structure and tone.
- Reuse the existing `Unit` and `Step[]` architecture; add a new step type only if the UI genuinely requires a new interaction.
