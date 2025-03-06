"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from 'react-i18next';
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { t, i18n } = useTranslation();
  const { darkMode } = useTheme();
  const [ animationKey, setAnimationKey ] = useState(0);

  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [ i18n.language ]);

  return (
    <section className={`py-12 transition-all ${darkMode ? "bg-gray-950 text-gray-300" : "bg-gray-100 text-gray-900"}`}>

      {/* Contenedor Principal */}
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 rounded-xl border 
        ${darkMode ? "border-gray-800 shadow-xl bg-gray-900" : "border-gray-300 shadow-md bg-white"} relative`}>

        {/* Nombre y Animación de Cargo */}
        <div className="w-full md:w-1/2 text-center md:text-left p-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {t("nameIs")} <span className="text-blue-400">Kofi Kwafo Awua</span>
          </h1>
          <div className="text-lg sm:text-xl mt-2 h-11 overflow-hidden flex items-center">
            <TypeAnimation
              key={animationKey}
              sequence={[
                t("roleFullstack"), 1000,
                t("roleProfessor"), 1000,
                t("roleCheerful"), 1000,
                t("roleChef"), 1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
          </div>
        </div>

        {/* Imagen de Perfil */}
        <div className="w-full md:w-1/3 flex justify-center p-6">
          <Image
            src="https://kkwafo.github.io/My-css-personal-site/images/cvphoto.png"
            alt="Kofi Kwafo Awua"
            width={180}
            height={180}
            className="rounded-full shadow-lg border transition 
              ${darkMode ? 'border-gray-700' : 'border-gray-300'}"
            loading="lazy"
          />
        </div>
      </div>

      {/* Sección de Tecnologías */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-6 items-start text-left">

        {/* Frontend Stack */}
        <div className={`p-6 rounded-lg shadow-md flex flex-col transition 
          ${darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"}`}>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-400">{t("frontEnd")}</h3>
          <ul className="text-base sm:text-lg space-y-2 flex-1">
            <li>React, Next.js, TypeScript</li>
            <li>JavaScript (ES6+), Modern ECMAScript Features</li>
            <li>Tailwind CSS, Redux, Material UI</li>
            <li>Component-driven development & Design Systems</li>
            <li>Performance Optimization & Lazy Loading</li>
            <li>Responsive Web Design, UI/UX Principles</li>
          </ul>
        </div>

        {/* Backend Stack */}
        <div className={`p-6 rounded-lg shadow-md flex flex-col transition 
          ${darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"}`}>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-400">{t("backEnd")}</h3>
          <ul className="text-base sm:text-lg space-y-2 flex-1">
            <li>Node.js, Express, RESTful APIs, GraphQL</li>
            <li>Spring 3 (Spring Boot, Spring Batch), .NET</li>
            <li>Microservices Architecture, Distributed Systems</li>
            <li>Database Management: PostgreSQL, MySQL, SQL Server, MongoDB</li>
            <li>Cloud & DevOps: Docker, Kubernetes, AWS, CI/CD Pipelines</li>
            <li>Automated Reporting & Data Processing: CSV, XLSX, PDF Generation</li>
          </ul>
        </div>
      </div>

      {/* Experiencia Profesional */}
      <div className="max-w-5xl mx-auto text-center mt-12 px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">{t("professionalExperience")}</h3>
        <p
          className="text-base sm:text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: t("professionalDescription") }}
        ></p>
      </div>
    </section>
  );
}
