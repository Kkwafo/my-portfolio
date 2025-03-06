import React from 'react';

interface ProjectTagProps {
  name: string;
  className: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-6 py-3 text-xl rounded-full border-2 cursor-pointer transition ${isSelected ? "text-white border-primary-500" : "text-[#01101b] border-gray-600 hover:border-white"
        }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
