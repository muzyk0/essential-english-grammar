import { describe, expect, test } from 'bun:test';
import unit14 from '../src/data/units/unit14';

describe('unit14', () => {
  const contrastStep = unit14.steps.find((step) => step.id === 'step-1-contrast');
  const practiceStep = unit14.steps.find((step) => step.id === 'step-4-practice');
  const quizStep = unit14.steps.find((step) => step.id === 'step-5-quiz');
  const summaryStep = unit14.steps.find((step) => step.id === 'step-6-summary');

  test('keeps the source practice split into picture stories and mixed completion in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(2);
    expect(practiceStep.right.ru.sections).toHaveLength(2);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 — Picture stories with past continuous and past simple',
      'Exercise 2 — Choose the correct past form',
    ]);
  });

  test('models the picture-led stories with visuals and bounded multi-blank answers', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const pictureSection = practiceStep.right.en.sections?.[0];
    expect(pictureSection?.questions).toHaveLength(3);

    const emma = pictureSection?.questions.find((question) => question.id === 'u14-ex1-1');
    expect(emma?.visual?.title).toBe('Emma');
    expect(emma?.cue).toBe('(happen) (paint) (fall)');
    expect(emma?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual([
      'happened',
      'was painting',
      'fell',
    ]);

    const sara = pictureSection?.questions.find((question) => question.id === 'u14-ex1-3');
    expect(sara?.visual?.description).toContain('walk through the park');
    expect(sara?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual([
      'was walking',
      'met',
      'was going',
      'was carrying',
      'stopped',
    ]);
  });

  test('keeps the mixed-tense completion section strict and bounded', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const mixedSection = practiceStep.right.en.sections?.[1];
    expect(mixedSection?.questions).toHaveLength(9);

    const phone = mixedSection?.questions.find((question) => question.id === 'u14-ex2-3');
    expect(phone?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual([
      'Did Oliver phone',
      'called',
      'was making',
    ]);

    const driving = mixedSection?.questions.find((question) => question.id === 'u14-ex2-5');
    expect(driving?.blankAnswers?.[2].altAnswers).toContain('was not driving');

    const game = mixedSection?.questions.find((question) => question.id === 'u14-ex2-6');
    expect(game?.blankAnswers?.[1].altAnswers).toContain('did not play');

    const night = mixedSection?.questions.find((question) => question.id === 'u14-ex2-9');
    expect(night?.correctAnswer).toBe('were you doing');
  });

  test('keeps the theory and quiz focused on event versus background action', () => {
    expect(contrastStep).toBeDefined();
    expect(contrastStep?.type).toBe('theory');
    expect(quizStep).toBeDefined();
    expect(quizStep?.type).toBe('quiz');
    expect(summaryStep).toBeDefined();
    expect(summaryStep?.type).toBe('summary');

    if (
      !contrastStep
      || contrastStep.type !== 'theory'
      || !quizStep
      || quizStep.type !== 'quiz'
      || !summaryStep
      || summaryStep.type !== 'summary'
    ) return;

    expect(contrastStep.left.en.title).toBe('What was happening, and what happened?');
    expect(contrastStep.left.en.table?.rows).toContainEqual([
      'What happened?',
      'past simple',
    ]);

    const mixedQuestion = quizStep.content.en.questions.find((question) => question.id === 'q14-4');
    expect(mixedQuestion?.options).toEqual([
      'was walking / met',
      'walked / was meeting',
      'was walking / was meeting',
    ]);
    expect(mixedQuestion?.correctIndex).toBe(0);
    expect(summaryStep.content.en.nextUnit).toBeUndefined();
  });
});
