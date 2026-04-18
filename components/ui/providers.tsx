'use client';

import { ThemeProvider } from 'next-themes';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Lang } from '@/lib/types';
import { storage } from '@/lib/utils';

type Ctx = { lang: Lang; setLang: (lang: Lang) => void };
const LanguageContext = createContext<Ctx>({ lang: 'ar', setLang: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar');
  useEffect(() => {
    const saved = storage.get<Lang>('studytech_lang', 'ar');
    setLangState(saved);
    document.documentElement.lang = saved;
    document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    storage.set('studytech_lang', next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    </ThemeProvider>
  );
}
