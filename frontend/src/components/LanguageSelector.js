import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const flags = {
  UZ: '🇺🇿',
  RU: '🇷🇺',
  EN: '🇺🇸'
};

export default function LanguageSelector() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'UZ');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className="lang-selector">
      {Object.entries(flags).map(([code, flag]) => (
        <button
          key={code}
          className={`lang-button ${lang === code ? 'active' : ''}`}
          onClick={() => setLang(code)}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}