import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const ns = ['translation', 'about-page'];
const supportedLngs = ['en', 'ru'];
const resources = ns.reduce((acc, n) => {
  supportedLngs.forEach((lng) => {
    if (!acc[lng]) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      // eslint-disable-next-line import/no-dynamic-require, global-require
      [n]: require(`../../public/locales/${lng}/${n}.json`),
    };
  });
  return acc;
}, {});

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'ru',
    fallbackLng: 'ru',
    defaultNS: 'translation',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources,
  });

export default i18n;
