import { useState } from 'react';
import type { PracticeStep as PracticeStepType, Language } from '../../types/unit';
import { useLanguage } from '../../context/LanguageContext';
import TheoryPanel from './TheoryPanel';

type Props = {
  step: PracticeStepType;
  lang: Language;
};

type AnswerState = {
  value: string;
  checked: boolean;
  correct: boolean | null;
  answerRevealed: boolean;
  translationVisible: boolean;
};

export default function PracticeStep({ step, lang }: Props) {
  const { t } = useLanguage();
  const right = step.right[lang];

  const [answers, setAnswers] = useState<Record<string, AnswerState>>(
    Object.fromEntries(right.questions.map((q) => [q.id, createAnswerState()]))
  );

  const handleInput = (id: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: createAnswerState(value),
    }));
  };

  const handleCheck = (id: string, correctAnswer: string, altAnswers?: string[]) => {
    const userAnswer = answers[id].value.trim().toLowerCase();
    const allValid = [correctAnswer, ...(altAnswers ?? [])].map((a) => a.toLowerCase());
    const correct = allValid.includes(userAnswer);
    setAnswers((prev) => ({
      ...prev,
      [id]: { ...prev[id], checked: true, correct, answerRevealed: false, translationVisible: false },
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

  const handleReset = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: createAnswerState(),
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
            const state = answers[q.id];
            const canShowTranslation = Boolean(q.translation) && (state.correct || state.answerRevealed);
            return (
              <li key={q.id} className="practice-item">
                <div className="practice-prompt">
                  {renderPromptWithBlank(q.prompt, state, q.id, handleInput)}
                </div>

                {!state.checked ? (
                  <button
                    className="btn btn--check"
                    onClick={() => handleCheck(q.id, q.correctAnswer, q.altAnswers)}
                    disabled={!state.value.trim()}
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

                      <button className="btn btn--reset" onClick={() => handleReset(q.id)}>
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

function createAnswerState(value = ''): AnswerState {
  return {
    value,
    checked: false,
    correct: null,
    answerRevealed: false,
    translationVisible: false,
  };
}

function renderPromptWithBlank(
  prompt: string,
  state: AnswerState,
  id: string,
  onInput: (id: string, value: string) => void
) {
  const parts = prompt.split('___');
  if (parts.length === 1) return <span>{prompt}</span>;

  return (
    <>
      {parts[0]}
      <input
        type="text"
        className={`blank-input ${
          state.checked
            ? state.correct
              ? 'blank-input--correct'
              : 'blank-input--incorrect'
            : ''
        }`}
        value={state.value}
        onChange={(e) => onInput(id, e.target.value)}
        disabled={state.checked}
        aria-label="fill in the blank"
      />
      {parts.slice(1).join('___')}
    </>
  );
}
