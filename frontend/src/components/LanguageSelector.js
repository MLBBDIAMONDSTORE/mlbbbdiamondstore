import React from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'uz');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('uz')}>🇺🇿</button>
      <button onClick={() => changeLanguage('ru')}>🇷🇺</button>
      <button onClick={() => changeLanguage('en')}>🇺🇸</button>
    </div>
  );
};

export default LanguageSelector;