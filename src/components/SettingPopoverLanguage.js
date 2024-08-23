import React, { useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { getImagePath } from "../helpers/Helper"; 
import { useResumeStore } from "../stores/ResumeContext"; 
import i18n from "../i18n";

const languages = [
  { name: "settings.pt", code: "my-MM", flag: "svg/myanmar.svg" },
  { name: "settings.en", code: "en-US", flag: "svg/united-states.svg" },
];

const SettingPopoverLanguage = () => {
  const { t } = useTranslation();
  const resume = useResumeStore();

  const initialLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(selectedLanguage.code);
      localStorage.setItem("locale", selectedLanguage.code);
      resume.loadResume();
    } else {
      console.error("i18n.changeLanguage is not a function");
    }
  }, [selectedLanguage, resume]);

  return (
    <div className="relative">
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Label className="mb-1 block text-sm font-medium leading-5 text-gray-700 dark:text-night-50">
          {t("language")}
        </Listbox.Label>
        <Listbox.Button className="relative flex w-full cursor-default items-center gap-2 rounded-lg bg-gray-100 py-2 pl-2 pr-10 text-left text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 dark:bg-night-500">
          <img
            src={getImagePath(selectedLanguage.flag)}
            alt="Country flag"
            className="h-6 w-6 rounded-full"
          />
          <span className="block truncate text-gray-500 dark:text-night-200">
            {t(selectedLanguage.name)}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400 dark:text-night-300"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition duration-100 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-night-500">
            {languages.map((language) => (
              <Listbox.Option
                key={language.code}
                value={language}
                className={({ active }) =>
                  `${active ? "bg-primary-500/20 text-primary-500 dark:text-primary-500" : "text-gray-900 dark:text-night-200"
                  } relative cursor-default select-none py-2 px-2.5 flex items-center gap-2`
                }
              >
                {({ selected }) => (
                  <>
                    <img
                      src={getImagePath(language.flag)}
                      alt="Avatar"
                      className="h-6 w-6 rounded-full shadow-sm"
                    />
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {t(language.name)}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 right-4 flex items-center pl-3 text-primary-500">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default SettingPopoverLanguage;
