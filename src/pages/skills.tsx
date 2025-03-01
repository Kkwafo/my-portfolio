import React from "react";
import Image from "next/image";
import IconsInfo, { Icon } from "@/data/icons"; // ✅ Importación corregida

const Skills: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">My Skills</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {IconsInfo.map((icon: Icon) => (
          <div
            key={icon.id}
            className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-md"
          >
            <Image
              src={icon.ImgUrl}
              alt={icon.alt}
              width={60}
              height={60}
              className="rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{icon.Title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
