import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import units from '../data/units';
import ProgressBar from './ProgressBar';
import StepRenderer from './steps/StepRenderer';
import type { StepType } from '../types/unit';

export default function UnitPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const { lang, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const unit = units.find((u) => u.id === unitId);

  if (!unit) {
    return (
      <div className="error-page">
        <h2>Unit not found</h2>
        <Link to="/" className="btn btn--primary">{t('btn.backToUnits')}</Link>
      </div>
    );
  }

  const stepTypes = unit.steps.map((s) => s.type as StepType);
  const step = unit.steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === unit.steps.length - 1;

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

      {/* Progress bar */}
      <ProgressBar
        current={currentStep}
        total={unit.steps.length}
        stepTypes={stepTypes}
      />

      {/* Step content */}
      <div className="step-content">
        <StepRenderer step={step} lang={lang} />
      </div>

      {/* Navigation */}
      <div className="step-nav">
        <button
          className="btn btn--secondary"
          onClick={() => setCurrentStep((s) => s - 1)}
          disabled={isFirst}
        >
          {t('btn.prev')}
        </button>

        <div className="step-nav-dots">
          {unit.steps.map((_, i) => (
            <button
              key={i}
              className={`step-nav-dot ${i === currentStep ? 'step-nav-dot--active' : i < currentStep ? 'step-nav-dot--done' : ''}`}
              onClick={() => setCurrentStep(i)}
              aria-label={`Step ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="btn btn--primary"
          onClick={() => setCurrentStep((s) => s + 1)}
          disabled={isLast}
        >
          {t('btn.next')}
        </button>
      </div>
    </div>
  );
}
