import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          welcome: 'Xush kelibsiz, {{name}}!',
          // boshqa tarjimalar
        },
      },
      ru: {
        translation: {
          welcome: 'Добро пожаловать, {{name}}!',
          // boshqa tarjimalar
        },
      },
      en: {
        translation: {
          welcome: 'Welcome, {{name}}!',
          // boshqa tarjimalar
        },
      },
    },
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;