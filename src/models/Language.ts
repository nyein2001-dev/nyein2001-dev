export interface Language {
    name: string;
    code: string;
    flag: string;
    level?: string;
  }

 export interface LanguageCardProps {
    item: Language;
  }