import React from "react";
import { getImagePath } from "../helpers/Helper.js";
import HeroIcon from "./HeroIcon.tsx";
import { Education } from "../models/Education.ts";

interface EducationCardItemProps {
  item: Education;
  separator: boolean;
}

const EducationCardItem: React.FC<EducationCardItemProps> = ({
  item,
  separator,
}) => {
  return (
    <div className="mb-5 flex items-start">
      <img
        src={getImagePath(item.collegeLogo)}
        alt="College Logo"
        className="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"
      />
      <div className="ml-3 w-full space-y-5">
        <div className="items-start justify-between sm:flex">
          <div className="mb-1 space-y-1.5">
            <div className="font-medium dark:text-night-50">{item.college}</div>
            <div className="flex space-x-5">
              <div className="flex items-start gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                <span className="max-w-sm">{item.course}</span>
              </div>
            </div>
          </div>
          <div className="items-start space-y-2">
            <div className="flex gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
              <HeroIcon
                icon="CalendarIcon"
                isSolid={false}
                className="h-4 w-4 shrink-0"
              />
              <span>
                {item.start} – {item.end}
              </span>
            </div>
          </div>
        </div>
        {separator && (
          <div className="border-b border-dashed border-gray-200 dark:border-night-600"></div>
        )}
      </div>
    </div>
  );
};

export default EducationCardItem;
