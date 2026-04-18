'use client';

import Link from 'next/link';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { t } from '@/data/i18n';
import { useLanguage } from '@/components/ui/providers';
import { LogoMark } from '@/components/ui/logo';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  const links = [
    ['/', t(lang, 'home')], ['/basics', t(lang, 'basics')], ['/quiz', t(lang, 'quiz')], ['/partner', t(lang, 'partner')], ['/about', t(lang, 'about')], ['/faq', t(lang, 'faq')], ['/contact', t(lang, 'contact')]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/70 bg-white/85 dark:bg-slate-950/80 backdrop-blur-lg transition-colors">
      <div className="container-page py-3 flex flex-wrap items-center gap-3 justify-between">
        <Link className="flex items-center gap-2" href="/">
          <LogoMark className="h-9 w-9" />
          <div>
            <p className="text-sm font-bold text-primary">StudyTech Advisor</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">{t(lang, 'tagline')}</p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-sm">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-primary transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ms-auto xl:ms-0">
          <button aria-label="switch language" className="btn-secondary !px-3 !py-2 text-xs gap-1" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
            <Languages size={14} /> {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button aria-label="switch theme" className="btn-secondary !px-3 !py-2 text-xs" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link className="btn-secondary !px-3 !py-2 text-xs" href="/auth/login">{t(lang, 'signin')}</Link>
          <Link className="btn-primary !px-3 !py-2 text-xs" href="/auth/signup">{t(lang, 'signup')}</Link>
        </div>
      </div>
    </header>
  );
}
