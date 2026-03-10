---
name: review-content
description: Review a completed unit or extra-practice review pack in the `essential-english-grammar` project. Use when the user asks to review, audit, validate, or QA a `src/data/units/unitN.ts` file, a `src/data/review-packs/*.ts` file, or the corresponding content against app structure, bilingual completeness, markdown references, and originality rules.
---

# Review Content

Review one completed `Unit` or `ReviewPack` and report findings before any summaries.

## Workflow

### 1. Resolve the review target

- If the user names a unit number, review `src/data/units/unitN.ts`.
- If the user names a review pack id or file, review `src/data/review-packs/...`.
- If the user gives a file path, use it directly.
- If the user gives no target, inspect the changed files and use the target only when exactly one changed unit or review-pack file is obvious.
- If the target is still ambiguous, ask one short clarification question.

### 2. Build context

- Read `CLAUDE.md`, `AGENTS.md`, and `src/types/unit.ts`.
- For a unit review, read:
  - the target `src/data/units/unitN.ts`
  - `src/data/units/index.ts`
  - `UNITS.md`
  - `references/markdown/unit-NNN.md`
  - relevant `references/markdown/additional-exercises/page-XXX.md` files only if they help confirm scope or difficulty
- For a review-pack review, read:
  - the target `src/data/review-packs/...`
  - `src/data/review-packs/index.ts`
  - the covered unit files from `src/data/units/`
  - `references/markdown/additional-exercises/README.md`
  - relevant `references/markdown/additional-exercises/page-XXX.md` files

### 3. Review the content

- Check structure first:
  - correct `Unit` or `ReviewPack` shape
  - correct step order and expected step types
  - registration in the relevant `index.ts`
  - `UNITS.md` status update for units
- Check content integrity:
  - every user-facing field has both `en` and `ru`
  - `highlight` is a literal substring of `english`
  - `correctIndex` is 0-based
  - ids are unique and stable
  - `altAnswers` exist where more than one answer should reasonably be accepted
  - `explanation` and `points` use only `<b>` and `<em>`
- Check editorial alignment:
  - grammar meaning matches the reference unit or Additional exercises scope
  - difficulty and contrast selection are appropriate
  - content is original and not too close to the book's wording, examples, or answer order

### 4. Verify

- Run `bun run build` unless the user explicitly says not to.
- Treat build failures as findings when they are caused by the reviewed changes.

### 5. Report

- Present findings first, ordered by severity.
- Include concrete file and line references whenever possible.
- After findings, list open questions or assumptions if they matter.
- End with a short summary only after the findings.
- If there are no findings, say so explicitly and mention residual risks or testing gaps.
- Do not rewrite the content unless the user explicitly asks for fixes.

## Review Priorities

- Prioritize broken structure, missing bilingual fields, invalid answer handling, and wrong registration over stylistic issues.
- Flag content that is too close to the source book, especially copied examples, exercise wording, or answer keys.
- For review packs, verify that the chosen unit coverage actually matches `coversUnits` and `coverageLabel`.
