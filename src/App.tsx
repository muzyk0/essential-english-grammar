import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import HomePage from './components/HomePage';
import ReviewPage from './components/ReviewPage';
import UnitPage from './components/UnitPage';
import { appBase } from './config/appBase';
import './index.css';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={appBase}>
        <div className="app-shell">
          <Header />
          <div className="app-body">
            <Sidebar />
            <main className="app-main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/review/:reviewId" element={<ReviewPage />} />
                <Route path="/unit/:unitId" element={<UnitPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
