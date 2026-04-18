'use client';

import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { t } from '@/data/i18n';
import { useLanguage } from '@/components/ui/providers';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  const links = [
    ['/', t(lang, 'home')], ['/basics', t(lang, 'basics')], ['/quiz', t(lang, 'quiz')], ['/partner', t(lang, 'partner')], ['/about', t(lang, 'about')], ['/faq', t(lang, 'faq')], ['/contact', t(lang, 'contact')]
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/60">
      <div className="container-page py-3 flex flex-wrap gap-3 items-center justify-between">
        <Link className="font-bold text-primary" href="/">StudyTech Advisor</Link>
        <nav className="hidden lg:flex gap-4 text-sm">{links.map(([href, label]) => <Link key={href} href={href} className="hover:text-primary">{label}</Link>)}</nav>
        <div className="flex items-center gap-2">
          <button className="btn-secondary text-xs px-3 py-2" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>{lang === 'ar' ? 'EN' : 'AR'}</button>
          <button className="btn-secondary text-xs px-3 py-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
          <Link className="btn-secondary text-xs px-3 py-2" href="/auth/login">{t(lang, 'signin')}</Link>
          <Link className="btn-primary text-xs px-3 py-2" href="/auth/signup">{t(lang, 'signup')}</Link>
        </div>
      </div>
    </header>
  );
}
