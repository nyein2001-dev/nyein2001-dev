import React from "react";
import { useResumeStore } from "../stores/ResumeContext"; // Assuming you have Zustand or similar state management

const SkillsCard: React.FC = () => {
  const { resume } = useResumeStore();

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="mb-4 text-lg font-semibold dark:text-night-50">Skills</h2>
      <div className="-m-2 flex flex-wrap">
        {resume.skill.map((value, index) => (
          <span
            key={index}
            className="rounded-md font-medium text-sm px-2 py-0.5 badge m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
