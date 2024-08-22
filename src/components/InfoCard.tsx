import React from 'react';
import InfoCardItem from './InfoCardItem.tsx';
import { useResumeStore } from '../stores/ResumeContext.js';
import { useTranslation } from 'react-i18next';

const ResumeInformation: React.FC = () => {
  const { t } = useTranslation();
  const resumeStore = useResumeStore();
  const { resume } = resumeStore;

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      {/* Start info title */}
      <h2 className="mb-4 text-lg font-semibold dark:text-night-50">
        {t('information')}
      </h2>
      <div className="space-y-4">
        {resume.information.map((item, index) => (
          <InfoCardItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ResumeInformation;
