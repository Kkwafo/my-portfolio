import React, { useState, useEffect } from "react";
import Image from "next/image";
import images from '@/data/images';
import { useTranslation } from 'react-i18next';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const [ activeTab, setActiveTab ] = useState(t("educationConventional"));
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
    setActiveTab(t("educationConventional"));
  }, [ t ]);

  return (
    <section className="bg-gray-200 text-gray-900 p-10 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        {[
          { key: "educationConventional", label: t("educationConventional") },
          { key: "educationDigital", label: t("educationDigital") },
          { key: "environmentHobbies", label: t("environmentHobbies") }
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 mx-2 rounded-md ${activeTab === tab.label ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
              }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>


      {activeTab === t("educationConventional") && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-left">
            <h1 className="text-3xl font-bold mb-4">{t("about")}</h1>
            <p className="text-lg leading-relaxed max-w-2xl text-justify">
              {t("aboutDescription")} <br />
              {t("aboutDescription2")}<br />
              <br />
            </p>
            <i className="text-sm max-w-2xl font-bold text-center block">
              {t("aboutDescription3")}<br />
            </i>

          </div>
          <div className="md:w-1/3 flex justify-center p-6">
            <iframe
              allow="autoplay; gyroscope;"
              allowFullScreen
              height="600px"
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/67c47d3ddc5c31c9a901d470"
              style={{ border: 0, width: "100%" }}
              title="Classroom 2024"
            ></iframe>
          </div>
        </div>
      )}

      {activeTab === t("educationDigital") && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-left">
            <h1 className="text-3xl font-bold mb-4">{t("aiTitle")}</h1>
            <p className="text-lg leading-relaxed max-w-2xl text-justify">
              {t("aiDescription")} <br />
              {t("aiDescription2")}<br />
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center p-6">
            <iframe
              allow="autoplay; gyroscope;"
              allowFullScreen
              height="600px"
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/67c4814bee97ce58e3c425c1"
              style={{ border: 0, width: "100%" }}
              title="AI Technology"
            ></iframe>
          </div>
        </div>
      )}

      {activeTab === t("environmentHobbies") && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-left">
            <h1 className="text-3xl font-bold mb-4">{t("environmentHobbies")}</h1>
            <p className="text-lg leading-relaxed max-w-2xl text-justify">
              {t("environmentHobbiesDescription")}<br />
              {t("environmentHobbiesDescription2")}<br />
              {t("environmentHobbiesDescription3")}<br />
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center p-6 relative">
            <button onClick={showPrevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">◀</button>
            <Image
              src={images[ currentImageIndex ]}
              alt="Nature Scene"
              width={300}
              height={300}
              className="rounded-lg cursor-pointer hover:opacity-80 transition object-cover"
              onClick={() => openModal(images[ currentImageIndex ])}
            />
            <button onClick={showNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">▶</button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div className="relative">
            <button onClick={closeModal} className="absolute top-0 right-0 bg-white text-black p-2 rounded-full">✖</button>
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
