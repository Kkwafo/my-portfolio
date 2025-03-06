import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

interface ProjectCardProps {
  imgUrl?: string; // Ahora es opcional
  title: string;
  description: string;
  gitUrl?: string;
  previewUrl?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl: image, title, description, gitUrl, previewUrl }) => {
  const { darkMode } = useTheme();
  const noUiImage = "/NoUi/No_UI_Available.jpg"; // Imagen por defecto en /public

  // Verificamos si hay imagen, de lo contrario usamos la imagen por defecto
  const imageSrc = image && image.trim() !== "" ? image : noUiImage;

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform hover:scale-105
      ${darkMode ? "bg-gray-800" : "bg-white"}`}>

      {/* Imagen del Proyecto */}
      <div className="h-52 md:h-72 relative group flex justify-center items-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={previewUrl ? title : "No UI Available"}
          width={400}
          height={300}
          objectFit="cover"
          className="rounded-t-xl w-full h-full"
          loading="lazy"
        />

        {/* Overlay con botones solo si tiene Preview */}
        {previewUrl && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 flex items-center justify-center opacity-0 
              group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center space-x-4">

              {/* Botón Código */}
              {gitUrl && (
                <Link href={gitUrl} target="_blank" className="h-14 w-14 border-2 rounded-full flex items-center justify-center transition
                  border-gray-400 hover:border-blue-400 hover:bg-blue-500">
                  <CodeBracketIcon className="h-10 w-10 text-gray-400 hover:text-white" />
                </Link>
              )}

              {/* Botón Vista Previa */}
              <Link href={previewUrl} target="_blank" className="h-14 w-14 border-2 rounded-full flex items-center justify-center transition
                border-gray-400 hover:border-blue-400 hover:bg-blue-500">
                <EyeIcon className="h-10 w-10 text-gray-400 hover:text-white" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Información del Proyecto */}
      <div className="p-4">
        <h5 className="text-xl font-semibold text-blue-400">{title}</h5>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{description}</p>

        {/* Botón de Código para proyectos sin preview */}
        {!previewUrl && gitUrl && (
          <div className="mt-4 text-center">
            <Link href={gitUrl} target="_blank" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition">
              View Code
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
