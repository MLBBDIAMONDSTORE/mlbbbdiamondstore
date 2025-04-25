import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      welcome: "Xush kelibsiz",
      enterID: "MLBB ID ni kiriting",
      gameID: "O'yin ID",
      zoneID: "Zona ID",
      continue: "Davom etish",
      home: "Bosh sahifa",
      status: "Holat",
      admin: "Admin",
      loading: "Yuklanmoqda...",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать",
      enterID: "Введите MLBB ID",
      gameID: "Игровой ID",
      zoneID: "Зона ID",
      continue: "Продолжить",
      home: "Главная",
      status: "Статус",
      admin: "Админ",
      loading: "Загрузка...",
    },
  },
  en: {
    translation: {
      welcome: "Welcome",
      enterID: "Enter your MLBB ID",
      gameID: "Game ID",
      zoneID: "Zone ID",
      continue: "Continue",
      home: "Home",
      status: "Status",
      admin: "Admin",
      loading: "Loading...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'uz',
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;