import i18next from 'i18next';
import I18NextXhrBackend from 'i18next-xhr-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(I18NextXhrBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
    },
    interpolation: {
        escapeValue: false
    }
    
  });


export default i18next;
