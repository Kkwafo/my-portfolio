import React from "react";
import Image from "next/image";
import IconsInfo, { Icon } from "@/data/icons";
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">{t("skills")}</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {IconsInfo.map((icon: Icon) => (
          <div
            key={icon.id}
            className="flex flex-col items-center text-center p-4 bg-gray-800 shadow-lg rounded-lg transition transform hover:scale-105"
          >
            <Image
              src={icon.ImgUrl}
              alt={icon.alt}
              width={60}
              height={60}
              className="rounded-md shadow-md"
            />
            <h2 className="text-lg font-bold mt-2 text-gray-200">{icon.Title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
