import { useLanguage } from '../context/LanguageContext';
import type { StepType } from '../types/unit';

type Props = {
  current: number;   // 0-based index
  total: number;
  stepTypes: StepType[];
};

export default function ProgressBar({ current, total, stepTypes }: Props) {
  const { t } = useLanguage();
  const percent = total > 1 ? (current / (total - 1)) * 100 : 100;
  const isComplete = current === total - 1;

  return (
    <div className="progress-bar-wrapper" role="progressbar" aria-valuenow={current + 1} aria-valuemax={total}>
      <div className="progress-bar-header">
        <span className="progress-bar-label">
          {t('progress.step')} {current + 1} {t('progress.of')} {total}
        </span>
        {isComplete && (
          <span className="progress-bar-complete">{t('progress.complete')}</span>
        )}
      </div>

      {/* Step dots */}
      <div className="progress-dots">
        {stepTypes.map((type, i) => (
          <div
            key={i}
            className={`progress-dot ${
              i < current ? 'progress-dot--done' : i === current ? 'progress-dot--current' : ''
            }`}
            title={t(`unit.${type}`)}
          >
            <span className="progress-dot-icon">{STEP_ICONS[type]}</span>
          </div>
        ))}
        {/* connecting line underneath */}
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
      </div>

      {/* Step type label */}
      <div className="progress-step-type">
        {t(`unit.${stepTypes[current]}`)}
      </div>
    </div>
  );
}

const STEP_ICONS: Record<StepType, string> = {
  theory: '📖',
  examples: '💬',
  practice: '✏️',
  quiz: '❓',
  summary: '✓',
};
