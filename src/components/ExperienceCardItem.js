import React from "react";
import PropTypes from "prop-types";
import HeroIcon from "./HeroIcon.tsx";
import { getImagePath } from "../helpers/Helper";

const ExperienceCardItem = ({ item, separator }) => {
  return (
    <div className="mb-5 flex items-start">
      <img
        src={getImagePath(item.companyLogo)}
        alt="Avatar"
        className="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"
      />
      <div className="ml-3 w-full space-y-5">
        <div className="justify-between sm:flex">
          <div className="space-y-2">
            <div className="font-medium dark:text-night-50">{item.job}</div>
            <div className="space-y-1 sm:flex sm:space-x-5">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                <HeroIcon icon="BriefcaseIcon" className="h-4 w-4 shrink-0" />
                <span>{item.company}</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                <HeroIcon icon="MapPinIcon" className="h-4 w-4 shrink-0" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between space-y-1 sm:block sm:text-right">
            <div className="order-last inline-flex items-center rounded-lg bg-primary-500/20 px-2 py-1 text-xs font-medium text-primary-500">
              {item.workType}
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
              <HeroIcon icon="CalendarIcon" className="h-4 w-4 shrink-0" />
              <span>
                {item.start} - {item.end}
              </span>
            </div>
          </div>
        </div>
        <p
          className="text-sm text-gray-600 dark:text-night-300"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        {separator && (
          <div className="border-b border-dashed border-gray-200 dark:border-night-600"></div>
        )}
      </div>
    </div>
  );
};

ExperienceCardItem.propTypes = {
  item: PropTypes.shape({
    companyLogo: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    workType: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  separator: PropTypes.bool.isRequired,
};

export default ExperienceCardItem;
