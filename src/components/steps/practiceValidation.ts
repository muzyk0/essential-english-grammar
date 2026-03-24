import type { PracticeQuestion } from '../../types/unit';

type BlankSpec = {
  correctAnswer: string;
  altAnswers?: string[];
  acceptedPatterns?: string[];
};

export function getBlankCount(prompt: string) {
  return Math.max(prompt.split('___').length - 1, 1);
}

export function getBlankSpecs(question: PracticeQuestion): BlankSpec[] {
  const blankCount = getBlankCount(question.prompt);

  if (question.blankAnswers?.length === blankCount) {
    return question.blankAnswers;
  }

  if (blankCount === 1) {
    return [{
      correctAnswer: question.correctAnswer,
      altAnswers: question.altAnswers,
      acceptedPatterns: question.acceptedPatterns,
    }];
  }

  const separator = question.correctAnswer.includes(' ... ')
    ? ' ... '
    : question.correctAnswer.includes(' / ')
      ? ' / '
      : null;

  if (separator) {
    const parts = question.correctAnswer.split(separator).map((part) => part.trim());
    if (parts.length === blankCount) {
      return parts.map((part) => ({ correctAnswer: part }));
    }
  }

  return [
    { correctAnswer: question.correctAnswer, altAnswers: question.altAnswers },
    ...Array.from({ length: blankCount - 1 }, () => ({ correctAnswer: '' })),
  ];
}

export function getAnswerMode(question: PracticeQuestion) {
  return question.answerMode ?? 'exact';
}

export function isPracticeAnswerCorrect(question: PracticeQuestion, values: string[]) {
  const answerMode = getAnswerMode(question);
  const specs = getBlankSpecs(question);

  return answerMode === 'example'
    ? specs.every((spec, index) => {
        const userAnswer = values[index]?.trim() ?? '';
        return matchesExampleAnswer(userAnswer, spec);
      })
    : specs.every((spec, index) => {
        const userAnswer = normalizeAnswer(values[index] ?? '');
        const allValid = [spec.correctAnswer, ...(spec.altAnswers ?? [])].map(normalizeAnswer);
        return allValid.includes(userAnswer);
      });
}

export function normalizeAnswer(value: string) {
  return value.trim().toLowerCase();
}

function matchesExampleAnswer(userAnswer: string, spec: BlankSpec) {
  const trimmed = userAnswer.trim();
  if (!trimmed) return false;

  if (!spec.acceptedPatterns?.length) return true;

  return spec.acceptedPatterns.some((pattern) => {
    try {
      return new RegExp(pattern, 'i').test(trimmed);
    } catch {
      return false;
    }
  });
}
