"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import projectsInfo from '@/data/projects';
import ProjectTag from '@/components/ProjectTag';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection: React.FC = () => {
  const [ selectedTag, setSelectedTag ] = useState("All");

  const handleTagChange = (tag: string) => setSelectedTag(tag);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = selectedTag === "All"
    ? projectsInfo
    : projectsInfo.filter(project => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-8">My Projects</h2>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3 py-4">
        {[ "All", "Web", "Fullstack", "Backend", "Frontend" ].map(tag => (
          <ProjectTag key={tag} name={tag} isSelected={selectedTag === tag} onClick={handleTagChange} />
        ))}
      </div>

      {/* Project Cards */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.code}
              previewUrl={project.link}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
