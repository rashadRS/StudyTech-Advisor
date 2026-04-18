'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';
import { LogoMark } from '@/components/ui/logo';

export function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
      <div className="container-page py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <LogoMark className="h-8 w-8" />
            <p className="font-semibold">StudyTech Advisor</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300">{t(lang, 'tagline')}</p>
        </div>
        <div className="space-y-2">
          <Link href="/">{t(lang, 'home')}</Link><br />
          <Link href="/quiz">{t(lang, 'quiz')}</Link><br />
          <Link href="/partner">{t(lang, 'partner')}</Link>
        </div>
        <div className="space-y-2 text-slate-600 dark:text-slate-300">
          <p>© 2026 StudyTech Advisor</p>
          <p>Email: hello@studytech.my</p>
          <p>Instagram / WhatsApp / LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}
