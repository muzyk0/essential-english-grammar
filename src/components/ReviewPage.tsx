import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import reviewPacks from '../data/review-packs';
import units from '../data/units';
import ProgressBar from './ProgressBar';
import StepRenderer from './steps/StepRenderer';
import type { StepType, Unit } from '../types/unit';

export default function ReviewPage() {
  const { reviewId } = useParams<{ reviewId: string }>();
  const { lang, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const pack = reviewPacks.find((item) => item.id === reviewId);

  useEffect(() => {
    setCurrentStep(0);
  }, [reviewId]);

  if (!pack) {
    return (
      <div className="error-page">
        <h2>Review pack not found</h2>
        <Link to="/" className="btn btn--primary">{t('btn.backToHome')}</Link>
      </div>
    );
  }

  const coveredUnits = pack.coversUnits
    .map((unitNumber) => units.find((unit) => unit.number === unitNumber))
    .filter((unit): unit is Unit => Boolean(unit));
  const nextUnitNumber = pack.coversUnits.length > 0 ? Math.max(...pack.coversUnits) + 1 : undefined;
  const nextUnit = nextUnitNumber ? units.find((unit) => unit.number === nextUnitNumber) : undefined;
  const safeCurrentStep = Math.min(currentStep, pack.steps.length - 1);
  const stepTypes = pack.steps.map((step) => step.type as StepType);
  const step = pack.steps[safeCurrentStep];
  const isFirst = safeCurrentStep === 0;
  const isLast = safeCurrentStep === pack.steps.length - 1;

  return (
    <div className="unit-page">
      <div className="unit-header">
        <Link to="/" className="unit-back-link">{t('btn.backToHome')}</Link>
        <div className="unit-title-group">
          <span className="unit-number">{t('nav.review')}</span>
          <h1 className="unit-title">{pack.title[lang]}</h1>
          <p className="review-description">{pack.description[lang]}</p>

          <div className="review-meta">
            <span className="review-chip">
              {t('review.covers')}: {pack.coverageLabel[lang]}
            </span>
            <span className="review-chip">
              {pack.steps.length} {t('home.steps')}
            </span>
          </div>

          {coveredUnits.length > 0 && (
            <div className="review-linked-units">
              <span className="review-linked-units-label">{t('review.includedUnits')}</span>
              <div className="review-linked-unit-list">
                {coveredUnits.map((unit) => (
                  <Link key={unit.id} to={`/unit/${unit.id}`} className="review-unit-link">
                    {t('nav.unit')} {unit.number}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <ProgressBar
        current={safeCurrentStep}
        total={pack.steps.length}
        stepTypes={stepTypes}
      />

      <div className="step-content">
        <StepRenderer key={`${pack.id}-${step.id}`} step={step} lang={lang} />
      </div>

      <div className="step-nav">
        <button
          className="btn btn--secondary"
          onClick={() => setCurrentStep((stepIndex) => Math.max(0, stepIndex - 1))}
          disabled={isFirst}
        >
          {t('btn.prev')}
        </button>

        <div className="step-nav-dots">
          {pack.steps.map((_, index) => (
            <button
              key={index}
              className={`step-nav-dot ${index === safeCurrentStep ? 'step-nav-dot--active' : index < safeCurrentStep ? 'step-nav-dot--done' : ''}`}
              onClick={() => setCurrentStep(index)}
              aria-label={`Step ${index + 1}`}
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
            onClick={() => setCurrentStep((stepIndex) => Math.min(pack.steps.length - 1, stepIndex + 1))}
          >
            {t('btn.next')}
          </button>
        )}
      </div>
    </div>
  );
}
