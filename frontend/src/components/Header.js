import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/main.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <header className="header">
      <div className="header-left">
        MLBB Diamond Store
      </div>
      <div className="header-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌞' : '🌙'}
        </button>
        <select
          className="language-select"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
};

export default Header;