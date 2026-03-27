import { describe, expect, test } from 'bun:test';
import unit8 from '../src/data/units/unit8';

describe('unit8', () => {
  const contrastStep = unit8.steps.find((step) => step.id === 'step-3-contrast');
  const practiceStep = unit8.steps.find((step) => step.id === 'step-4-practice');

  test('keeps the source practice split into three sections in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(3);
    expect(practiceStep.right.ru.sections).toHaveLength(3);
    expect(practiceStep.right.en.sections?.map((section) => section.id)).toEqual([
      'u8-ex1-picture-questions-en',
      'u8-ex2-auxiliaries-en',
      'u8-ex3-tense-choice-en',
    ]);
    for (const section of practiceStep.right.en.sections ?? []) {
      expect(section.title?.trim()).toBeTruthy();
      expect(section.questions.length).toBeGreaterThan(0);
    }
  });

  test('models the picture contrast exercise with worked examples and strict short-answer variants', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const pictureSection = practiceStep.right.en.sections?.[0];
    expect(pictureSection?.examples).toHaveLength(3);
    expect(pictureSection?.questions).toHaveLength(9);

    const negativeNow = pictureSection?.questions.find((question) => question.id === 'u8-ex1-2a');
    expect(negativeNow?.correctAnswer).toBe("No, she isn't.");
    expect(negativeNow?.altAnswers).toContain('No, she is not.');

    const jobAnswer = pictureSection?.questions.find((question) => question.id === 'u8-ex1-4c');
    expect(jobAnswer?.correctAnswer).toBe('They teach.');
    expect(jobAnswer?.altAnswers).toContain("They're teachers.");
  });

  test('keeps auxiliary-choice and tense-choice validation aligned with the source exercises', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const auxiliarySection = practiceStep.right.en.sections?.[1];
    const mixedTenseSection = practiceStep.right.en.sections?.[2];

    const auxiliaryQuestion = auxiliarySection?.questions.find((question) => question.id === 'u8-ex2-5');
    expect(auxiliaryQuestion?.blankAnswers?.[0].altAnswers).toContain("'s");
    expect(auxiliaryQuestion?.blankAnswers?.[1].altAnswers).toContain('do not');

    const mixedTenseQuestion = mixedTenseSection?.questions.find((question) => question.id === 'u8-ex3-14');
    expect(mixedTenseQuestion?.blankAnswers?.[0].altAnswers).toContain('does not like');
    expect(mixedTenseQuestion?.blankAnswers?.[1].correctAnswer).toBe('She prefers');
  });

  test('extends the state-verb reminder to match the source list more closely', () => {
    expect(contrastStep).toBeDefined();
    expect(contrastStep?.type).toBe('theory');

    if (!contrastStep || contrastStep.type !== 'theory') return;

    const note = contrastStep.left.en.notes?.[1] ?? '';
    expect(note).toContain('remember');
    expect(note).toContain('prefer');
    expect(note).toContain('mean');
    expect(note).toContain('forget');
  });
});
