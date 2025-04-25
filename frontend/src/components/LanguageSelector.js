import React from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useLocalStorage('language', 'uz');

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className="language-selector">
      <img src="/flags/uz.svg" alt="UZ" onClick={() => handleChange('uz')} />
      <img src="/flags/ru.svg" alt="RU" onClick={() => handleChange('ru')} />
      <img src="/flags/gb.svg" alt="EN" onClick={() => handleChange('en')} />
    </div>
  );
};

export default LanguageSelector;