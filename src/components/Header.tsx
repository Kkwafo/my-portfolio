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
            <XMarkIcon className="w-8 h-8 text-white" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Menú principal */}
        <div className={`absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent p-4 md:flex md:space-x-6 text-lg
          ${menuOpen ? "block" : "hidden"} transition-all`}
        >
          <Link href="/projects" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("projects")}</Link>
          <Link href="/about" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("about")}</Link>
          <Link href="/skills" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("skills")}</Link>
          <Link href="/contact" className="block py-2 md:py-0 hover:text-blue-400 transition">{t("contact")}</Link>
        </div>

        {/* Controles de idioma y tema */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Selector de idioma */}
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 transition cursor-pointer hover:bg-gray-700"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          {/* Botón Modo Oscuro */}
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
