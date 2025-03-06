import React from 'react';

interface ProjectTagProps {
  name: string;
  className?: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`
        px-6 py-3 text-xl font-semibold rounded-full border-2 cursor-pointer transition-all 
        ${isSelected
          ? "bg-blue-500 text-white border-blue-600 shadow-md"
          : "bg-gray-200 text-gray-900 border-gray-500 hover:bg-blue-400 hover:text-white hover:border-blue-500"
        }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
