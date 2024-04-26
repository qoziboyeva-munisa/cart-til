import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
import uzTranlation from '../locales/uz.json';
import ruTranlation from '../locales/ru.json';
import enTranlation from '../locales/en.json';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';


const laungage = localStorage.getItem('i18nextLng') || 'uz'
i18n
.use(Backend)
.use(i18nextBrowserLanguageDetector)
.use(i18nextBrowserLanguagedetector)
.use(initReactI18next)
.init({
    fallbacklng:'en',
    lng:laungage,
    debug: true,
    resources:{
        uz:{translation : uzTranlation},
        en:{translation : enTranlation},
        ru:{translation : ruTranlation}
    }
})
