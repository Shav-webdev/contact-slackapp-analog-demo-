import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationHY from '../locales/hy/translation.json';
import translationRU from '../locales/ru/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  hy: {
    translation: translationHY
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['querystring', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain']
    },
    resources,
    lng: "hy",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;