import React from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useLocalStorage('language', 'uz');

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLng('uz')}>🇺🇿</button>
      <button onClick={() => changeLng('ru')}>🇷🇺</button>
      <button onClick={() => changeLng('en')}>🇺🇸</button>
    </div>
  );
};

export default LanguageSelector;