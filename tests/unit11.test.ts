import { describe, expect, test } from 'bun:test';
import unit11 from '../src/data/units/unit11';

describe('unit11', () => {
  const irregularStep = unit11.steps.find((step) => step.id === 'step-2-irregular');
  const spellingStep = unit11.steps.find((step) => step.id === 'step-3-spelling');
  const practiceStep = unit11.steps.find((step) => step.id === 'step-4-practice');

  test('keeps the source practice split into five sections in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(5);
    expect(practiceStep.right.ru.sections).toHaveLength(5);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 — Complete with a verb from the box',
      'Exercise 2 — Write the past simple forms',
      "Exercise 3 — Lisa's journey to Madrid",
      'Exercise 4 — Rewrite these as past events',
      'Exercise 5 — Write about what you did yesterday',
    ]);
  });

  test('keeps the controlled, narrative, and rewrite sections source-faithful', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const regularSection = practiceStep.right.en.sections?.[0];
    const listSection = practiceStep.right.en.sections?.[1];
    const narrativeSection = practiceStep.right.en.sections?.[2];
    const rewriteSection = practiceStep.right.en.sections?.[3];

    expect(regularSection?.wordBank).toEqual([
      'die',
      'enjoy',
      'finish',
      'happen',
      'open',
      'rain',
      'start',
      'stay',
      'want',
    ]);

    const holiday = regularSection?.questions.find((question) => question.id === 'u11-ex1-7');
    expect(holiday?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual(['enjoyed', 'stayed']);

    const put = listSection?.questions.find((question) => question.id === 'u11-ex2-11');
    expect(put?.correctAnswer).toBe('put');

    const airport = narrativeSection?.questions.find((question) => question.id === 'u11-ex3-2-3');
    expect(airport?.cue).toBe('get / have');
    expect(airport?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual(['got', 'had']);

    const friends = rewriteSection?.questions.find((question) => question.id === 'u11-ex4-8');
    expect(friends?.correctAnswer).toBe('came to see us');
    expect(friends?.altAnswers).toContain('came');
  });

  test('uses bounded example-mode validation for the final open practice section', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const aboutYesterday = practiceStep.right.en.sections?.[4];
    expect(aboutYesterday?.questions).toHaveLength(5);

    for (const question of aboutYesterday?.questions ?? []) {
      expect(question.answerMode).toBe('example');
      expect(question.acceptedPatterns?.length).toBeGreaterThan(0);
      expect(question.prompt).toBe('Yesterday I ___.');
    }

    const model = aboutYesterday?.questions.find((question) => question.id === 'u11-ex5-2');
    expect(model?.correctAnswer).toBe('got up late');
  });

  test('keeps the irregular list and spelling focus explicit on the theory side', () => {
    expect(irregularStep).toBeDefined();
    expect(irregularStep?.type).toBe('examples');
    expect(spellingStep).toBeDefined();
    expect(spellingStep?.type).toBe('theory');

    if (!irregularStep || irregularStep.type !== 'examples' || !spellingStep || spellingStep.type !== 'theory') return;

    expect(irregularStep.left.en.table?.rows).toContainEqual(['read', 'read (red)']);
    expect(irregularStep.left.en.table?.rows).toContainEqual(['put', 'put']);
    expect(spellingStep.left.en.table?.rows).toContainEqual([
      'consonant + y -> ied',
      'try -> tried, study -> studied, copy -> copied',
    ]);
    expect(spellingStep.left.en.notes?.[1]).toContain('Appendix 5');
  });
});
