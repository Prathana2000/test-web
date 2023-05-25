import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const translations = {
  EN: {
    translation: {
      MOVE_LEFT: "Move Left",
      MOVE_UP_DOWN: "Move Up/Down",
      MOVE_RIGHT: "Move Right",
    },
  },
  TH: {
    translation: {
      MOVE_LEFT: "เลื่อนซ้าย",
      MOVE_UP_DOWN: "เลื่อน บน/ล่าง",
      MOVE_RIGHT: "เลื่อนขวา",
    },
  },
};

i18n.use(Backend).use(initReactI18next).init({
  lng: "EN",
  fallbackLng: "EN",
  debug: true,
  backend: {
    // No need to specify loadPath when using variable translations
  },
  resources: translations, // Set the translations directly
});

export default i18n;
