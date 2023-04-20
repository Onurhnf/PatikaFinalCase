import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import tr from "@/utility/languages/tr.json";
import en from "@/utility/languages/en.json";

const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
};
const language =
  typeof window !== "undefined" && localStorage.getItem("i18nLang");

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language || "tr",
    fallbackLng: "tr",
    keySeparator: ":",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
