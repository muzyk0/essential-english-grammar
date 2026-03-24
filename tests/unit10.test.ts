import { describe, expect, test } from 'bun:test';
import unit10 from '../src/data/units/unit10';

describe('unit10', () => {
  const theoryStep = unit10.steps.find((step) => step.id === 'step10-1-positive');
  const practiceStep = unit10.steps.find((step) => step.id === 'step10-4-practice');
  const quizStep = unit10.steps.find((step) => step.id === 'step10-5-quiz');

  test('keeps the source practice split into four sections in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(4);
    expect(practiceStep.right.ru.sections).toHaveLength(4);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 — Write where each person was',
      'Exercise 2 — Choose am/is/are or was/were',
      "Exercise 3 — Choose was/were or wasn't/weren't",
      'Exercise 4 — Put the words in the right order',
    ]);
  });

  test('models the picture-location exercise with place variants and a bounded about-you frame', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const locationSection = practiceStep.right.en.sections?.[0];
    expect(locationSection?.questions).toHaveLength(5);

    const cinema = locationSection?.questions.find((question) => question.id === 'u10-ex1-2');
    expect(cinema?.visual?.title).toBe('Cinema seats');
    expect(cinema?.altAnswers).toContain('were in the cinema');

    const beach = locationSection?.questions.find((question) => question.id === 'u10-ex1-5');
    expect(beach?.altAnswers).toEqual(expect.arrayContaining([
      'was on the beach',
      'was at the seaside',
    ]));

    const aboutYou = locationSection?.questions.find((question) => question.id === 'u10-ex1-6');
    expect(aboutYou?.answerMode).toBe('example');
    expect(aboutYou?.prompt).toBe('I ___.');
    expect(aboutYou?.acceptedPatterns?.length).toBeGreaterThan(0);
  });

  test('keeps present-vs-past be choice and negative completion validation strict', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const beChoiceSection = practiceStep.right.en.sections?.[1];
    const positiveNegativeSection = practiceStep.right.en.sections?.[2];

    const thirstyNow = beChoiceSection?.questions.find((question) => question.id === 'u10-ex2-3');
    expect(thirstyNow?.correctAnswer).toBe('am');
    expect(thirstyNow?.altAnswers).toContain("'m");

    const avaAndBen = beChoiceSection?.questions.find((question) => question.id === 'u10-ex2-9');
    expect(avaAndBen?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual(['are', 'were']);

    const concert = positiveNegativeSection?.questions.find((question) => question.id === 'u10-ex3-4');
    expect(concert?.blankAnswers?.[0].correctAnswer).toBe('Were');
    expect(concert?.blankAnswers?.[2].altAnswers).toContain('was not');

    const atHome = positiveNegativeSection?.questions.find((question) => question.id === 'u10-ex3-6');
    expect(atHome?.blankAnswers?.[0].altAnswers).toContain('were not');
    expect(atHome?.blankAnswers?.[1].correctAnswer).toBe('were');
  });

  test('makes the present-to-past contrast and mixed-time quiz check explicit', () => {
    expect(theoryStep).toBeDefined();
    expect(theoryStep?.type).toBe('theory');
    expect(quizStep).toBeDefined();
    expect(quizStep?.type).toBe('quiz');

    if (!theoryStep || theoryStep.type !== 'theory' || !quizStep || quizStep.type !== 'quiz') return;

    expect(theoryStep.left.en.title).toBe('From am/is/are to was/were');
    expect(theoryStep.left.en.notes?.[0]).toContain('Use am/is/are for now');
    expect(theoryStep.right.en.items[0]?.english).toContain('is at work now');

    const mixedTimeQuestion = quizStep.content.en.questions.find((question) => question.id === 'q10-4');
    expect(mixedTimeQuestion?.options).toEqual([
      'were / are',
      'are / were',
      'is / was',
    ]);
    expect(mixedTimeQuestion?.correctIndex).toBe(1);

    const sheQuestion = quizStep.content.en.questions.find((question) => question.id === 'q10-1');
    expect(sheQuestion?.explanation).toBe('With she, use was for the past.');
  });
});
