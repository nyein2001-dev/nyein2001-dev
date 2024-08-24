import React from "react";
import { getImagePath } from "../helpers/Helper";
import HeroIcon from "./HeroIcon.tsx";

const MAX_STARS = 5;

const LanguageCardItem = ({ item }) => {
  const level = Math.round(item.star);

  const renderStars = () => {
    return Array.from({ length: MAX_STARS }, (_, index) => {
      return index < level ? (
        // <SolidStarIcon key={index} className="h-4 w-4 text-yellow-500" />
        <HeroIcon
          icon="StarIcon"
          isSolid={true}
          className="h-4 w-4 text-yellow-500"
        />
      ) : (
        // <OutlineStarIcon key={index} className="h-4 w-4 text-gray-300" />
        <HeroIcon
          icon="StarIcon"
          isSolid={false}
          className="h-4 w-4 text-gray-300"
        />
      );
    });
  };

  return (
    <div className="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 hover:bg-gray-100 dark:border-night-700 dark:hover:bg-night-700">
      <img
        src={getImagePath(item.flag)}
        alt="Avatar"
        className="h-8 w-8 rounded-full border-2 border-white shadow-sm dark:border-night-700"
      />
      <div className="font-medium">
        <div className="text-xs text-gray-600 dark:text-night-200">
          {item.name}
        </div>
        <div className="text-xs text-gray-400 dark:text-night-400">
          {item.level}
        </div>

        <div className="w-full rounded-full h-2.5 mb-1 dark:bg-night-700 mt-1">
          <div className="flex items-center mt-1">{renderStars()}</div>

          {/* <div
            className="bg-yellow-500 h-2.5 rounded-full"
            style={{ width: `${item.star * 20}%` }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default LanguageCardItem;
