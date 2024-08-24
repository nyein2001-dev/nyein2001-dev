import React from "react";
import { useResumeStore } from "../stores/ResumeContext";
import { useTranslation } from "react-i18next";

const SkillsCard: React.FC = () => {
  const { resume } = useResumeStore();
  const { t } = useTranslation();

  return (
    <div className="rounded-lg bg-white p-5 dark:bg-night-800">
      <h2 className="text-base font-medium dark:text-night-50">
        {t("skills")}
      </h2>
      <div className="border-b mt-2 border-gray-200 dark:border-night-600"></div>

      {["frontend", "backend", "tools", "development"].map((category) => (
        <div key={category} className="mt-4">
          <h6 className="text-sm mb-1 font-medium dark:text-night-50">
            {t(category)}
          </h6>
          <div className="-m-1 flex flex-wrap">
            {resume.skill[category].map((value, index) => (
              <span
                key={index}
                className="inline-flex rounded-md px-2 py-1 text-xs font-normal m-1 bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
