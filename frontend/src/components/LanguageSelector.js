import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <div className="lang-switch">
      <button onClick={() => i18n.changeLanguage('uz')}>🇺🇿</button>
      <button onClick={() => i18n.changeLanguage('ru')}>🇷🇺</button>
      <button onClick={() => i18n.changeLanguage('en')}>🇬🇧</button>
    </div>
  );
}