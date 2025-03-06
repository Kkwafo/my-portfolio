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
          <LanguageSwitcher />
          <button
            onClick={() => dispatch(toggleTheme())}
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