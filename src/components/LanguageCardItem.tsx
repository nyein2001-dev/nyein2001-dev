import React from "react";
import type { LanguageCardProps } from "../models/Language.ts";
import { getImagePath } from "../helpers/Helper";

const LanguageCardItem: React.FC<LanguageCardProps> = ({ item }) => {
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

        <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-night-700 mt-1">
          <div
            className="bg-yellow-500 h-2.5 rounded-full"
            style={{ width: `${item.star * 20}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCardItem;
