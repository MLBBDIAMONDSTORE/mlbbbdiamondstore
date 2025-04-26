import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const flags = {
  uz: '🇺🇿',
  ru: '🇷🇺',
  en: '🇬🇧',
};

export default function LanguageSelector() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'uz');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className="language-selector">
      {Object.keys(flags).map((key) => (
        <button
          key={key}
          className={`lang-btn ${lang === key ? 'active' : ''}`}
          onClick={() => setLang(key)}
        >
          {flags[key]}
        </button>
      ))}
    </div>
  );
}