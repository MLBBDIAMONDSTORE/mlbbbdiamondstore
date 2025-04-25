import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('uz')}>🇺🇿 UZ</button>
      <button onClick={() => changeLanguage('ru')}>🇷🇺 RU</button>
      <button onClick={() => changeLanguage('en')}>🇬🇧 EN</button>
    </div>
  );
};

export default LanguageSelector;