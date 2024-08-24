import React, { useState } from "react";
import { useResumeStore } from "../stores/ResumeContext";
import SettingsPopover from "./SettingsPopover";
import { getImagePath } from "../helpers/Helper";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ProfileCard = () => {
  const { resume } = useResumeStore();
  const [visible, setVisible] = useState(false);
  const [imgs, setImgs] = useState([]);

  const onHide = () => setVisible(false);

  const showProfileImage = () => {
    setImgs([getImagePath(resume.profile.avatar)]);
    setVisible(true);
  };

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Start profile avatar */}
          <img
            src={getImagePath(resume.profile.avatar)}
            onClick={showProfileImage}
            alt="Avatar"
            className="h-14 w-14 cursor-pointer rounded-xl border-2 border-white shadow-sm dark:border-night-800
            transition-transform duration-300 ease-in-out hover:scale-110 hover:border-primary-500
            hover:shadow-lg hover:ring-2 hover:ring-primary-500 hover:ring-opacity-50 hover:animate-pulse"
          />
          {/* End profile avatar */}
          {visible && <Lightbox mainSrc={imgs[0]} onCloseRequest={onHide} />}
          <div>
            <div className="text-lg font-bold text-gray-900 dark:text-night-50">
              {resume.profile.name}
            </div>
            <div className="text-xs text-gray-400 dark:text-night-200">
              {resume.profile.job}
            </div>
            <div className="mt-2 inline-flex flex-wrap gap-1">
              {resume.profile.socialNetwork.map((social, index) => (
                <a
                  href={social.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-lg border border-gray-100 px-2 py-0.5 text-xs font-medium text-gray-400 hover:bg-primary-500/20 hover:text-primary-500 dark:border-night-600 dark:hover:bg-primary-500/20"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <SettingsPopover />
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProfileCard;
