"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleTheme } from '@/store/themeSlice';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <header className={`p-4 shadow-md transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-green-900 text-white"}`}>
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        {/* Logo / Home */}
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">{t("portfolio")}</span>
        </Link>

        {/* Navegación */}
        <div className="space-x-4">
          <Link href="/projects" className="hover:underline">{t("projects")}</Link>
          <Link href="/about" className="hover:underline">{t("about")}</Link>
          <Link href="/skills" className="hover:underline">{t("skills")}</Link>
          <Link href="/contact" className="hover:underline">{t("contact")}</Link>
        </div>

        {/* Selector de Idioma y Tema */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <button
            onClick={() => dispatch(toggleTheme())}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-600 transition-all"
          >
            {/* {darkMode ? "☀️ Light" : "🌙 Dark"} */}
            {darkMode ? "☀️ OnWork" : "🌙 onWork"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
