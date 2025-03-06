"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage(); // ✅ Usamos los nombres correctos del contexto
  const { darkMode } = useTheme();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    changeLanguage(selectedLanguage); // ✅ Ahora usa la función correcta del contexto
  };

  return (
    <div className="relative">
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
        className={`px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 transition cursor-pointer 
          ${darkMode ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700" : "bg-gray-100 text-gray-900 border-gray-400 hover:bg-gray-300"}`}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
