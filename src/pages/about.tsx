import React, { useState, useEffect } from "react";
import Image from "next/image";
import images from '@/data/images';

const AboutMe: React.FC = () => {
  const [ activeTab, setActiveTab ] = useState("Education & Conventional Technology");
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ modalImage, setModalImage ] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section className="bg-gray-200 text-gray-900 p-10 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        {[ "Education & Conventional Technology", "Education & Digital Technology", "Environment & Hobbies" ].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 rounded-md ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Education & Conventional Technology" && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-left">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg leading-relaxed max-w-2xl">
              I am a passionate and driven individual, always eager to grow and innovate. While my true calling lies in developing web applications, I have also pursued a path in education, understanding that knowledge is one of the most powerful tools for change. <br /><br />
              Although I am not currently practicing as a teacher, my passion for technology extends beyond coding. I firmly believe in empowering others to explore new technologies, helping them navigate the ever-evolving digital landscape. My goal is not just to teach programming but to foster a mindset of problem-solving, critical thinking, and innovation. <br /><br />
              Technology is not just about writing code; it is about building a sustainable future. I am deeply committed to spreading awareness of renewable energy, environmental sustainability, and fostering a culture of respect and collaboration. The world progresses when we work together, supporting each other as we navigate challenges, much like a team rowing against the tide, seeking the right currents to move forward.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center p-6">
            <iframe
              allow="autoplay; gyroscope;"
              allowFullScreen
              height="300px"
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/67c47d3ddc5c31c9a901d470"
              style={{ border: 0, width: "100%" }}
              title="Classroom 2024"
            ></iframe>
          </div>
        </div>
      )}

      {activeTab === "Education & Digital Technology" && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-left">
            <h1 className="text-3xl font-bold mb-4">The Role of AI in Technology</h1>
            <p className="text-lg leading-relaxed max-w-2xl">
              In the realm of Information and Communication Technologies (ICTs), we recognize the importance of various branches that shape our world. Artificial Intelligence (AI) has been evolving rapidly in recent years, but its origins trace back to 1956 when pioneers like John McCarthy, Marvin Minsky, and Arthur Samuel laid the groundwork for machine learning and cognitive computing. <br /><br />
              Today, AI is revolutionizing industries, and it is crucial to integrate computational logic and programming into education. By understanding how computers process information, we empower future generations to think critically, solve complex problems, and innovate in ways that extend beyond traditional software development.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center p-6">
            <iframe
              allow="autoplay; gyroscope;"
              allowFullScreen
              height="300px"
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/67c4814bee97ce58e3c425c1"
              style={{ border: 0, width: "100%" }}
              title="AI Technology"
            ></iframe>
          </div>
        </div>
      )}

      {activeTab === "Environment & Hobbies" && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-left">
            <h1 className="text-3xl font-bold mb-4">Passions Beyond Tech</h1>
            <p className="text-lg leading-relaxed max-w-2xl">
              While one of my greatest passions is the culinary arts—cooking for my loved ones and sharing moments through flavors—I also have a deep appreciation for nature. There is an undeniable magic in the ever-changing landscapes, the golden glow of a sunset, or the quiet hum of a forest at dawn.

              As an amateur photographer, I find joy in capturing these fleeting moments, knowing that each sunrise, each ripple in the water, each dance of the wind through the trees is unique and will never exist the same way again. Photography allows me to hold onto the ephemeral, preserving the beauty of nature in a way that transcends time.

              Yet, admiration alone is not enough; we must also protect what inspires us. I believe human progress and environmental preservation must go hand in hand. Reducing our carbon footprint, embracing sustainability, and advocating for renewable energy are not just responsibilities but essential commitments to the future. True progress isn’t just about innovation—it’s about ensuring that the beauty we capture today remains for generations to come.</p>
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
