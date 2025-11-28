import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from '../public/locales/ru/translation.json'
import ua from '../public/locales/ua/translation.json'
import pl from '../public/locales/pl/translation.json'

const storedLanguage = localStorage.getItem('language') || 'ru';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      ru: {
        translation: ru
      },
      ua: {
        translation: ua
      },
      pl: {
        translation: pl
      }
    },
    lng: storedLanguage, 
  });

  export default i18n;