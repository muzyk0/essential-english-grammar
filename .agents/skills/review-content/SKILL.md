---
name: review-content
description: Review and, by default, fix an existing unit or extra-practice review pack in the `essential-english-grammar` project. Use when the user asks to check, align, correct, polish, audit, QA, or bring `src/data/units/unitN.ts` or `src/data/review-packs/*.ts` into line with the local EPUB references, app structure, bilingual completeness, and originality rules. Use review-only mode only when the user explicitly asks for findings without edits.
---

# Review Content

Review one existing `Unit` or `ReviewPack`, compare it with the real book sources, and correct mismatches in place unless the user explicitly asks for a findings-only review.

## Workflow

### 1. Resolve the target and mode

- If the user names a unit number, use `src/data/units/unitN.ts`.
- If the user names a review pack id or file, use `src/data/review-packs/...`.
- If the user gives a file path, use it directly.
- If the user gives no target, inspect the changed files and use the target only when exactly one changed unit or review-pack file is obvious.
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
  - relevant `references/catalog/additional-exercises/page-XXX.md` files only if they help confirm scope or difficulty
- For a review-pack task, read:
  - the target `src/data/review-packs/...`
  - `src/data/review-packs/index.ts`
  - the covered unit files from `src/data/units/`
  - `references/catalog/README.md`
  - relevant `references/catalog/additional-exercises/page-XXX.md` files
  - the real EPUB HTML pages referenced by those catalog entries when scope or accuracy matters
- Treat `references/catalog/` as navigation metadata only. Do not expect generated markdown reconstructions of theory, examples, or exercises there.
- Sanity-check the catalog links against the requested unit or review-pack scope. If a linked HTML file looks inconsistent with the unit number, title, or topic, cross-check `references/catalog/README.md`, nearby catalog entries, and the EPUB filenames before trusting it.
- Read nearby app units or packs only when they help preserve continuity, terminology, or contrast selection.

### 3. Compare the existing content against the source

- Start from the written unit or review pack already in the repo. Preserve good material instead of rewriting blindly.
- For units, verify theory first. The meaning, contrasts, forms, and usage notes should match the book unit as closely as possible while staying in original wording.
- Use the exercises page to confirm what learners should practise, but do not copy the tasks, answer order, or sample wording.
- For review packs, allow the exercises to differ more freely. Verify unit coverage, grammar contrasts, level, and `coversUnits` / `coverageLabel` alignment rather than exact task mapping.
- Check for:
  - factual grammar mismatches
  - missing or misleading contrasts
  - invented rules not supported by the source unit
  - content that is too close to the book's wording or examples
  - missing bilingual fields
  - broken `highlight`, `correctIndex`, ids, or HTML tags
  - missing `altAnswers` where more than one form should be accepted

### 4. Fix the content

- In `fix` mode, edit the target file directly.
- Prefer targeted corrections over full rewrites. Rewrite a whole step only when the current version cannot be repaired cleanly.
- Keep the existing `Unit` / `ReviewPack` architecture unless it is structurally wrong.
- For theory:
  - maximise semantic accuracy to the book
  - rewrite in original wording
  - keep `en` and `ru` versions aligned in meaning
- For examples, practice, quiz, and summary:
  - keep them original
  - allow them to differ from the book's exact tasks
  - keep them inside the same grammar point and difficulty range
- Maintain data invariants:
  - every user-facing field has both `en` and `ru`
  - `highlight` is a literal substring of `english`
  - `correctIndex` is 0-based
  - ids remain unique and as stable as possible
  - `altAnswers` exist when multiple answers should reasonably be accepted
  - `explanation` and `points` use only `<b>` and `<em>`
- If the same task also requires fixing registration or `UNITS.md`, update those files too.

### 5. Verify

- Run `bun run build` unless the user explicitly says not to.
- Treat build failures caused by the edited files as blocking.
- If the source material is ambiguous, note the ambiguity and the interpretation you used.

### 6. Report

- In `fix` mode, summarise what was corrected and which references were checked.
- In `review-only` mode, present findings first, ordered by severity.
- Include concrete file and line references whenever possible.
- Mention residual risks or open questions if they matter.
- Do not commit unless the user explicitly asks.

## Editorial Rules

- Use the local EPUB HTML pages as the source of truth for correctness and scope.
- Use `references/catalog/` only as an index into those pages.
- Do not rely on old generated markdown breakdowns of unit parts. The catalog now exists to point at the right HTML sources.
- Keep theory maximally accurate to the book's intended meaning, but never copy or closely paraphrase the book's wording, examples, tables, answer order, or layout.
- Exercises may differ and often should differ; prioritise original practice over reconstruction.
- Treat Additional exercises as coverage and difficulty evidence, not as a script to reproduce.
