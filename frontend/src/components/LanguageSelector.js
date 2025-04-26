import React from 'react';

export default function LanguageSelector() {
  const [lang, setLang] = React.useState(localStorage.getItem('lang') || 'UZ');

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="lang-selector">
      {['UZ', 'RU', 'EN'].map((l) => (
        <button
          key={l}
          className={`lang-btn ${lang === l ? 'active' : ''}`}
          onClick={() => changeLang(l)}
        >
          {l}
        </button>
      ))}
    </div>
  );
}