import React from "react";
import { Link } from "react-router-dom";
import HeroIcon from "./HeroIcon.tsx";
import { useResumeStore } from "../stores/ResumeContext";
import { useTranslation } from "react-i18next";

const AboutCard = () => {
  const { resume } = useResumeStore();
  const { t } = useTranslation();

  const menu = [
    { route: "/", name: "menu.experience", icon: "BriefcaseIcon" },
    { route: "education", name: "menu.education", icon: "AcademicCapIcon" },
    { route: "project", name: "menu.project", icon: "CodeBracketIcon" },
  ];

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="mb-4 text-lg font-semibold dark:text-night-50">
        {t("about")}
      </h2>
      <p className="mb-5 text-sm text-gray-600 dark:text-night-200">
        {resume.profile.aboutMe}
      </p>
      <ul className="inline-flex space-x-2 font-semibold">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.route}
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-gray-100 px-2 py-1.5 text-xs font-medium text-gray-400 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:border-night-700 dark:text-night-400 dark:hover:border-primary-500 dark:hover:bg-primary-500/20 dark:hover:text-primary-500"
            >
              <HeroIcon icon={item.icon} className="hidden h-4 w-4 sm:block" />
              <span>{t(item.name)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutCard;
