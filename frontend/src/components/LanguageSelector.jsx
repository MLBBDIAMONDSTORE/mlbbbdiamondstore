import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'uz', label: 'UZ', flag: '🇺🇿' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'uz';

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
  };

  return (
    <div className="language-selector">
      <button>
        {languages.find((lang) => lang.code === currentLanguage)?.flag}{' '}
        {languages.find((lang) => lang.code === currentLanguage)?.label}
      </button>
      <ul>
        {languages.map((lang) => (
          <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
            {lang.flag} {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;