import React, { useState } from "react";
import { getImagePath } from "../helpers/Helper";
import { Project } from "../models/Project";
import HeroIcon from "./HeroIcon.tsx";

interface ProjectProps {
  item: Project;
  separator: boolean;
}

const ExperienceProjectCard: React.FC<ProjectProps> = ({ item, separator }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
        </div>
      </div>
      <p className="text-sm mb-2 text-gray-600 dark:text-night-300">
        {item.description}
      </p>
      {item.duties && (
        <div className="w-full mx-auto">
          <button
            onClick={toggleDropdown}
            className="flex items-center mb-5 justify-between w-full"
          >
            <span className="text-sm font-medium text-gray-500 dark:text-night-300">
              Responsibilities & Duties
            </span>
            <span className={`transform ${isOpen ? "rotate-180" : ""}`}>
              <svg
                className="w-5 h-5 text-gray-500 dark:text-night-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>

          {isOpen && (
            <ol className="list-none">
              {item.duties.map((responsibility, index) => (
                <li key={index} className="flex items-start mb-4">
                  <HeroIcon
                    isSolid={false}
                    icon="LightBulbIcon"
                    className="h-5 w-5 text-primary-400 mr-2 mt-1"
                  />
                  <div>
                    <div className="font-medium text-sm text-gray-900 dark:text-night-100 mb-1">
                      {responsibility}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
      {separator && (
        <div className="border-b border-dashed border-gray-200 dark:border-night-600"></div>
      )}
    </div>
  );
};

export default ExperienceProjectCard;
