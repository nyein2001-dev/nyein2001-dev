import React from "react";
import { getImagePath } from "../helpers/Helper";
import { Project } from "../models/Project";
import HeroIcon from "./HeroIcon.tsx";

interface ProjectProps {
  item: Project;
  separator: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({ item, separator }) => {
  return (
    <div className="mb-5 flex items-start">
      <img
        src={getImagePath(item.image)}
        alt="project logo"
        className="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"
      />
      <div className="ml-3 w-full space-y-5">
        <div className="flex justify-between">
          <div className="space-y-1.5">
            <div className="font-medium dark:text-night-50">{item.name}</div>
            <div className="flex space-x-5 text-gray-400 dark:text-night-400">
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
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <HeroIcon
                    icon="StarIcon"
                    isSolid={false}
                    className="h-4 w-4 shrink-0 stroke-2"
                  />
                  <span>AppStore</span>
                </a>
              )}
              {item.playstore && (
                <a
                  href={item.playstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <HeroIcon
                    icon="PlayIcon"
                    isSolid={false}
                    className="h-4 w-4 shrink-0 stroke-2"
                  />
                  <span>PlayStore</span>
                </a>
              )}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-night-300">
          {item.description}
        </p>
        {separator && (
          <div className="border-b border-dashed border-gray-200 dark:border-night-600"></div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
