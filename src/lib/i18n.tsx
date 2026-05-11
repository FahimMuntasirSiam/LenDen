import React from 'react';
import { create } from 'zustand';

type Language = 'en' | 'bn';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));

export const translations = {
  en: {
    "Features": "Features",
    "How It Works": "How It Works",
    "Pricing": "Pricing",
    "FAQ": "FAQ",
    "Get Started — It's Simple": "Get Started — It's Simple",
    // ... I'll add more as needed, or just use ternary in components
  },
  bn: {
    "Features": "বৈশিষ্ট্যসমূহ",
    "How It Works": "কীভাবে কাজ করে",
    "Pricing": "মূল্য পরিকল্পনা",
    "FAQ": "সাধারণ প্রশ্নাবলী",
    "Get Started — It's Simple": "শুরু করুন — এটা সহজ",
  }
};

interface TProps {
  children: string;
}

export const T: React.FC<TProps> = ({ children }) => {
  const { language } = useLanguageStore();
  
  // Simple lookup for common strings, fallback to children
  const translated = (translations[language] as any)[children] || children;

  return <>{translated}</>;
};
