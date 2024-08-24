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
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                  <span>Github</span>
                </a>
              )}
              {item.source && (
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <HeroIcon
                    icon="LinkIcon"
                    isSolid={false}
                    className="h-4 w-4 shrink-0 stroke-2"
                  />
                  <span>Visit</span>
                </a>
              )}
              {item.appstore && (
                <a
                  href={item.appstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-1 text-xs sm:text-sm font-medium"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M8.809 14.92l6.11-11.037c.084-.152.168-.302.244-.459.069-.142.127-.285.165-.44.08-.326.058-.666-.066-.977a1.511 1.511 0 00-.62-.735 1.417 1.417 0 00-.922-.193c-.32.043-.613.194-.844.43-.11.11-.2.235-.283.368-.092.146-.175.298-.259.45l-.386.697-.387-.698c-.084-.151-.167-.303-.259-.449a2.168 2.168 0 00-.283-.369 1.449 1.449 0 00-.844-.429 1.418 1.418 0 00-.921.193 1.512 1.512 0 00-.62.735c-.125.311-.147.651-.066.977.038.155.096.298.164.44.076.157.16.307.244.459l1.248 2.254-4.862 8.782H2.029c-.167 0-.335 0-.502.01-.152.009-.3.028-.448.071-.31.09-.582.28-.778.548-.195.267-.301.593-.301.928 0 .335.106.661.3.928.197.268.468.457.779.548.148.043.296.062.448.071.167.01.335.01.503.01h13.097c.017-.037.059-.13.1-.27.415-1.416-.616-2.844-2.035-2.844zm-5.696 3.622l-.792 1.5c-.082.156-.165.31-.239.471a2.36 2.36 0 00-.16.452c-.08.335-.058.684.064 1.003.121.318.334.583.607.755.272.172.589.242.901.197.314-.044.6-.198.826-.44.108-.115.196-.242.278-.378.09-.15.171-.306.253-.462L6 19.464c-.09-.15-.947-1.47-2.887-.922m20.586-3.006a1.47 1.47 0 00-.779-.54 2.031 2.031 0 00-.448-.071c-.168-.01-.335-.01-.503-.01h-3.321L14.258 7.1a4.064 4.064 0 00-1.076 2.198 4.645 4.645 0 00.546 3l5.274 9.393c.084.15.167.3.259.444.084.13.174.253.283.364.231.232.524.38.845.423.32.042.643-.024.922-.19a1.5 1.5 0 00.621-.726c.125-.307.146-.642.066-.964a2.173 2.173 0 00-.165-.434c-.075-.155-.16-.303-.244-.453l-1.216-2.166h1.596c.168 0 .335 0 .503-.009.152-.009.3-.028.448-.07a1.47 1.47 0 00.78-.541 1.539 1.539 0 00.3-.916 1.539 1.539 0 00-.3-.916z" />
                  </svg>
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
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z" />
                  </svg>
                  <span className="text-xs sm:text-sm">PlayStore</span>
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
