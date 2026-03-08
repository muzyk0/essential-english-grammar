import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import units from '../../data/units';

export default function Sidebar() {
  const { lang, t } = useLanguage();

  return (
    <nav className="sidebar" aria-label="Units navigation">
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
              <span className="sidebar-item-title">{unit.title[lang]}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
