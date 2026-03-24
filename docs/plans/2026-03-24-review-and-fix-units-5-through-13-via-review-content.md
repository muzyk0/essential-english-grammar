---
# Review and Fix Units 5 Through 13 via $review-content

## Overview
Review `unit5` through `unit13` sequentially by invoking `$review-content unitN` one unit at a time. Use `references/catalog/` only to locate the right EPUB pages, treat the EPUB HTML as the source of truth, preserve good existing material, and fix only confirmed mismatches in content accuracy, bilingual completeness, validation strictness, and exercise-shape honesty.

## Context
- Files involved: `.agents/skills/review-content/SKILL.md`, `AGENTS.md`, `CLAUDE.md`, `src/types/unit.ts`, `src/components/steps/PracticeStep.tsx`, `src/components/steps/StepRenderer.tsx`, `src/data/units/index.ts`, `UNITS.md`, `references/catalog/README.md`
- Unit targets: `src/data/units/unit5.ts` through `src/data/units/unit13.ts`
- Catalog inputs: `references/catalog/units/unit-005.md` through `references/catalog/units/unit-013.md`
- EPUB inputs: `references/EPUB/OEBPS/html/ESSB01U005P001.html` through `references/EPUB/OEBPS/html/ESSB01U013P002.html`
- Related patterns: bilingual inline unit content, `PracticeContent.sections`, `PracticeQuestion.altAnswers`, `PracticeQuestion.answerMode`, `PracticeQuestion.acceptedPatterns`, and registration order in `src/data/units/index.ts`
- Dependencies: local EPUB HTML references and the Bun build pipeline
- Constraint: no dedicated automated test suite exists, so `bun run build` is the blocking validation step after each task

## Development Approach
- Testing approach: Regular, with targeted fixes followed by `bun run build`
- Complete each unit fully before starting the next one
- Start every unit task with `$review-content unitN` in fix mode and follow the skill read order: `AGENTS.md`, `CLAUDE.md`, `src/types/unit.ts`, the target unit file, `src/data/units/index.ts`, `UNITS.md`, `references/catalog/README.md`, the matching catalog entry, and the referenced EPUB HTML pages
- Use `references/catalog/` only as navigation metadata; use the EPUB HTML theory and exercise pages, including hidden answer/example blocks, as the editorial source of truth
- Preserve correct existing material and fix only confirmed mismatches in theory, examples, practice, quiz, summary, translations, validation strictness, `altAnswers`, and structural honesty
- Use related additional-exercise catalog pages only when they help confirm scope or difficulty
- If any reviewed unit exposes a representation gap, update `src/types/unit.ts`, `src/components/steps/PracticeStep.tsx`, and `src/components/steps/StepRenderer.tsx` inside that same task before continuing
- Leave `src/data/units/index.ts` and `UNITS.md` unchanged unless a review proves they are wrong

## Implementation Steps

### Task 1: Review and Fix Unit 5

Files:
- Modify: `src/data/units/unit5.ts`
- Review: `references/catalog/units/unit-005.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U005P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U005P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [x] Invoke `$review-content unit5` in fix mode and follow the required review-content read order.
- [x] Compare the current unit against the source focus areas: present simple positive forms, third-person `-s/-es`, `have -> has`, picture-based sentence building, controlled completion, and word-order practice built from prompts.
- [x] Preserve good existing material and fix only confirmed mismatches in theory, examples, practice, quiz, summary, translations, validation strictness, `altAnswers`, and structural honesty.
- [x] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [x] Run `bun run build` before moving to unit 6.

### Task 2: Review and Fix Unit 6

Files:
- Modify: `src/data/units/unit6.ts`
- Review: `references/catalog/units/unit-006.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U006P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U006P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [x] Invoke `$review-content unit6` in fix mode and follow the required review-content read order.
- [x] Compare the current unit against the source focus areas: `don't` versus `doesn't`, base-form verbs after `doesn't`, negative rewriting, the likes/dislikes matrix task, bounded self-statements, negative completion, and mixed positive-or-negative verb forms.
- [x] Preserve good existing material and fix only confirmed mismatches in explanations, examples, translations, validation strictness, acceptable variants, and section boundaries.
- [x] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [x] Run `bun run build` before moving to unit 7.

### Task 3: Review and Fix Unit 7

Files:
- Modify: `src/data/units/unit7.ts`
- Review: `references/catalog/units/unit-007.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U007P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U007P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [x] Invoke `$review-content unit7` in fix mode and follow the required review-content read order.
- [x] Compare the current unit against the source focus areas: `do/does` question formation, subject-auxiliary-verb word order, yes/no prompts built from statements, reordered wh-questions, and completed question frames from a verb bank.
- [x] Preserve correct material and fix only confirmed mismatches in theory, examples, practice structure, quiz correctness, translations, and validation strictness.
- [x] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [x] Run `bun run build` before moving to unit 8.

### Task 4: Review and Fix Unit 8

Files:
- Modify: `src/data/units/unit8.ts`
- Review: `references/catalog/units/unit-008.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U008P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U008P002.html`
- Modify if needed: `src/types/unit.ts`
- Modify if needed: `src/components/steps/PracticeStep.tsx`
- Modify if needed: `src/components/steps/StepRenderer.tsx`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [x] Invoke `$review-content unit8` in fix mode and follow the required review-content read order.
- [x] Compare the current unit against the source focus areas: present continuous for now, present simple for general facts and routines, picture-based `Does he ... ? / Is he ... ? / What is he doing?` contrasts, mixed auxiliary selection, and mixed tense choice.
- [x] Preserve correct material and fix only confirmed mismatches in contrast framing, theory accuracy, translations, validation strictness, and exercise structure.
- [x] If the current model cannot represent a source task honestly, make the required shared type or renderer change inside this task before finalizing the unit. (No shared model change was needed.)
- [x] Run `bun run build` before moving to unit 9.

### Task 5: Review and Fix Unit 9

Files:
- Modify: `src/data/units/unit9.ts`
- Review: `references/catalog/units/unit-009.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U009P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U009P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [x] Invoke `$review-content unit9` in fix mode and follow the required review-content read order.
- [x] Compare the current unit against the source focus areas: `have` versus `have got`, equivalent negative and question forms, conversion drills in both directions, profile-building from question/answer cues, personal possession statements, and mixed `have/has/don't have/doesn't have` work.
- [x] Preserve good existing material and fix only confirmed mismatches in theory, examples, practice, quiz, summary, translations, contraction handling, `altAnswers`, and validation strictness.
- [x] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [x] Run `bun run build` before moving to unit 10.

### Task 6: Review and Fix Unit 10

Files:
- Modify: `src/data/units/unit10.ts`
- Review: `references/catalog/units/unit-010.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U010P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U010P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [ ] Invoke `$review-content unit10` in fix mode and follow the required review-content read order.
- [ ] Compare the current unit against the source focus areas: `was/were` as the past of `am/is/are`, picture-based location prompts, present-versus-past `be` selection, positive/negative completion with `was/were/wasn't/weren't`, and reordered `was/were` questions.
- [ ] Preserve correct material and fix only confirmed mismatches in grammar framing, examples, translations, validation strictness, and exercise-type honesty.
- [ ] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [ ] Run `bun run build` before moving to unit 11.

### Task 7: Review and Fix Unit 11

Files:
- Modify: `src/data/units/unit11.ts`
- Review: `references/catalog/units/unit-011.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U011P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U011P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [ ] Invoke `$review-content unit11` in fix mode and follow the required review-content read order.
- [ ] Compare the current unit against the source focus areas: regular versus irregular past simple, spelling changes, verb-box completion, listing past forms, the Madrid journey narrative, and rewriting routine statements as past events.
- [ ] Preserve correct material and fix only confirmed mismatches in theory, examples, exercise coverage, translations, validation strictness, and separation between regular, irregular, and narrative practice.
- [ ] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [ ] Run `bun run build` before moving to unit 12.

### Task 8: Review and Fix Unit 12

Files:
- Modify: `src/data/units/unit12.ts`
- Review: `references/catalog/units/unit-012.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U012P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U012P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [ ] Invoke `$review-content unit12` in fix mode and follow the required review-content read order.
- [ ] Compare the current unit against the source focus areas: `didn't` and `Did ... ?`, base-form verbs after `did/didn't`, negative completion, mirrored `Did you ... ?` prompts, bounded personal past statements, and cue-based B questions.
- [ ] Preserve correct material and fix only confirmed mismatches in grammar notes, example coverage, translations, `answerMode: 'example'`, `acceptedPatterns`, `altAnswers`, and exercise structure.
- [ ] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [ ] Run `bun run build` before moving to unit 13.

### Task 9: Review and Fix Unit 13

Files:
- Modify: `src/data/units/unit13.ts`
- Review: `references/catalog/units/unit-013.md`
- Review: `references/EPUB/OEBPS/html/ESSB01U013P001.html`
- Review: `references/EPUB/OEBPS/html/ESSB01U013P002.html`
- Modify if needed: `src/data/units/index.ts`
- Modify if needed: `UNITS.md`

- [ ] Invoke `$review-content unit13` in fix mode, treat it as the current latest unit in the repo, and follow the required review-content read order.
- [ ] Compare the current unit against the source focus areas: `was/were + -ing`, actions in progress at a past time, paired location-and-action picture answers, Sarah’s timed morning timeline, `was/were -ing` questions with `what/where/why`, and positive-or-negative picture descriptions.
- [ ] Preserve correct material and fix only confirmed mismatches in theory, examples, practice structure, quiz, summary, translations, validation strictness, and source-faithful handling of paired-output and picture-based tasks.
- [ ] Update `src/data/units/index.ts` or `UNITS.md` only if the review proves a real registration or status issue.
- [ ] Run `bun run build` before moving to final verification.

### Task 10: Final Verification

Files:
- Verify: `src/data/units/index.ts`
- Verify: `UNITS.md`
- Verify: `src/data/units/unit5.ts`
- Verify: `src/data/units/unit6.ts`
- Verify: `src/data/units/unit7.ts`
- Verify: `src/data/units/unit8.ts`
- Verify: `src/data/units/unit9.ts`
- Verify: `src/data/units/unit10.ts`
- Verify: `src/data/units/unit11.ts`
- Verify: `src/data/units/unit12.ts`
- Verify: `src/data/units/unit13.ts`

- [ ] Run `bun run build` after all nine unit reviews are complete.
- [ ] Confirm units 5 through 13 remain registered correctly and in order in `src/data/units/index.ts`.
- [ ] Confirm `unit13` is still the latest unit entry in the repo and that `UNITS.md` still matches the reviewed unit set.
- [ ] Record any remaining source ambiguities or shared follow-up work discovered during the build and registration check.
---
