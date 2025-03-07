"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projectsInfo from "@/data/projects";
import ProjectTag from "@/components/ProjectTag";
import ProjectCard from "@/components/ProjectCard";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";

const ProjectsSection: React.FC = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const [ selectedTag, setSelectedTag ] = useState("All");

  const handleTagChange = (tag: string) => setSelectedTag(tag);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects =
    selectedTag === "All"
      ? projectsInfo
      : projectsInfo.filter((project) => project.tags.includes(selectedTag));

  return (
    <section
      id="projects"
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
    >
      <h2 className="text-center text-4xl font-bold text-blue-400 mb-8">
        {t("projects")}
      </h2>

      {/* Filtros de Proyectos */}
      <div className="flex flex-wrap justify-center gap-3 py-4">
        {[ "All", "Web", "Fullstack", "Backend", "Frontend" ].map((tag) => (
          <ProjectTag
            key={tag}
            name={t(`${tag}`)}
            isSelected={selectedTag === tag}
            onClick={() => handleTagChange(tag)}
            className={`px-5 py-2 text-sm sm:text-base rounded-full border-2 cursor-pointer transition 
              ${selectedTag === tag
                ? "bg-blue-500 text-white border-blue-600 shadow-md"
                : "bg-gray-200 text-gray-900 border-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-500"
              }`}
          />
        ))}
      </div>

      {/* Tarjetas de Proyectos */}
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105 ${darkMode ? "bg-gray-800" : "bg-white"
              }`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image ?? "/NoUi/No_UI_Available.jpg"} // Imagen por defecto
              gitUrl={project.code} // Mantenemos `code` como URL de GitHub
              previewUrl={project.link} // Mantenemos `link` como vista previa
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
