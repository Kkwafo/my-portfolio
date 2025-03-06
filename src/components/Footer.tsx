"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const year = new Date().getFullYear();

  const githubIcon = darkMode ? "/icons/github-whiteIcon.svg" : "/icons/github.png";

  return (
    <footer className={`py-6 text-center transition-all shadow-lg 
      ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-800"}`}>

      <p className="text-sm">&copy; {year} Kofi Kwafo Awua. {t("rightsReserved")}</p>

      <div className="flex justify-center space-x-6 mt-3">
        <Link href="https://github.com/Kkwafo" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-7 h-7 hover:scale-110 hover:opacity-80 transition-transform"
            src={githubIcon}
            alt="GitHub"
            width={28}
            height={28}
          />
        </Link>

        <Link href="https://www.linkedin.com/in/kofi-kwafo-awua-3b4350151/" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-7 h-7 hover:scale-110 hover:opacity-80 transition-transform"
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={28}
            height={28}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
