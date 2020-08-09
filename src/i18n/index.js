import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es';
import en from './en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    interpolation: {
      escapeValue: false,
    },
  },
  lng: 'es',
  fallbackLng: 'es',
});

export default i18n;
