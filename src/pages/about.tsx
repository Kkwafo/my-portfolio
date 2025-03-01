import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="bg-gray-200 text-gray-900 p-10 text-center rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg leading-relaxed max-w-2xl mx-auto">
        Funny and motivated person. I enjoy being part of a team, fast at
        learning and solving problems. Passionate about creating web
        applications. <br />
        Always eager to learn from anyone with the objective of improving my
        skills and being helpful. <br />
        I want to grow in my career and have the opportunity to learn and work
        with different technologies.
      </p>
    </section>
  );
};

export default AboutMe;
