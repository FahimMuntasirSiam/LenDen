import React, { useEffect, useState } from 'react';
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

// Utility to get translation from MyMemory API with local storage caching
const translateText = async (text: string, toLang: Language): Promise<string> => {
  if (toLang === 'en' || !text.trim()) return text; // Base language is English

  const cacheKey = `translation_${toLang}_${text}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${toLang}`);
    const data = await response.json();
    
    if (data && data.responseData && data.responseData.translatedText) {
      const translated = data.responseData.translatedText;
      // MyMemory sometimes returns quota exceeded errors in translatedText if hit too hard, let's just cache and return if it's not the exact error
      if (translated.includes('MYMEMORY WARNING')) {
        return text; // Fallback to English if quota exceeded
      }
      localStorage.setItem(cacheKey, translated);
      return translated;
    }
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to English on error
  }
};

interface TProps {
  children: string | React.ReactNode;
}

// A component that translates its text children
export const T: React.FC<TProps> = ({ children }) => {
  const { language } = useLanguageStore();
  const [translatedText, setTranslatedText] = useState<string | React.ReactNode>(children);

  useEffect(() => {
    // Only translate if children is a string
    if (typeof children === 'string') {
      let isMounted = true;
      const getTranslation = async () => {
        const result = await translateText(children, language);
        if (isMounted) {
          setTranslatedText(result);
        }
      };
      getTranslation();
      return () => {
        isMounted = false;
      };
    } else {
      setTranslatedText(children);
    }
  }, [children, language]);

  return <>{translatedText}</>;
};
