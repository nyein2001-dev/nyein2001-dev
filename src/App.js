// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import ProfileCard from "./components/ProfileCard";
import ResumeCard from "./components/ResumeCard";
import InfoCard from "./components/InfoCard.tsx";
import SkillCard from "./components/SkillCard.tsx";
import LanguageCard from "./components/LanguageCard.tsx";
import AboutCard from "./components/AboutCard";
import { ThemeProvider } from "./stores/ThemeContext";
import { ResumeProvider } from "./stores/ResumeContext";
import ExperienceView from "./views/ExperienceView";
import EducationView from "./views/EducationView";
import ProjectView from "./views/ProjectView";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale) {
      i18n.changeLanguage(storedLocale);
    }
  }, [i18n]);

  return (
    <ThemeProvider>
      <ResumeProvider>
        <I18nextProvider i18n={i18n}>
          <Router>
            <div className="bg-gray-100 dark:bg-night-900 container mx-auto max-w-6xl px-4 py-4">
              <div className="gap-5 sm:grid lg:grid-cols-3">
                <div className="space-y-5">
                  <ProfileCard />
                  <ResumeCard />
                  <InfoCard />
                  <SkillCard />
                  <LanguageCard />
                </div>
                <div className="mt-4 space-y-5 sm:mt-0 lg:col-span-2">
                  <AboutCard />
                  <Routes>
                    <Route path="/" element={<ExperienceView />} />
                    <Route path="/education" element={<EducationView />} />
                    <Route path="/project" element={<ProjectView />} />
                  </Routes>
                </div>
              </div>
            </div>
          </Router>
        </I18nextProvider>
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;
