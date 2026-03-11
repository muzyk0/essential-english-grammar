import { Fragment, useState } from 'react';
import type { PracticeQuestion, PracticeStep as PracticeStepType, Language } from '../../types/unit';
import { useLanguage } from '../../context/LanguageContext';
import TheoryPanel from './TheoryPanel';

type Props = {
  step: PracticeStepType;
  lang: Language;
};

type AnswerState = {
  values: string[];
  checked: boolean;
  correct: boolean | null;
  answerRevealed: boolean;
  translationVisible: boolean;
};

type BlankSpec = {
  correctAnswer: string;
  altAnswers?: string[];
};

export default function PracticeStep({ step, lang }: Props) {
  const { t } = useLanguage();
  const right = step.right[lang];

  const [answers, setAnswers] = useState<Record<string, AnswerState>>(
    Object.fromEntries(right.questions.map((q) => [q.id, createAnswerState(getBlankCount(q.prompt))]))
  );

  const handleInput = (id: string, blankIndex: number, value: string) => {
    setAnswers((prev) => {
      const prevState = prev[id] ?? createAnswerState(blankIndex + 1);
      const values = [...prevState.values];
      while (values.length <= blankIndex) values.push('');
      values[blankIndex] = value;

      return {
        ...prev,
        [id]: createAnswerState(Math.max(values.length, 1), values),
      };
    });
  };

  const handleCheck = (q: PracticeQuestion) => {
    const specs = getBlankSpecs(q);
    const state = answers[q.id] ?? createAnswerState(specs.length);
    const correct = specs.every((spec, index) => {
      const userAnswer = normalizeAnswer(state.values[index] ?? '');
      const allValid = [spec.correctAnswer, ...(spec.altAnswers ?? [])].map(normalizeAnswer);
      return allValid.includes(userAnswer);
    });

    setAnswers((prev) => ({
      ...prev,
      [q.id]: { ...state, checked: true, correct, answerRevealed: false, translationVisible: false },
    }));
  };

  const handleRevealAnswer = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: { ...prev[id], answerRevealed: true },
    }));
  };

  const handleRevealTranslation = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: { ...prev[id], translationVisible: true },
    }));
  };

  const handleReset = (q: PracticeQuestion) => {
    setAnswers((prev) => ({
      ...prev,
      [q.id]: createAnswerState(getBlankCount(q.prompt)),
    }));
  };

  return (
    <div className="book-spread">
      <TheoryPanel content={step.left[lang]} />

      {/* Right page — exercises */}
      <div className="book-page book-page--right">
        <div className="page-label">B</div>
        <h2 className="page-title">{right.title}</h2>
        <p className="page-intro">{right.instructions}</p>

        <ol className="practice-list">
          {right.questions.map((q) => {
            const state = answers[q.id] ?? createAnswerState(getBlankCount(q.prompt));
            const canShowTranslation = Boolean(q.translation) && (state.correct || state.answerRevealed);
            return (
              <li key={q.id} className="practice-item">
                <div className="practice-prompt">
                  {renderPromptWithBlanks(q, state, handleInput)}
                </div>

                {!state.checked ? (
                  <button
                    className="btn btn--check"
                    onClick={() => handleCheck(q)}
                    disabled={!hasAllBlankValues(state, q)}
                  >
                    {t('btn.check')}
                  </button>
                ) : (
                  <>
                    <div className="practice-feedback">
                      <span className={state.correct ? 'feedback--correct' : 'feedback--incorrect'}>
                        {state.correct ? t('practice.correct') : t('practice.incorrect')}
                      </span>
                      {!state.correct && state.answerRevealed && (
                        <span className="feedback-answer">→ {q.correctAnswer}</span>
                      )}
                      {q.explanation && (state.correct || state.answerRevealed) && (
                        <span className="feedback-explanation">{q.explanation}</span>
                      )}
                    </div>

                    <div className="practice-actions">
                      {!state.correct && !state.answerRevealed && (
                        <button
                          className="btn btn--secondary btn--practice-action"
                          onClick={() => handleRevealAnswer(q.id)}
                        >
                          {t('btn.showAnswer')}
                        </button>
                      )}

                      {canShowTranslation && !state.translationVisible && (
                        <button
                          className="btn btn--secondary btn--practice-action"
                          onClick={() => handleRevealTranslation(q.id)}
                        >
                          {t('btn.showTranslation')}
                        </button>
                      )}

                      <button className="btn btn--reset" onClick={() => handleReset(q)}>
                        {t('btn.tryAgain')}
                      </button>
                    </div>

                    {state.translationVisible && q.translation && (
                      <div className="practice-translation">{q.translation}</div>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function createAnswerState(blankCount: number, values?: string[]): AnswerState {
  const filledValues = values
    ? [...values, ...Array(Math.max(blankCount - values.length, 0)).fill('')]
    : Array.from({ length: blankCount }, () => '');

  return {
    values: filledValues,
    checked: false,
    correct: null,
    answerRevealed: false,
    translationVisible: false,
  };
}

function renderPromptWithBlanks(
  question: PracticeQuestion,
  state: AnswerState,
  onInput: (id: string, blankIndex: number, value: string) => void
) {
  const { prompt, id } = question;
  const parts = prompt.split('___');
  if (parts.length === 1) return <span>{prompt}</span>;
  const specs = getBlankSpecs(question);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${id}-${index}`}>
          {part}
          {index < parts.length - 1 && (
            <input
              type="text"
              className={`blank-input ${
                state.checked
                  ? state.correct
                    ? 'blank-input--correct'
                    : 'blank-input--incorrect'
                  : ''
              }`}
              value={state.values[index] ?? ''}
              onChange={(e) => onInput(id, index, e.target.value)}
              disabled={state.checked}
              aria-label={`fill in the blank ${index + 1}`}
              style={getBlankInputStyle(specs[index]?.correctAnswer ?? '')}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}

function getBlankCount(prompt: string) {
  return Math.max(prompt.split('___').length - 1, 1);
}

function getBlankSpecs(question: PracticeQuestion): BlankSpec[] {
  const blankCount = getBlankCount(question.prompt);

  if (question.blankAnswers?.length === blankCount) {
    return question.blankAnswers;
  }

  if (blankCount === 1) {
    return [{ correctAnswer: question.correctAnswer, altAnswers: question.altAnswers }];
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

function hasAllBlankValues(state: AnswerState, question: PracticeQuestion) {
  return getBlankSpecs(question).every((_, index) => Boolean(state.values[index]?.trim()));
}

function normalizeAnswer(value: string) {
  return value.trim().toLowerCase();
}

function getBlankInputStyle(correctAnswer: string) {
  const width = `${Math.max(6, Math.min(correctAnswer.length + 2, 28))}ch`;
  return { width, maxWidth: '100%' };
}
