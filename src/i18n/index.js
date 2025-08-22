import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./pt.json";
import en from "./en.json";

const savedLang = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en }
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
