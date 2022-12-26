import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    lng: 'en',
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          learn: 'learning',
          description: "edit and save to reload"
        },
      },

      de: {
        translation: {
          learn: 'rwerfssfs',
          description: "edit wersdfersdf save to reload"
        },
      },
    },
  });
