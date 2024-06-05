import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../translations/en.json';
import translationPL from '../translations/pl.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: translationEN,
    },
    pl: {
      translation: translationPL,
    },
  },
});

export default i18n;
