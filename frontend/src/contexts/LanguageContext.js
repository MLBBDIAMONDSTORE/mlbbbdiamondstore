import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const translations = {
  uz: {
    buyNow: 'Xarid qilish',
    confirmOrder: 'Buyurtmani tasdiqlash',
    pay: 'To‘lash',
    nickname: 'Taxallus',
    playerId: 'O‘yinchi ID',
  },
  ru: {
    buyNow: 'Купить',
    confirmOrder: 'Подтвердить заказ',
    pay: 'Оплатить',
    nickname: 'Никнейм',
    playerId: 'ID игрока',
  },
  en: {
    buyNow: 'Buy Now',
    confirmOrder: 'Confirm Order',
    pay: 'Pay',
    nickname: 'Nickname',
    playerId: 'Player ID',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uz');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const texts = translations[language]; // !!! faqat kerakli tilni olamiz

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};