import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation.json'
import esTranslation from './locales/es/translation.json'
import ruTranslation from './locales/ru/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'ru'],
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        name: "English",
        translation: enTranslation,
      },
      es: {
        name: "Spanish",
        translation: esTranslation,
      },
      ru: {
        name: "Russian",
        translation: ruTranslation,
      },
    },
  })

export default i18n