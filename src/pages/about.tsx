import React, { useState, useEffect } from "react";
import Image from "next/image";
import images from '@/data/images';
import { useTranslation } from 'react-i18next';
import { useTheme } from "@/context/ThemeContext";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme(); // Usa el modo oscuro global

  const [ activeTab, setActiveTab ] = useState("educationConventional");
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ modalImage, setModalImage ] = useState("");

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const openModal = (img: string) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  useEffect(() => {
    setActiveTab("educationConventional");
  }, []);

  return (
    <section className={`p-6 sm:p-8 md:p-10 rounded-lg shadow-xl max-w-5xl mx-auto transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"}`}>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {[ "educationConventional", "educationDigital", "environmentHobbies" ].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md text-sm sm:text-base transition-all ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-blue-500"}`}
            onClick={() => setActiveTab(tab)}
          >
            {t(tab)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-blue-400">{t(`${activeTab}`) || ""}</h1>
          <p className="text-lg leading-relaxed">{t(`${activeTab}Description`) || ""}</p>
          {t(`${activeTab}Description2`, { defaultValue: "" }) && (
            <p className="text-lg leading-relaxed">{t(`${activeTab}Description2`)}</p>
          )}
          {t(`${activeTab}Description3`, { defaultValue: "" }) && (
            <p className="italic text-sm text-gray-400 mt-2">{t(`${activeTab}Description3`)}</p>
          )}
        </div>

        <div className="w-full flex justify-center p-4">
          {activeTab === "educationConventional" && (
            <iframe
              className="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg"
              allow="autoplay; gyroscope;"
              allowFullScreen
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/67c47d3ddc5c31c9a901d470"
              title="Classroom 2024"
            ></iframe>
          )}

          {activeTab === "educationDigital" && (
            <iframe
              className="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg"
              allow="autoplay; gyroscope;"
              allowFullScreen
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/67c4814bee97ce58e3c425c1"
              title="AI Technology"
            ></iframe>
          )}

          {activeTab === "environmentHobbies" && (
            <div className="relative flex justify-center items-center">
              <button onClick={showPrevImage} className="absolute left-0 bg-gray-700 text-white p-2 rounded-full">◀</button>
              <Image
                src={images[ currentImageIndex ]}
                alt="Nature Scene"
                width={350}
                height={350}
                className="rounded-lg shadow-md object-cover cursor-pointer hover:opacity-80 transition"
                onClick={() => openModal(images[ currentImageIndex ])}
              />
              <button onClick={showNextImage} className="absolute right-0 bg-gray-700 text-white p-2 rounded-full">▶</button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div className="relative p-4 bg-gray-800 rounded-lg">
            <button onClick={closeModal} className="absolute top-2 right-2 bg-gray-600 text-gray-200 p-2 rounded-full">✖</button>
            <Image
              src={modalImage}
              alt="Expanded Nature Image"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
