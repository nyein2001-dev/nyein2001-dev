import React, { useMemo } from 'react';
import EducationCardItem from './EducationCardItem.tsx';
import { useResumeStore } from '../stores/ResumeContext.js'; // Adjust the path as needed
import { useTranslation } from "react-i18next";

const EducationCard = () => {
  const resumeStore = useResumeStore();
  const { t } = useTranslation();
  const resume = resumeStore.resume; // Assuming `resume` is available directly from the store

  const total = useMemo(() => resume.education.length, [resume.education]);

  return (
    <div className="rounded-xl bg-white mb-5 p-7 dark:bg-night-800">
      <h2 className="mb-5 text-lg font-semibold dark:text-night-50">{t("education")}</h2>
      {resume.education.map((item, index) => (
        <EducationCardItem
          key={index}
          item={item}
          separator={total > index + 1}
        />
      ))}
    </div>
  );
};

export default EducationCard;
