import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../types/unit';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">
          <span className="header-logo-icon">📚</span>
          <span className="header-logo-text">Essential Grammar in Use</span>
        </Link>
      </div>

      <div className="header-right">
        <a
          href="https://www.amazon.com/s?k=Essential+Grammar+in+Use+Murphy"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
          title={t('pdf.title')}
        >
          {t('nav.pdfBook')}
        </a>

        {/* Language toggle */}
        <div className="lang-toggle" role="group" aria-label="Language">
          {(['en', 'ru'] as Language[]).map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? 'lang-btn--active' : ''}`}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
