'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="container-page py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div><p className="font-semibold">StudyTech Advisor</p><p className="text-slate-500 mt-2">Smart bilingual platform for students in Malaysia.</p></div>
        <div className="space-y-2"> <Link href="/">{t(lang, 'home')}</Link><br/><Link href="/faq">{t(lang, 'faq')}</Link><br/><Link href="/contact">{t(lang, 'contact')}</Link> </div>
        <div><p>© 2026 StudyTech Advisor</p><p className="text-slate-500">Instagram / WhatsApp / Email</p></div>
      </div>
    </footer>
  );
}
