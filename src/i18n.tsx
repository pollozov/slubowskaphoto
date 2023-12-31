import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "pl",
        lng: "pl",
        interpolation: {
        escapeValue: false,
        },
        resources: {
            pl: {
                translation: {
                    home: 'Strona glowna',
                    about: 'O mnie',
                    portfolio: 'Portfolio',
                    price: 'Oferta',
                    contact: 'Kontakt',
                    home_name: 'Beata Ślubowska',
                    home_description: 'FOTOGRAFIA',
                }
            },
            en: {
                translation: {
                    home: 'Home',
                    about: 'About me',
                    portfolio: 'Portfolio',
                    price: 'Price',
                    contact: 'Contact',
                    home_name: 'Beata Ślubowska',
                    home_description: 'PHOTOGRAPHY',
                }
            },
        },
    });

export default i18n;