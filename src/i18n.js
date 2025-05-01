import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../src/languages/en.json';
import es from '../src/languages/es.json';

// Traducciones
const resources = {
  en: {
    translation: en },
  es: {
    translation: es }
};

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador o localStorage
  .use(initReactI18next) // Inicializa react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Idioma por defecto
    lng: localStorage.getItem('language') || 'en', // Recupera el idioma desde localStorage
    // lng: localStorage.getItem('language') || navigator.language.split('-')[0] || 'en', // Detecta idioma del navegador
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