"use client";

import React from "react";
import Image from "next/image";
import IconsInfo, { Icon } from "@/data/icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-all 
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">{t("skills")}</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {IconsInfo.map((icon: Icon) => (
          <div
            key={icon.id}
            className={`flex flex-col items-center text-center p-4 rounded-lg shadow-lg transition 
              transform hover:scale-105 hover:shadow-xl 
              ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-200"}`}
          >
            <Image
              src={icon.ImgUrl}
              alt={icon.alt}
              width={60}
              height={60}
              className="rounded-md shadow-md"
              loading="lazy"
              sizes="(max-width: 600px) 100vw, 60px"
            />
            <h2
              className={`text-lg font-bold mt-2 transition 
                ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {icon.Title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
