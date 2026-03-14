# Roadmap

A practical development plan for `essential-english-grammar` so the project keeps moving in the right direction, important decisions are not forgotten, and the content model is not standardized too early.

---

## 1. Current project state

The project is currently in a transition phase between an MVP and a proper content system.

What already exists:
- the app builds successfully and passes lint;
- content is stored in TypeScript (`src/data/units/*.ts`, `src/data/review-packs/*.ts`);
- the app structure already supports units, steps, and review packs;
- some content is written manually, while some is still rough AI-generated draft material;
- local book references have not yet been added to the project, but they will later live in `references/` (which remains in `.gitignore`).

What matters at this stage:
- there will eventually be many units;
- the earliest units do not represent the full complexity of the future content model;
- later units may require more nuanced explanations, richer practice, and more varied step design;
- because of that, the final template should not be based only on the earliest and simplest units.

---

## 2. Core decisions

### 2.1. Stay with TypeScript for now

**Content stays in TypeScript for now.**

Reasons:
- the content structure is fairly complex and nested;
- strong shape validation is useful during active development;
- it is convenient to rely on `Unit`, `Step`, and `Translated<T>` types;
- right now it is more important to bring the content to a reliable working state than to migrate storage formats.

What that means in practice:
- **do not do an early migration to JSON, YAML, or a database**;
- first build up a strong, reliable set of units;
- only after that decide whether a separate content layer is actually needed.

### 2.2. Use the first 14 units as the stabilization range

The earlier idea was to use 4 exemplar units as the baseline. For this project, a more realistic and useful approach is to use **the first 14 units** as the stabilization range.

Why 14 is better:
- the earliest units are too simple and do not expose the full needs of the structure;
- the 1–14 range is large enough to show where the current pattern works and where it starts to break down;
- it becomes easier to see which fields are consistently necessary and which ones were incidental;
- any documentation and template created after those 14 units will be much more trustworthy and practical.

### 2.3. Ready content and AI drafts must not be mixed without status labels

One of the most important short-term goals is to stop treating all existing content as if it had the same level of quality.

A clear unit status system is required.

---

## 3. Main goal of the next phase

### Goal

**Bring units 1–14 into a clear, labeled, and manageable state.**

This does not necessarily mean that all 14 units must immediately become `ready`. It does mean that:
- every unit in the 1–14 range has an explicit status;
- it is visible which units are actually high quality;
- the remaining work is easy to understand;
- there is enough real material to define a trustworthy template and documentation later.

By the end of this phase, the project should be able to answer:
- what a good unit should look like in this app;
- which step patterns are required and which ones are optional;
- how bilingual content should be structured;
- where AI is useful and where it mostly creates noise;
- which recurring patterns are strong enough to become project standards.

---

## 4. Unit classification system

Proposed status system:

### `ready`
A high-quality, reviewed unit.

Characteristics:
- it matches the book’s topic and scope in meaning;
- theory is written in original words rather than copied from the book;
- examples feel natural and do not look like raw AI output;
- practice actually trains the intended grammar point;
- the quiz does not just repeat practice 1:1;
- Russian and English stay aligned;
- the unit structure is clean and stable;
- the unit can be treated as a good model for future work.

### `draft`
A solid working draft.

Characteristics:
- the structure is mostly correct;
- the content is no longer empty;
- the unit is usable as a working document;
- but it still needs editing, book alignment, or quality cleanup.

### `ai-rough`
A rough AI-generated draft that should not be trusted as final material.

Characteristics:
- the structure may still be useful;
- some examples or formulations may be reusable;
- but the content has not gone through proper editorial review;
- the unit should not be considered complete or used as a template reference.

### `stub`
An empty or nearly empty placeholder.

Characteristics:
- the unit topic exists;
- a basic file or structure may exist;
- but there is little or no meaningful finished content inside it yet.

### Where to store status

At the current stage, the most practical option is:
- store unit statuses in `UNITS.md`.

Why:
- it avoids changing runtime app data too early;
- it makes bulk status labeling easier;
- it works well as an editorial progress board.

If needed later, statuses can be moved into code or into a separate metadata structure.

---

## 5. Main working strategy for units 1–14

### Stage 1. Label the current state of the first 14 units

Required work:
- review units 1–14;
- assign one status to each: `ready`, `draft`, `ai-rough`, or `stub`;
- write a short note explaining why each unit got that status.

Helpful note examples:
- “needs book alignment”;
- “theory is fine, practice is weak”;
- “too much AI-style wording”;
- “good base, but summary should be rewritten”.

### Stage 2. Bring the 1–14 range into editorially coherent shape

The goal is not necessarily to make all 14 units instantly `ready`.

The goal is to make sure that:
- there are enough strong units in the 1–14 range to identify patterns;
- the most common recurring problems become obvious;
- the entire 1–14 range stops being a mixed pile of different quality levels.

In practice, this means:
- rewriting awkward AI phrasing;
- aligning the tone and style of explanations;
- replacing weak or repetitive examples;
- reworking exercises that do not really test the target grammar;
- improving summaries so they actually conclude the lesson instead of acting like filler.

### Stage 3. Extract the best patterns from within units 1–14

After the first 14 units are reviewed and improved, the goal is not just to have “more finished units”, but to identify the strongest patterns inside them.

This should include reviewing:
- which theory-step structure works best;
- which examples-step format reads most clearly;
- how practice should be structured;
- how quizzes should be written so they are not just a dull duplicate of practice;
- how summaries can be short but still useful.

Those best patterns should become the basis for the eventual template.

---

## 6. Why the template and documentation should not be written too early

At this point it would be very easy to standardize the wrong pattern.

If the template is written too early, there is a risk of:
- locking in the weaknesses of the earliest and simplest units;
- preserving unnecessary fields or awkward structures;
- having to rewrite both the template and already-produced content later.

The correct order should be:

1. Review and improve units 1–14.
2. Identify the strongest real patterns among them.
3. Build the template from those patterns.
4. Only then document the workflow as a stable project standard.

---

## 7. What should exist after the first 14 units are stabilized

### 7.1. A unit template

Once units 1–14 have been reviewed and aligned, create a shared template.

Possible forms:
- `unit.template.ts`;
- `scripts/create-unit.ts`;
- or both.

The template should define:
- the recommended step sequence;
- the minimum structure required for each step type;
- conventions for bilingual fields;
- the expected approach to `altAnswers`;
- the expected quality level for content that enters the project.

### 7.2. A content guide

After the template exists, create a short and practical `CONTENT_GUIDE.md`.

It should explain:
- how to write theory based on the book without copying it;
- how to adapt book material into an interactive format;
- how to write examples;
- how to design practice;
- how to write quizzes;
- how to decide whether a unit is ready to move to `ready`.

### 7.3. Basic validation support

Later, it would be useful to add:
- `scripts/create-unit.ts` — a new unit generator;
- `scripts/validate-content.ts` — a basic structural validator.

Examples of useful validations:
- every step has the required fields;
- `practice` questions are not empty;
- `quiz` items use a valid `correctIndex`;
- bilingual content always includes both locales;
- summaries are not empty;
- each unit is registered in `src/data/units/index.ts`.

---

## 8. Plan for book references

When the local book material is added to `references/`, that should become a dedicated working phase.

### What to do after references are added

1. Check which book units are actually covered.
2. Map the book structure against the existing `unitN.ts` files.
3. Identify where the current content already aligns with the book and where it drifts away.
4. Use the book as an editorial source of truth.
5. Track real coverage progress across the full book.

### Important principle

- `references/` is an **editorial verification and alignment source**;
- `src/data/` is the **final user-facing app content**;
- the app content must not become a direct digital copy of the book.

The book should be used to:
- confirm the topic;
- confirm the scope;
- check the correctness of explanations;
- keep the grammar focus of each unit on track.

It should not be used as a source for mechanical copying.

---

## 9. Practical work order

### Right now

1. Keep the roadmap aligned with the 14-unit strategy.
2. Review units 1–14.
3. Label them in `UNITS.md` using:
   - `ready`
   - `draft`
   - `ai-rough`
   - `stub`
4. Add a short comment for each unit.

### Near-term working phase

5. Improve units 1–14 one by one.
6. Identify recurring problems across those units.
7. Record which solutions inside the 1–14 range are actually strong and repeatable.

### After 1–14 are stabilized

8. Create the new unit template.
9. Write a short content guide with examples.
10. Add a generator and validator if they are needed.

### Later

11. Add the book to `references/`.
12. Compare the current content against real book coverage.
13. Plan scaling for the rest of the units.
14. Only after that revisit whether moving away from TS makes sense.

---

## 10. Quality criteria for `ready`

A unit can be considered `ready` if it satisfies the following criteria.

### Content quality
- the topic matches the book in meaning and level;
- theory is written in original words;
- the explanation does not read like raw AI text;
- examples feel natural and useful for learning;
- exercises actually train the intended grammar point;
- the quiz checks understanding instead of repeating practice mechanically;
- the summary genuinely concludes the lesson instead of rephrasing the theory without purpose.

### Structural quality
- the steps are organized logically;
- the unit does not feel like a random collection of unrelated parts;
- bilingual fields are used consistently;
- all required fields are present;
- `altAnswers` are added where multiple valid answers should be accepted.

### Editorial quality
- the English and Russian content stay aligned;
- there are no major tone or style jumps;
- there are no obvious traces of unreviewed AI output;
- theory, examples, practice, and quiz do not contradict each other.

### Technical quality
- the unit does not break the build;
- it does not introduce lint issues beyond deliberate content-specific exceptions;
- it is properly registered and displayed in the app.

---

## 11. What not to do yet

Avoid the following for now:
- do not migrate all content to JSON just because there will be many units;
- do not write the final large documentation set before units 1–14 are stabilized;
- do not treat AI drafts as if they were complete units;
- do not design the final template only from the earliest simple topics;
- do not mix reviewed and rough content without clear status labels.

---

## 12. Useful follow-up artifacts

After the stabilization phase, it would make sense to add:

- `docs/UNIT_STATUSES.md` — if status definitions need to live in a dedicated file;
- `docs/CONTENT_GUIDE.md` — a concise guide for writing units;
- `scripts/create-unit.ts` — a generator for new units;
- `scripts/validate-content.ts` — a basic content validator;
- potentially an expanded `UNITS.md` as an editorial coverage tracker for the book.

---

## 13. Short strategy formula

If the whole roadmap is reduced to one sentence, it is this:

**First stabilize and classify units 1–14 → then extract real working patterns from them → then define the template and documentation → only after that scale the project across the full book.**
