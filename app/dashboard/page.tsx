'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth, User } from '@/lib/auth';
import { FeatureCard } from '@/components/ui/common';
import { BookOpen, Cpu, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const { lang } = useLanguage();

  useEffect(() => {
    setUser(auth.currentUser());
  }, []);

  if (user === undefined) return <div className="card p-8 animate-pulse">{lang === 'ar' ? 'جار التحميل...' : 'Loading...'}</div>;
  if (!user) return <div className="card p-8">{t(lang, 'authRequired')}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t(lang, 'welcomeBack')}، {user.fullName}</h1>
      <p className="text-slate-500">{t(lang, 'quickActions')}</p>
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/basics"><FeatureCard title={t(lang, 'openBasics')} desc={lang === 'ar' ? 'تعلم المواصفات بسرعة.' : 'Learn device specs quickly.'} icon={<BookOpen />} /></Link>
        <Link href="/quiz"><FeatureCard title={t(lang, 'takeQuiz')} desc={lang === 'ar' ? 'احصل على توصيات مخصصة.' : 'Get tailored recommendations.'} icon={<Cpu />} /></Link>
        <Link href="/partner"><FeatureCard title={t(lang, 'openPartner')} desc={lang === 'ar' ? 'خيارات موثوقة بميزانية أقل.' : 'Trusted options for lower budgets.'} icon={<ShieldCheck />} /></Link>
      </div>
    </div>
  );
}
