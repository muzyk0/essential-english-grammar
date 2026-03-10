import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import reviewPacks from '../../data/review-packs';
import units from '../../data/units';

export default function Sidebar() {
  const { lang, t } = useLanguage();

  return (
    <nav className="sidebar" aria-label="Units navigation">
      <div className="sidebar-section">
        <div className="sidebar-header">{t('nav.units')}</div>
        <ul className="sidebar-list">
          {units.map((unit) => (
            <li key={unit.id}>
              <NavLink
                to={`/unit/${unit.id}`}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
                }
              >
                <span className="sidebar-item-number">{unit.number}</span>
                <span className="sidebar-item-content">
                  <span className="sidebar-item-title">{unit.title[lang]}</span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {reviewPacks.length > 0 && (
        <div className="sidebar-section">
          <div className="sidebar-header">{t('nav.reviews')}</div>
          <ul className="sidebar-list">
            {reviewPacks.map((pack) => (
              <li key={pack.id}>
                <NavLink
                  to={`/review/${pack.id}`}
                  className={({ isActive }) =>
                    `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
                  }
                >
                  <span className="sidebar-item-number sidebar-item-number--review">R</span>
                  <span className="sidebar-item-content">
                    <span className="sidebar-item-title">{pack.title[lang]}</span>
                    <span className="sidebar-item-subtitle">{pack.coverageLabel[lang]}</span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
