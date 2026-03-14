import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getReviewPacksForUnit } from '../data/review-packs';
import units from '../data/units';
import ProgressBar from './ProgressBar';
import StepRenderer from './steps/StepRenderer';
import type { StepType } from '../types/unit';

function UnitPageContent({ unitId }: { unitId?: string }) {
  const { lang, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const unitIndex = units.findIndex((u) => u.id === unitId);
  const unit = unitIndex >= 0 ? units[unitIndex] : undefined;

  if (!unit) {
    return (
      <div className="error-page">
        <h2>Unit not found</h2>
        <Link to="/" className="btn btn--primary">{t('btn.backToUnits')}</Link>
      </div>
    );
  }

  const safeCurrentStep = Math.min(currentStep, unit.steps.length - 1);
  const stepTypes = unit.steps.map((s) => s.type as StepType);
  const step = unit.steps[safeCurrentStep];
  const relatedReviewPacks = getReviewPacksForUnit(unit.number);
  const isFirst = safeCurrentStep === 0;
  const isLast = safeCurrentStep === unit.steps.length - 1;
  const nextUnit = units[unitIndex + 1];

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
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={isFirst}
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
            <Link to={`/unit/${nextUnit.id}`} className="btn btn--primary">
              {t('btn.nextUnit')}
            </Link>
          ) : (
            <button className="btn btn--primary" disabled>
              {t('btn.next')}
            </button>
          )
        ) : (
          <button
            className="btn btn--primary"
            onClick={() => setCurrentStep((s) => Math.min(unit.steps.length - 1, s + 1))}
          >
            {t('btn.next')}
          </button>
        )}
      </div>
    </div>
  );
}

export default function UnitPage() {
  const { unitId } = useParams<{ unitId: string }>();

  return <UnitPageContent key={unitId ?? 'unknown-unit'} unitId={unitId} />;
}
