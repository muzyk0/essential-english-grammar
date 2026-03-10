import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import reviewPacks from '../data/review-packs';
import units from '../data/units';

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <div className="home-page">
      {/* Hero */}
      <div className="home-hero">
        <div className="home-book-cover">
          <div className="home-book-spine" />
          <div className="home-book-front">
            <div className="home-book-title">Essential<br />Grammar<br />in Use</div>
            <div className="home-book-author">Raymond Murphy</div>
            <div className="home-book-badge">Interactive</div>
          </div>
        </div>
        <div className="home-hero-text">
          <h1 className="home-title">{t('home.title')}</h1>
          <p className="home-subtitle">{t('home.subtitle')}</p>
          <p className="home-author">{t('home.author')}</p>
        </div>
      </div>

      {/* PDF notice */}
      <div className="pdf-notice">
        <strong>{t('pdf.title')}:</strong> {t('pdf.message')}
        <a
          href="https://www.amazon.com/s?k=Essential+Grammar+in+Use+Murphy"
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-link"
        >
          {t('pdf.amazon')} →
        </a>
      </div>

      {/* Unit grid */}
      <h2 className="home-select-label">{t('home.selectUnit')}</h2>
      <div className="units-grid">
        {units.map((unit) => (
          <Link key={unit.id} to={`/unit/${unit.id}`} className="unit-card">
            <div className="unit-card-number">{unit.number}</div>
            <div className="unit-card-body">
              <h3 className="unit-card-title">{unit.title[lang]}</h3>
              <p className="unit-card-desc">{unit.description[lang]}</p>
              <span className="unit-card-steps">
                {unit.steps.length} {t('home.steps')}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {reviewPacks.length > 0 && (
        <>
          <h2 className="home-select-label home-select-label--spaced">{t('home.selectReview')}</h2>
          <div className="reviews-grid">
            {reviewPacks.map((pack) => (
              <Link key={pack.id} to={`/review/${pack.id}`} className="review-card">
                <div className="review-card-icon">R</div>
                <div className="review-card-body">
                  <span className="review-card-coverage">{pack.coverageLabel[lang]}</span>
                  <h3 className="review-card-title">{pack.title[lang]}</h3>
                  <p className="review-card-desc">{pack.description[lang]}</p>
                  <span className="review-card-steps">
                    {pack.steps.length} {t('home.steps')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
