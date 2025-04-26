import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const LanguageSelector = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'UZ');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div className="language-selector">
      <button
        className={language === 'UZ' ? 'active' : ''}
        onClick={() => setLanguage('UZ')}
      >
        🇺🇿
      </button>
      <button
        className={language === 'RU' ? 'active' : ''}
        onClick={() => setLanguage('RU')}
      >
        🇷🇺
      </button>
      <button
        className={language === 'EN' ? 'active' : ''}
        onClick={() => setLanguage('EN')}
      >
        🇬🇧
      </button>
    </div>
  );
};

export default LanguageSelector;