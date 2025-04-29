import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our application!",
      language: "Language",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a nuestra aplicación!",
      language: "Idioma",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador o localStorage
  .use(initReactI18next) // Inicializa react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Idioma por defecto
    lng: localStorage.getItem('language') || 'en', // Recupera el idioma desde localStorage
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar valores
    },
  });

export default i18n;

/* 
/SAC
  /locales
    /es /translation.json --> {save: 'guardar}
    /en /translation.json --> {save: 'save}

*/