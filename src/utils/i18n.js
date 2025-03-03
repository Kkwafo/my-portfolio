import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      //Header
      welcome: "Welcome to my Portfolio",
      description: "Showcasing my projects and skills.",
      about: "About Me",
      contact: "Contact Me",
      projects: "My Projects",
      skills: "Skills",
      portfolio: "My Portfolio",
      // Agrega más traducciones aquí
    }
  },
  es: {
    translation: {
      //Header
      welcome: "Bienvenido a mi Portafolio",
      description: "Mostrando mis proyectos y habilidades.",
      about: "Sobre Mí",
      contact: "Contáctame",
      projects: "Mis Proyectos",
      skills: "Habilidades",
      portfolio: "Mi Portafolio",

      // Agrega más traducciones aquí
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma por defecto
  fallbackLng: "en", // Si no encuentra el idioma, usa inglés
  interpolation: { escapeValue: false }
});

export default i18n;
