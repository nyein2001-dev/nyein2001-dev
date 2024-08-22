import React from 'react';
import ProfileCard from './components/ProfileCard';
import ResumeCard from './components/ResumeCard';
import InfoCard from './components/InfoCard';
import SkillCard from './components/SkillCard';
import LanguageCard from './components/LanguageCard';
import AboutCard from './components/AboutCard';
import { ThemeProvider } from './stores/ThemeContext';
import { ResumeProvider } from './stores/ResumeContext';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    // Set locale
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      i18n.changeLanguage(storedLocale);
    }
  }, [i18n]);

  return (
    <ThemeProvider>
      <ResumeProvider>
          <div className="container mx-auto max-w-6xl px-4 py-4">
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
              </div>
            </div>
          </div>
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;
