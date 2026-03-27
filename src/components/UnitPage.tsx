import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getReviewPacksForUnit } from '../data/review-packs';
import units from '../data/units';
import ProgressBar from './ProgressBar';
import StepRenderer from './steps/StepRenderer';
import useStepKeyboardNavigation from '../hooks/useStepKeyboardNavigation';
import type { StepType } from '../types/unit';

function UnitPageContent({ unitId }: { unitId?: string }) {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const unitIndex = units.findIndex((u) => u.id === unitId);
  const unit = unitIndex >= 0 ? units[unitIndex] : undefined;
  const safeCurrentStep = unit ? Math.min(currentStep, unit.steps.length - 1) : 0;
  const stepTypes = unit?.steps.map((s) => s.type as StepType) ?? [];
  const step = unit?.steps[safeCurrentStep];
  const relatedReviewPacks = unit ? getReviewPacksForUnit(unit.number) : [];
  const isFirst = safeCurrentStep === 0;
  const isLast = unit ? safeCurrentStep === unit.steps.length - 1 : true;
  const nextUnit = unitIndex >= 0 ? units[unitIndex + 1] : undefined;

  const goPreviousStep = () => {
    setCurrentStep((stepIndex) => Math.max(0, stepIndex - 1));
  };

  const goNextStep = () => {
    if (!unit) return;

    if (safeCurrentStep < unit.steps.length - 1) {
      setCurrentStep((stepIndex) => Math.min(unit.steps.length - 1, stepIndex + 1));
      return;
    }

    if (nextUnit) {
      navigate(`/unit/${nextUnit.id}`);
    }
  };

  const goFirstStep = () => {
    setCurrentStep(0);
  };

  const goLastStep = () => {
    if (!unit) return;
    setCurrentStep(unit.steps.length - 1);
  };

  useStepKeyboardNavigation({
    current: safeCurrentStep,
    total: unit?.steps.length ?? 0,
    onPrevious: goPreviousStep,
    onNext: goNextStep,
    onFirst: goFirstStep,
    onLast: goLastStep,
    enabled: Boolean(unit),
  });

  if (!unit || !step) {
    return (
      <div className="error-page">
        <h2>{t('error.unitNotFound')}</h2>
        <Link to="/" className="btn btn--primary">{t('btn.backToUnits')}</Link>
      </div>
    );
  }

  return (
    <div className="unit-page">
      {/* Unit header */}
      <div className="unit-header">
        <Link to="/" className="unit-back-link">{t('btn.backToUnits')}</Link>
        <div className="unit-title-group">
          <span className="unit-number">{t('nav.unit')} {unit.number}</span>
          <h1 className="unit-title">{unit.title[lang]}</h1>
        </div>
      </div>

      {relatedReviewPacks.length > 0 && (
        <div className="related-review-packs">
          <div className="related-review-label">{t('review.related')}</div>
          <div className="related-review-list">
            {relatedReviewPacks.map((pack) => (
              <Link key={pack.id} to={`/review/${pack.id}`} className="related-review-card">
                <span className="related-review-card-tag">{pack.coverageLabel[lang]}</span>
                <div className="related-review-card-title">{pack.title[lang]}</div>
                <p className="related-review-card-desc">{pack.description[lang]}</p>
                <span className="related-review-card-link">{t('btn.startReview')}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Progress bar */}
      <ProgressBar
        current={safeCurrentStep}
        total={unit.steps.length}
        stepTypes={stepTypes}
      />

      {/* Step content */}
      <div className="step-content">
        <StepRenderer key={`${unit.id}-${step.id}`} step={step} lang={lang} />
      </div>

      {/* Navigation */}
      <div className="step-nav">
        <button
          className="btn btn--secondary"
          onClick={goPreviousStep}
          disabled={isFirst}
          aria-keyshortcuts="ArrowLeft"
          title={t('nav.stepKeyboardHint')}
        >
          {t('btn.prev')}
        </button>

        <div className="step-nav-dots">
          {unit.steps.map((_, i) => (
            <button
              key={i}
              className={`step-nav-dot ${i === safeCurrentStep ? 'step-nav-dot--active' : i < safeCurrentStep ? 'step-nav-dot--done' : ''}`}
              onClick={() => setCurrentStep(i)}
              aria-label={`Step ${i + 1}`}
            />
          ))}
        </div>

        {isLast ? (
          nextUnit ? (
            <Link to={`/unit/${nextUnit.id}`} className="btn btn--primary" aria-keyshortcuts="ArrowRight" title={t('nav.stepKeyboardHint')}>
              {t('btn.nextUnit')}
            </Link>
          ) : (
            <button className="btn btn--primary" disabled aria-keyshortcuts="ArrowRight" title={t('nav.stepKeyboardHint')}>
              {t('btn.next')}
            </button>
          )
        ) : (
          <button
            className="btn btn--primary"
            onClick={goNextStep}
            aria-keyshortcuts="ArrowRight"
            title={t('nav.stepKeyboardHint')}
          >
            {t('btn.next')}
          </button>
        )}
      </div>

      <p className="step-nav-hint">{t('nav.stepKeyboardHint')}</p>
    </div>
  );
}

export default function UnitPage() {
  const { unitId } = useParams<{ unitId: string }>();

  return <UnitPageContent key={unitId ?? 'unknown-unit'} unitId={unitId} />;
}
