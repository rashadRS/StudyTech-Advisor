'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { dictionaries } from '@/lib/i18n/dictionaries';
import { Dict, Locale } from '@/lib/i18n/types';

type AppContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dict;
  dir: 'rtl' | 'ltr';
};

const AppContext = createContext<AppContextType | null>(null);

function AppInnerProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ar');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale === 'ar' || savedLocale === 'en') {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('locale', locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (newLocale: Locale) => setLocaleState(newLocale),
      dict: dictionaries[locale],
      dir: locale === 'ar' ? 'rtl' : 'ltr'
    }),
    [locale]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppInnerProvider>{children}</AppInnerProvider>
    </NextThemeProvider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProviders');
  }
  return context;
}

export function useThemeMode() {
  return useTheme();
}
