import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [ animationKey, setAnimationKey ] = useState(0);

  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [ i18n.language ]);

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 rounded-xl border border-gray-700 shadow-lg bg-gray-800 relative">
        <div className="md:w-1/2 text-left p-6 relative z-10">
          <h1 className="text-5xl font-bold">
            {t("nameIs")} <span className="text-blue-400">Kofi Kwafo Awua</span>
          </h1>
          <div className="text-xl text-gray-300 mt-2 h-11 overflow-hidden flex items-center">
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

        <div className="md:w-1/3 flex justify-center p-6">
          <Image
            src="https://kkwafo.github.io/My-css-personal-site/images/cvphoto.png"
            alt="Kofi Kwafo Awua"
            width={180}
            height={180}
            className="rounded-full shadow-lg border border-gray-700"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-12 px-6 items-start text-left">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-400">{t("frontEnd")}</h3>
          <ul className="text-lg text-gray-300 space-y-2 flex-1">
            <li>React, Next.js, TypeScript</li>
            <li>JavaScript (ES6+), Modern ECMAScript Features</li>
            <li>Tailwind CSS, Redux, Material UI</li>
            <li>Component-driven development & Design Systems</li>
            <li>Performance Optimization & Lazy Loading</li>
            <li>Responsive Web Design, UI/UX Principles</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-400">{t("backEnd")}</h3>
          <ul className="text-lg text-gray-300 space-y-2 flex-1">
            <li>Node.js, Express, RESTful APIs, GraphQL</li>
            <li>Spring 3 (Spring Boot, Spring Batch), .NET</li>
            <li>Microservices Architecture, Distributed Systems</li>
            <li>Database Management: PostgreSQL, MySQL, SQL Server, MongoDB</li>
            <li>Cloud & DevOps: Docker, Kubernetes, AWS, CI/CD Pipelines</li>
            <li>Automated Reporting & Data Processing: CSV, XLSX, PDF Generation</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center mt-12 px-6">
        <h3 className="text-2xl font-semibold text-blue-400">{t("professionalExperience")}</h3>
        <p
          className="text-lg text-gray-300 mt-4"
          dangerouslySetInnerHTML={{ __html: t("professionalDescription") }}
        ></p>
      </div>
    </section>
  );
}
