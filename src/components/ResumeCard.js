import React from 'react';
import InfoCardItem from './InfoCardItem.tsx';
import HeroIcon from './HeroIcon';
import { useResumeStore } from '../stores/ResumeContext';
import { useTranslation } from 'react-i18next';

const ResumeCard = () => {
  const { t } = useTranslation();
  const resumeStore = useResumeStore();
  const resume = resumeStore.resume;

  return (
    <div className="card">
      <h2 className="mb-4 text-lg font-semibold dark:text-night-50">{t('resume')}</h2>
      <InfoCardItem key={0} item={resume.cv}>
        <a
          href={resume.cv.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full bg-primary-500/20 py-2.5 px-2.5 text-primary-500"
        >
          <HeroIcon icon="ArrowDownTrayIcon" className="stroke- h-5 w-5 hover:animate-pulse" />
        </a>
      </InfoCardItem>
    </div>
  );
};

export default ResumeCard;