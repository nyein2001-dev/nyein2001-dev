import React from "react";
import { useResumeStore } from "../stores/ResumeContext";
import { useTranslation } from "react-i18next";

const SkillsCard: React.FC = () => {
  const { resume } = useResumeStore();
  const { t } = useTranslation();

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="text-lg font-semibold -mt-4 dark:text-night-50">
        {t("skills")}
      </h2>
      <div className="border-b my-2 border-dashed border-gray-200 dark:border-night-600"></div>
      <h6 className="mb-2 text-lg font-semibold dark:text-night-50">
        {t("frontend")}
      </h6>
      <div className="-m-2 flex flex-wrap">
        {resume.skill.frontend.map((value, index) => (
          <span
            key={index}
            className="inline-flex rounded-lg px-2 py-1 text-xs font-medium m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            {value}
          </span>
        ))}
      </div>
      <div className="border-b my-3 border-dashed border-gray-200 dark:border-night-600"></div>
      <h6 className="mb-2 text-lg font-semibold dark:text-night-50">
        {t("backend")}
      </h6>
      <div className="-m-2 flex flex-wrap">
        {resume.skill.backend.map((value, index) => (
          <span
            key={index}
            className="inline-flex rounded-lg px-2 py-1 text-xs font-medium m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            {value}
          </span>
        ))}
      </div>
      <div className="border-b my-3 border-dashed border-gray-200 dark:border-night-600"></div>
      <h6 className="mb-2 text-lg font-semibold dark:text-night-50">
        {t("tools")}
      </h6>
      <div className="-m-2 flex flex-wrap">
        {resume.skill.tools.map((value, index) => (
          <span
            key={index}
            className="inline-flex rounded-lg px-2 py-1 text-xs font-medium m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            {value}
          </span>
        ))}
      </div>
      <div className="border-b my-3 border-dashed border-gray-200 dark:border-night-600"></div>
      <h6 className="mb-2 text-lg font-semibold dark:text-night-50">
        {t("development")}
      </h6>
      <div className="-m-2 flex flex-wrap">
        {resume.skill.development.map((value, index) => (
          <span
            key={index}
            className="inline-flex rounded-lg px-2 py-1 text-xs font-medium m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
