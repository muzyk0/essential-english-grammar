---
name: review-content
description: QA and, by default, fix a specified grammar unit in the `essential-english-grammar` project. Use when the user asks to check, align, correct, polish, audit, or QA a unit such as `$review-content 14` or `$review-content 15` after it has been created under `src/data/units/unitN.ts`. If the user explicitly targets a review-pack file, support that as a secondary path. Use review-only mode only when the user explicitly asks for findings without edits.
---

# Review Content

Review one existing `Unit` and correct mismatches in place unless the user explicitly asks for a findings-only review.

Treat `$review-content <unit N>` as the QA and check stage after creating `src/data/units/unitN.ts`. This is a repo authoring workflow, not a runtime app feature and not review-pack generation.

## Workflow

### 1. Resolve the target and mode

- If the user names a unit number such as `14` or a label such as `unit14`, use `src/data/units/unitN.ts`.
- If the user gives a direct path to a unit file, use it.
- If the user explicitly gives a review-pack file path, use that as a secondary path.
- If the user gives no target, inspect the changed files and continue only when exactly one changed `src/data/units/unitN.ts` file is obvious.
- Default to `fix` mode. Switch to `review-only` mode only when the user explicitly asks for findings without edits.
- Announce the resolved target and mode before editing.
- If the target is still ambiguous, ask one short clarification question.

### 2. Build context

- Read `CLAUDE.md`, `AGENTS.md`, and `src/types/unit.ts`.
- For a unit task, read:
  - the target `src/data/units/unitN.ts`
  - `src/data/units/index.ts`
  - `UNITS.md`
  - `references/catalog/README.md`
  - `references/catalog/units/unit-NNN.md`
  - the real EPUB HTML theory and exercises pages referenced by that catalog entry
- Follow the repo's current QA path: `references/catalog/units/unit-NNN.md` -> linked EPUB HTML under `references/EPUB/OEBPS/html/` -> `src/data/units/unitN.ts` -> `src/data/units/index.ts`.
- In exercise HTML, inspect hidden answer and example blocks as well as the visible prompt text. The EPUB may encode acceptable answers inline rather than on a separate keys page.
- Record the visible exercise design too: rubric wording, exercise boundaries, worked examples, cue format, word banks, picture prompts, and subsection headings. These details often determine how strict the app validation should be.
- Treat `references/catalog/` as navigation metadata only. Do not expect full lesson reconstructions there.
- Read nearby app units only when they help preserve continuity, terminology, or contrast selection.
- For an explicitly targeted review-pack path, read the matching review-pack index and relevant catalog pages needed for that pack.

### 3. Compare the existing content against the source

- Start from the written unit already in the repo. Preserve good material instead of rewriting blindly.
- Verify theory first. The meaning, contrasts, forms, and usage notes should match the book unit as closely as possible while staying in original wording.
- Use the exercises page to confirm what learners should practise, but do not copy the tasks, answer order, or sample wording.
- Distinguish between fixed-answer tasks, tasks with several acceptable answers, and tasks that only provide example answers. Do not assume every exercise has one canonical solution.
- Check whether the app kept the source task shape honest. A picture exercise should still feel like a picture exercise; a bounded truth-sentence task should still be bounded; a personal example-answer task should not degrade into arbitrary free text.
- Check for:
  - factual grammar mismatches
  - missing or misleading contrasts
  - content that is too close to the book's wording or examples
  - open-ended source tasks that were flattened into misleading single-answer app items
  - missing bilingual fields
  - broken `highlight`, `correctIndex`, ids, or HTML tags
  - missing `altAnswers` where more than one form should be accepted
  - missing registration or status updates in `src/data/units/index.ts` and `UNITS.md`

### 4. Fix the content

- In `fix` mode, edit the target file directly.
- Prefer targeted corrections over full rewrites. Rewrite a whole step only when the current version cannot be repaired cleanly.
- Keep the existing `Unit` architecture unless it is structurally wrong.
- For theory:
  - maximise semantic accuracy to the book
  - rewrite in original wording
  - keep `en` and `ru` versions aligned in meaning
- For examples, practice, quiz, and summary:
  - keep them original
  - keep them inside the same grammar point and difficulty range
- If the source shows several acceptable answers or only example answers, preserve that openness explicitly in the app content or redesign the task into bounded original practice. Do not present it as though the book had a single fixed answer when it does not.
- When the source exercise types are clearly separated, keep that separation in the app too instead of mixing fixed-answer, example-answer, picture, cue-based, and true-sentence work into one undifferentiated practice block.
- For open personal or example-answer prompts, prefer `answerMode: 'example'` plus `acceptedPatterns` so the app validates the sentence frame while keeping the content open.
- For bounded-open tasks, prefer strict bounded validation over loose free text.
- Maintain data invariants:
  - every user-facing field has both `en` and `ru`
  - `highlight` is a literal substring of `english`
  - `correctIndex` is 0-based
  - ids remain unique and as stable as possible
  - `altAnswers` exist when multiple answers should reasonably be accepted
  - `explanation` and `points` use only `<b>` and `<em>`
- If the same task also requires fixing the shared practice model or UI so the source task can be represented honestly, make that code change instead of leaving a content-level workaround in place.

### 5. Verify

- Run `bun run build` unless the user explicitly says not to.
- Run any targeted `bun test ...` commands needed for files changed during the QA pass.
- Treat build failures caused by the edited files as blocking.
- If the source material is ambiguous, note the ambiguity and the interpretation you used.

### 6. Report

- In `fix` mode, summarise what was corrected in `src/data/units/unitN.ts` and which references were checked.
- In `review-only` mode, present findings first, ordered by severity.
- Include concrete file references whenever possible.
- Mention whether `src/data/units/index.ts` or `UNITS.md` also changed.
- Note residual risks or open questions if they matter.
- Do not commit unless the user explicitly asks.

## Editorial Rules

- Use the local EPUB HTML pages as the source of truth for correctness and scope.
- Use `references/catalog/` only as an index into those pages.
- Keep theory maximally accurate to the book's intended meaning, but never copy or closely paraphrase the book's wording, examples, tables, answer order, or layout.
- Exercises may differ and often should differ, but the source exercise mode and validation logic should still be preserved as closely as possible.
- Treat Additional exercises as coverage and difficulty evidence, not as a script to reproduce.
