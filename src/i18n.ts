import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./lacale/english.json";
import ruLang from "./lacale/russian.json";

const resources = {
  en: {
    translation: enLang,
  },
  ru: {
    translation: ruLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  supportedLngs: ["en", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
