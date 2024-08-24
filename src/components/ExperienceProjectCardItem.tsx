import React from "react";
import { getImagePath } from "../helpers/Helper";
import { Project } from "../models/Project";
import HeroIcon from "./HeroIcon.tsx";
import { ReactComponent as AppStoreIcon } from "../assets/svg/appstore.svg";
import { ReactComponent as PlayStoreIcon } from "../assets/svg/playstore.svg";

interface ProjectProps {
  item: Project;
  separator: boolean;
}

const ExperienceProjectCard: React.FC<ProjectProps> = ({ item, separator }) => {
  return (
    <div className="mb-5">
      <div className="mb-2 flex sm:flex-row items-center">
        <img
          src={getImagePath(item.image)}
          alt="project logo"
          className="h-10 w-10 shrink-0 rounded-xl border-2 flex items-center border-gray-50 shadow-sm dark:border-night-700"
        />
        <div className="ml-2 sm:ml-3 w-full space-y-3 sm:space-y-5">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="space-y-1.5">
              <div className="font-medium text-sm sm:text-lg dark:text-night-50">
                {item.name}
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-5 text-gray-400 dark:text-night-400">
                <div className="flex items-center gap-1 text-sm font-medium">
                  <HeroIcon
                    icon="CodeBracketIcon"
                    isSolid={false}
                    className="h-4 w-4 shrink-0 stroke-2"
                  />
                  <span>{item.language}</span>
                </div>
                {item.stars && (
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <HeroIcon
                      icon="StarIcon"
                      isSolid={false}
                      className="h-4 w-4 shrink-0 stroke-2"
                    />
                    <span>{item.stars}</span>
                  </div>
                )}
                {item.forks && (
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <HeroIcon
                      icon="DocumentDuplicateIcon"
                      isSolid={false}
                      className="h-4 w-4 shrink-0 stroke-2"
                    />
                    <span>{item.forks}</span>
                  </div>
                )}
                {item.downloads && (
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <HeroIcon
                      icon="ArrowDownIcon"
                      isSolid={false}
                      className="h-4 w-4 shrink-0 stroke-2"
                    />
                    <span>{item.downloads}</span>
                  </div>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium"
                  >
                    <HeroIcon
                      icon="LinkIcon"
                      isSolid={false}
                      className="h-4 w-4 shrink-0 stroke-2"
                    />
                    <span>Github</span>
                  </a>
                )}
                {item.appstore && (
                  <a
                    href={item.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-1 text-xs sm:text-sm font-medium"
                  >
                    <AppStoreIcon className="h-4 sm:h-5 w-4 sm:w-5 shrink-0" />
                    <span className="text-xs sm:text-sm">AppStore</span>
                  </a>
                )}
                {item.playstore && (
                  <a
                    href={item.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-1 text-xs sm:text-sm font-medium"
                  >
                    <PlayStoreIcon className="h-3 sm:h-4 w-3 sm:w-4 shrink-0" />
                    <span className="text-xs sm:text-sm">PlayStore</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm mb-5 text-gray-600 dark:text-night-300">
        {item.description}
      </p>
      {separator && (
        <div className="border-b border-dashed border-gray-200 dark:border-night-600"></div>
      )}
    </div>
  );
};

export default ExperienceProjectCard;
