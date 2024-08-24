import React, { useState } from "react";
import InfoCardItem from "./InfoCardItem.tsx";
import HeroIcon from "./HeroIcon.tsx";
import { useResumeStore } from "../stores/ResumeContext";
import { useTranslation } from "react-i18next";
import Lightbox from "react-modal";

const ResumeCard = () => {
  const { t } = useTranslation();
  const resumeStore = useResumeStore();
  const resume = resumeStore.resume;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="mb-4 text-lg font-semibold dark:text-night-50">
        {t("resume")}
      </h2>
      <InfoCardItem key={0} item={resume.cv}>
        <div className="flex items-center space-x-4">
          <a
            href={resume.cv.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-primary-500/20 py-2.5 px-2.5 text-primary-500"
          >
            <HeroIcon
              icon="ArrowDownTrayIcon"
              className="stroke- h-5 w-5 hover:animate-pulse"
            />
          </a>
          <button
            onClick={openLightbox}
            className="cursor-pointer rounded-full bg-primary-500/20 py-2.5 px-2.5 text-primary-500"
          >
            <HeroIcon
              icon="EyeIcon"
              className="stroke- h-5 w-5 hover:animate-pulse"
            />
          </button>
        </div>
      </InfoCardItem>

      <Lightbox
        isOpen={isLightboxOpen}
        onRequestClose={closeLightbox}
        contentLabel="Resume PDF"
        className="lightbox-content"
        overlayClassName="lightbox-overlay"
      >
        <iframe src={resume.cv.url} width="100%" height="100%" title="Resume" />
        <button onClick={closeLightbox} className="close-lightbox-button">
          Close
        </button>
      </Lightbox>
    </div>
  );
};

export default ResumeCard;
