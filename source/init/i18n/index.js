// Core
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Resources
import { resources } from './resources';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng:           'ru',
        fallbackLng:   'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
