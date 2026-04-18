'use client';

import { Cpu, BookOpen, ShieldCheck, Sparkles, Globe, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FeatureCard, FAQAccordion } from '@/components/ui/common';
import { faqs, testimonials } from '@/data/content';
import { t } from '@/data/i18n';
import { useLanguage } from '@/components/ui/providers';

export default function HomePage() {
  const { lang } = useLanguage();
  return (
    <div className="space-y-14">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold leading-tight">{t(lang, 'heroTitle')}</h1>
          <p className="text-slate-600 dark:text-slate-300">{t(lang, 'heroSub')}</p>
          <div className="flex gap-3"><Link href="/quiz" className="btn-primary">{t(lang, 'startQuiz')}</Link><Link href="/basics" className="btn-secondary">{t(lang, 'learnNow')}</Link></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="card p-6 h-72 bg-gradient-to-br from-blue-600/10 to-teal-500/10 flex items-center justify-center text-center">Premium smart advisor UI mockup</motion.div>
      </section>

      <section className="card p-8"><h2 className="text-2xl font-semibold mb-3">Problem → Solution</h2><p>Students often struggle with RAM, CPU, and GPU decisions. StudyTech Advisor combines education, smart matching, and trusted buying paths.</p></section>

      <section className="grid md:grid-cols-3 gap-4">
        <FeatureCard title={t(lang, 'basics')} desc="Simple explanations of RAM, CPU, storage, GPU and more." icon={<BookOpen />} />
        <FeatureCard title={t(lang, 'quiz')} desc="Rule-based quiz gives personalized recommendations." icon={<Cpu />} />
        <FeatureCard title={t(lang, 'partner')} desc="Affordable trusted options for students with tight budgets." icon={<ShieldCheck />} />
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[['Easy for beginners', <Sparkles key='1'/>], ['Built for students', <GraduationCap key='2'/>], ['Bilingual experience', <Globe key='3'/>]].map(([title, icon]) => <FeatureCard key={String(title)} title={String(title)} desc="Modern UX with RTL/LTR support." icon={icon} />)}
      </section>

      <section className="card p-8"><h2 className="text-xl font-semibold">New Student in Malaysia?</h2><p className="mt-2">We explain local market pricing and university needs so your first device purchase is confident and safe.</p></section>

      <section className="grid md:grid-cols-3 gap-4">{testimonials.map((x) => <div key={x.name} className="card p-5"><p className="text-sm">“{x.text}”</p><p className="mt-3 font-medium">{x.name}</p></div>)}</section>

      <section><h2 className="text-2xl font-semibold mb-4">FAQ</h2><FAQAccordion items={faqs} /></section>
    </div>
  );
}
