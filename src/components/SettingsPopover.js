import React from 'react';
import { Popover } from '@headlessui/react';
import { Cog6ToothIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import SettingPopoverTheme from './SettingPopoverTheme';
import SettingPopoverLanguage from './SettingPopoverLanguage';
import { useTranslation } from "react-i18next";

const SettingPopover = () => {
  const { t } = useTranslation();
  return (
    <Popover className="relative">
      <Popover.Button className="rounded-lg bg-gray-100 px-0.5 text-xs text-gray-400 focus:outline-none dark:bg-night-700 dark:text-night-200 dark:hover:bg-night-600">
        <EllipsisHorizontalIcon className="h-5 w-5" />
      </Popover.Button>

      <Popover.Panel className="absolute right-0 z-10 mt-1 w-[280px] max-w-xs transform">
        <div className="rounded-lg shadow-lg">
          <div className="bg-gray-50 py-4 px-5 dark:bg-night-700">
            <span className="flex items-center gap-2">
              <Cog6ToothIcon className="h-5 w-5 text-gray-500 dark:text-night-200" />
              <span className="text-sm font-medium text-gray-900 dark:text-night-50">
              {t("settings.title")}
              </span>
            </span>
          </div>
          <div className="grid gap-3 bg-white py-4 px-5 dark:bg-night-600">
            {/* Theme Settings */}
            <SettingPopoverTheme />
            <div className="border-b border-dashed border-gray-200 dark:border-night-500"></div>
            {/* Language Settings */}
            <SettingPopoverLanguage />
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default SettingPopover;
