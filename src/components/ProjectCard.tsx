import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl?: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl shadow-lg overflow-hidden">
      <div
        className="h-52 md:h-72 bg-cover bg-center relative group"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">

          {/* Contenedor flexbox centrado */}
          <div className="flex items-center justify-center space-x-4">
            {gitUrl && (
              <Link href={gitUrl} target="_blank" className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
              </Link>
            )}

            <Link href={previewUrl} target="_blank" className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 text-white">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
