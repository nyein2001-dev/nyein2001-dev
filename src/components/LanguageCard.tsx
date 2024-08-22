import React from 'react';
import LanguageCardItem from './LanguageCardItem.tsx';
import { useResumeStore } from '../stores/ResumeContext';
import { useTranslation } from "react-i18next";

const LanguageSection: React.FC = () => {
  const resumeStore = useResumeStore();
  const { t } = useTranslation();
  const { resume } = resumeStore;

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="mb-4 text-lg font-semibold dark:text-night-50">{t("language")}</h2>
      <div className="flex flex-wrap gap-2">
        {resume.language.map((item, index) => (
          <LanguageCardItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LanguageSection;
