import { describe, expect, test } from 'bun:test';
import unit15 from '../src/data/units/unit15';

describe('unit15', () => {
  const resultStep = unit15.steps.find((step) => step.id === 'step-1-result-now');
  const formStep = unit15.steps.find((step) => step.id === 'step-2-form');
  const practiceStep = unit15.steps.find((step) => step.id === 'step-4-practice');
  const quizStep = unit15.steps.find((step) => step.id === 'step-5-quiz');
  const summaryStep = unit15.steps.find((step) => step.id === 'step-6-summary');

  test('keeps the source practice split into picture results and word-box completion in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(2);
    expect(practiceStep.right.ru.sections).toHaveLength(2);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 — Picture results you can see now',
      'Exercise 2 — Complete the sentences with the word box',
    ]);
  });

  test('models the picture-led result-now prompts with visuals, a word box, and contracted/full variants', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const pictureSection = practiceStep.right.en.sections?.[0];
    expect(pictureSection?.wordBank).toEqual([
      'take off his coat',
      'close the window',
      'go upstairs',
      'fall down',
      'spill the juice',
      'go out',
    ]);
    expect(pictureSection?.questions).toHaveLength(5);

    const upstairs = pictureSection?.questions.find((question) => question.id === 'u15-ex1-3');
    expect(upstairs?.visual?.description).toContain('upstairs now');
    expect(upstairs?.correctAnswer).toBe('have gone upstairs');
    expect(upstairs?.altAnswers).toContain("'ve gone upstairs");

    const lights = pictureSection?.questions.find((question) => question.id === 'u15-ex1-6');
    expect(lights?.correctAnswer).toBe('have gone out');
    expect(lights?.altAnswers).toContain("'ve gone out");
  });

  test('keeps the second exercise bounded around the word box and present perfect forms', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const wordBoxSection = practiceStep.right.en.sections?.[1];
    expect(wordBoxSection?.wordBank).toEqual([
      'break',
      'buy',
      'decide',
      'finish',
      'forget',
      'go',
      'go',
      'invite',
      'lose',
      'not/find',
      'see',
      'send',
      'take',
      'not/tell',
    ]);
    expect(wordBoxSection?.questions).toHaveLength(13);

    const seen = wordBoxSection?.questions.find((question) => question.id === 'u15-ex2-4');
    expect(seen?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual(['Have', 'seen']);

    const gone = wordBoxSection?.questions.find((question) => question.id === 'u15-ex2-3');
    expect(gone?.correctAnswer).toBe("'s gone");
    expect(gone?.altAnswers).toContain('has gone');

    const negative = wordBoxSection?.questions.find((question) => question.id === 'u15-ex2-13');
    expect(negative?.correctAnswer).toBe("haven't told");
    expect(negative?.altAnswers).toContain('have not told');

    const decided = wordBoxSection?.questions.find((question) => question.id === 'u15-ex2-12');
    expect(decided?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual(['Have', 'decided']);
  });

  test('keeps the theory, form step, and quiz focused on result-now present perfect', () => {
    expect(resultStep).toBeDefined();
    expect(resultStep?.type).toBe('theory');
    expect(formStep).toBeDefined();
    expect(formStep?.type).toBe('examples');
    expect(quizStep).toBeDefined();
    expect(quizStep?.type).toBe('quiz');
    expect(summaryStep).toBeDefined();
    expect(summaryStep?.type).toBe('summary');

    if (
      !resultStep
      || resultStep.type !== 'theory'
      || !formStep
      || formStep.type !== 'examples'
      || !quizStep
      || quizStep.type !== 'quiz'
      || !summaryStep
      || summaryStep.type !== 'summary'
    ) return;

    expect(resultStep.left.en.title).toBe('Past action, present result');
    expect(formStep.left.en.table?.rows).toContainEqual([
      'irregular participle',
      'go -> gone, break -> broken, see -> seen',
    ]);

    const finalQuestion = quizStep.content.en.questions.find((question) => question.id === 'q15-5');
    expect(finalQuestion?.options).toEqual([
      "'ve finished",
      'finished',
      'have finish',
    ]);
    expect(finalQuestion?.correctIndex).toBe(0);
    expect(summaryStep.content.en.nextUnit).toBeUndefined();
  });
});
