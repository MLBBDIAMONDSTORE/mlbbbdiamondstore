import React, { useEffect, useState } from 'react';
import '../styles/main.css';

const langs = [
  { code: 'uz', label: '🇺🇿' },
  { code: 'ru', label: '🇷🇺' },
  { code: 'en', label: '🇬🇧' }
];

export default function LanguageSelector() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'uz');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className="lang-selector">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={lang === code ? 'active' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
}