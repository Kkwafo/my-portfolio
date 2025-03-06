"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <header className={`p-4 shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition">{t("portfolio")}</span>
        </Link>

        <div className="space-x-6 text-lg">
          <Link href="/projects" className="hover:text-blue-400 transition">{t("projects")}</Link>
          <Link href="/about" className="hover:text-blue-400 transition">{t("about")}</Link>
          <Link href="/skills" className="hover:text-blue-400 transition">{t("skills")}</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">{t("contact")}</Link>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer hover:bg-gray-700"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
          >
            {darkMode ? "☀️ OnWork" : "🌙 OnWork"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
