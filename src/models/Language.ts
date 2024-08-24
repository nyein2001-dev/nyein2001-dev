export interface Language {
    name: string;
    code: string;
    flag: string;
    level?: string;
    star: number;
  }

 export interface LanguageCardProps {
    item: Language;
  }