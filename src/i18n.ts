import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsZh from "@langs/zh/translations.json";
import translationsEn from "@langs/en/translations.json";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: process.env.NODE_ENV === "development",
    debug: false,
    fallbackLng: "en",
    defaultNS: "translations",
    compatibilityJSON: "v4",
    resources: {
      en: {
        translations: translationsEn
      },
      zh: {
        translations: translationsZh
      }
    }
  });

export default i18next;
