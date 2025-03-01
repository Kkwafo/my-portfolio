import React from "react";
import Image from "next/image";
import projects from '@/data/projects';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg text-gray-600 mb-10">
          Here are some of the projects I&apos;ve worked on recently.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project: Project) => (
          <article
            key={project.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="w-full h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-bold mt-4">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
