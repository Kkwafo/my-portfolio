"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <header className={`p-4 shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition">
          {t("portfolio")}
        </Link>

        {/* Botón menú hamburguesa en móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block focus:outline-none"
        >
          {menuOpen ? (
            <XMarkIcon className={`w-8 h-8 ${darkMode ? "text-white" : "text-black"}`} />
          ) : (
            <Bars3Icon className={`w-8 h-8 ${darkMode ? "text-white" : "text-black"}`} />
          )}
        </button>

        {/* Menú principal */}
        <div className={`fixed md:static top-16 left-0 w-full p-4 md:flex md:space-x-6 text-lg 
          ${menuOpen ? "block" : "hidden"} transition-all 
          ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
        >
          <Link href="/projects" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("projects")}</Link>
          <Link href="/about" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("about")}</Link>
          <Link href="/skills" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("skills")}</Link>
          <Link href="/contact" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("contact")}</Link>

          {/* Controles de idioma y tema en mobile */}
          <div className="mt-4 md:hidden flex flex-col space-y-2">
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 transition cursor-pointer hover:bg-gray-600"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
              {darkMode ? "☀️ OFF" : "🌙 ON"}
            </button>
          </div>
        </div>

        {/* Controles de idioma y tema en desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 transition cursor-pointer hover:bg-gray-700"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
          >
            {darkMode ? "☀️ OFF" : "🌙 ON"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
