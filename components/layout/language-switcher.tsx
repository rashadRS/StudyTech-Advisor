'use client';

import { useApp } from '@/components/providers';

export function LanguageSwitcher() {
  const { locale, setLocale } = useApp();
  return (
    <div className="rounded-xl border border-slate-300 p-1 text-sm dark:border-slate-600">
      <button onClick={() => setLocale('ar')} className={`rounded-lg px-2 py-1 ${locale === 'ar' ? 'bg-brand-600 text-white' : ''}`}>AR</button>
      <button onClick={() => setLocale('en')} className={`rounded-lg px-2 py-1 ${locale === 'en' ? 'bg-brand-600 text-white' : ''}`}>EN</button>
    </div>
  );
}
