'use client';

import Link from 'next/link';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';
import { useApp } from '@/components/providers';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { dict } = useApp();
  const links = [
    ['/', dict.nav.home],
    ['/learn-basics', dict.nav.basics],
    ['/quiz', dict.nav.quiz],
    ['/partner', dict.nav.partner],
    ['/about', dict.nav.about],
    ['/faq', dict.nav.faq],
    ['/contact', dict.nav.contact]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-brand-600">StudyTech Advisor</Link>
        <nav className="hidden gap-4 text-sm lg:flex">
          {links.map(([href, label]) => <Link key={href} href={href} className="hover:text-brand-600">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asLink href="/auth/login" variant="ghost" className="hidden sm:inline-flex">{dict.nav.signIn}</Button>
          <Button asLink href="/auth/signup" className="hidden sm:inline-flex">{dict.nav.signUp}</Button>
        </div>
      </div>
    </header>
  );
}
