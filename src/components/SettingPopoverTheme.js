import React from "react";
import { Switch } from "@headlessui/react";
import { useThemeStore } from "../stores/ThemeContext"; // Path to your ThemeStore

const SettingPopoverTheme = () => {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <div className="flex items-center justify-between rounded-lg transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50">
      <div className="mr-4">
        <p className="text-sm font-medium text-gray-900 dark:text-night-50">
          Theme Settings
        </p>
        <p className="text-sm text-gray-500 dark:text-night-300">Dark Mode</p>
      </div>
      <Switch
        checked={darkMode}
        onChange={toggleTheme}
        className={`${
          darkMode ? "bg-green-500" : "bg-gray-100 dark:bg-night-500"
        }
          relative inline-flex h-[21px] w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Enable Dark Mode?</span>
        <span
          aria-hidden="true"
          className={`${darkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default SettingPopoverTheme;
