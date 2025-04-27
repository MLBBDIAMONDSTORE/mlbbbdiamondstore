import React, { createContext, useState } from 'react';

import uz from '../translations/uz';
import ru from '../translations/ru';
import en from '../translations/en';

export const LanguageContext = createContext();

const translations = { uz, ru, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uz');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    language,
    changeLanguage,
    translations, // <- translationsni value ichiga qo'yamiz
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};