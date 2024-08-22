import React from "react";
import HeroIcon from "./HeroIcon.tsx";

interface InfoItem {
  icon: string;
  value: string;
  name: string;
}

interface InfoCardItemProps {
  item: InfoItem;
  children?: React.ReactNode;
}

const InfoCardItem: React.FC<InfoCardItemProps> = ({ item, children }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-night-700 dark:text-night-300">
          <HeroIcon
            icon={item.icon}
            isSolid={false}
            className="h-5 w-5 stroke-1"
          />
        </div>
        <div className="font-medium">
          <div className="text-sm text-gray-900 dark:text-night-100">
            {item.value}
          </div>
          <div className="text-xs text-gray-400 dark:text-night-400">
            {item.name}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default InfoCardItem;
