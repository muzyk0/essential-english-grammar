Review a completed unit or extra-practice review pack in the Essential Grammar in Use interactive app.

## Step 0 — Resolve the target

- If `$ARGUMENTS` names a unit number or `unitN`, review `src/data/units/unitN.ts`.
- If `$ARGUMENTS` names a review pack id, file name, or path, review that review-pack file.
- If `$ARGUMENTS` is empty:
  - inspect changed files
  - if exactly one changed `src/data/units/unitN.ts` or `src/data/review-packs/*.ts` file is obvious, use it
  - otherwise ask for an explicit target

Call the resolved file **TARGET_FILE** and its type **TARGET_KIND** (`unit` or `review-pack`).

---

## Step 1 — Read context files

Always read:
- `CLAUDE.md`
- `AGENTS.md`
- `src/types/unit.ts`
- `TARGET_FILE`

If `TARGET_KIND` is `unit`, also read:
- `src/data/units/index.ts`
- `UNITS.md`
- `references/markdown/unit-NNN.md`
- relevant `references/markdown/additional-exercises/page-XXX.md` files only if they help confirm scope or difficulty

If `TARGET_KIND` is `review-pack`, also read:
- `src/data/review-packs/index.ts`
- the covered unit files from `src/data/units/`
- `references/markdown/additional-exercises/README.md`
- relevant `references/markdown/additional-exercises/page-XXX.md` files

---

## Step 2 — Review checklist

Check structure:
- correct object shape (`Unit` or `ReviewPack`)
- correct step order and expected step types
- proper registration in the relevant `index.ts`
- `UNITS.md` updated for units

Check content integrity:
- all user-facing fields are bilingual (`en` and `ru`)
- `highlight` is a literal substring of `english`
- ids are unique
- `correctIndex` is 0-based
- `altAnswers` exist where multiple valid forms are expected
- `explanation` / `points` use only `<b>` and `<em>`

Check editorial fit:
- grammar meaning matches the relevant reference material
- difficulty and scope match the unit or pack coverage
- wording is original and not too close to the book

---

## Step 3 — Verify

Run `bun run build` unless the user explicitly says not to.

---

## Step 4 — Report

Report in review format:
- findings first, ordered by severity
- file and line references where possible
- open questions or assumptions after findings
- short summary last

If there are no findings, say so explicitly and mention any residual risks or testing gaps.

Do not fix the content unless the user explicitly asks for changes.
