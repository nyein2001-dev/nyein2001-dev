import React, { createContext, useContext, useState, useEffect } from 'react';
import ptBR from '../assets/json/resume.pt.json';
import enUS from '../assets/json/resume.en.json';

const ResumeContext = createContext();

const languages = [
  { code: 'pt-BR', data: ptBR },
  { code: 'en-US', data: enUS },
];

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(languages[0].data);

  const loadResume = () => {
    if ('locale' in localStorage) {
      const selected = languages.find((lang) => lang.code === localStorage.locale)?.data;
      if (selected) setResume(selected);
    }
  };

  useEffect(() => {
    loadResume();
  }, []);

  return (
    <ResumeContext.Provider value={{ resume, loadResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResumeStore() {
  return useContext(ResumeContext);
}
