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
  const why = [t(lang, 'easyBeginners'), t(lang, 'builtStudents'), t(lang, 'smartReco'), t(lang, 'trustedOptions'), t(lang, 'bilingual'), t(lang, 'modernUX')];

  return (
    <div className="space-y-14">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{t(lang, 'heroTitle')}</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl">{t(lang, 'heroSub')}</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/quiz" className="btn-primary">{t(lang, 'startQuiz')}</Link>
            <Link href="/basics" className="btn-secondary">{t(lang, 'learnNow')}</Link>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="card p-6 h-72 bg-gradient-to-br from-blue-600/10 to-teal-500/10 flex items-center justify-center text-center text-slate-600 dark:text-slate-300">
          Laptop + tablet + recommendation cards demo
        </motion.div>
      </section>

      <section className="card p-8">
        <h2 className="text-2xl font-semibold mb-3">{t(lang, 'problemTitle')}</h2>
        <p>{t(lang, 'problemBody')}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <FeatureCard title={t(lang, 'basics')} desc={lang === 'ar' ? 'شرح سهل لـ RAM وCPU وGPU والتخزين والبطارية.' : 'Simple explanations for RAM, CPU, GPU, storage, and battery.'} icon={<BookOpen />} />
        <FeatureCard title={t(lang, 'quiz')} desc={lang === 'ar' ? 'اختبار ذكي متعدد الخطوات لتوصية دقيقة.' : 'A guided multi-step quiz for precise recommendations.'} icon={<Cpu />} />
        <FeatureCard title={t(lang, 'partner')} desc={lang === 'ar' ? 'أجهزة موثوقة بميزانية أقل عبر شريك معتمد.' : 'Trusted lower-cost options through a verified partner.'} icon={<ShieldCheck />} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{t(lang, 'whyChoose')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {why.map((title, idx) => (
            <FeatureCard key={title} title={title} desc={lang === 'ar' ? 'واجهة واضحة، تجربة سريعة، وقرارات أكثر ثقة.' : 'Clear interface, faster decisions, and better confidence.'} icon={[<Sparkles key='1' />, <GraduationCap key='2' />, <Cpu key='3' />, <ShieldCheck key='4' />, <Globe key='5' />, <BookOpen key='6' />][idx]} />
          ))}
        </div>
      </section>

      <section className="card p-8">
        <h2 className="text-xl font-semibold">{t(lang, 'forNewStudents')}</h2>
        <p className="mt-2">{t(lang, 'forNewStudentsBody')}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {testimonials.map((x) => (
          <div key={x.name} className="card p-5">
            <p className="text-sm">“{lang === 'ar' ? x.ar : x.text}”</p>
            <p className="mt-3 font-medium">{x.name}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <FAQAccordion items={faqs.map((f) => ({ q: lang === 'ar' ? f.arQ : f.q, a: lang === 'ar' ? f.arA : f.a }))} />
      </section>
    </div>
  );
}
