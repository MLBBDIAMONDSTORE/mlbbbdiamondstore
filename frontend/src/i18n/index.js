import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from './uz.json';
import ru from './ru.json';
import en from './en.json';

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'uz',
  fallbackLng: 'uz',
  interpolation: { escapeValue: false },
});

export default i18n;