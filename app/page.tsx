'use client';

import { BookOpen, BrainCircuit, ShieldCheck, Users, Sparkles, Globe2 } from 'lucide-react';
import { Hero } from '@/components/home/hero';
import { FeatureCard } from '@/components/home/feature-card';
import { Card } from '@/components/ui/card';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { faqs, testimonials } from '@/lib/data/content';
import { useApp } from '@/components/providers';

export default function HomePage() {
  const { dict } = useApp();

  return (
    <div className="space-y-14">
      <Hero />

      <section>
        <h2 className="text-2xl font-bold">{dict.home.problemTitle as string}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{dict.home.problemText as string}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <FeatureCard title="تعلم أساسيات الأجهزة" description="شرح RAM, CPU, Storage, GPU بشكل مبسط وسهل." icon={<BookOpen />} />
        <FeatureCard title="اختبار الجهاز المناسب" description="أسئلة ذكية توصلك إلى أفضل 3 أجهزة مع سبب واضح." icon={<BrainCircuit />} />
        <FeatureCard title="أجهزة موثوقة بسعر أقل" description="خيارات مناسبة للميزانية مع رابط شريك موثوق." icon={<ShieldCheck />} />
      </section>

      <section>
        <h2 className="text-2xl font-bold">{dict.home.whyTitle as string}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ['Easy for beginners', <Users key="1" />],
            ['Built for students', <Sparkles key="2" />],
            ['Bilingual experience', <Globe2 key="3" />]
          ].map(([title, icon]) => (
            <Card key={title as string}><div className="mb-2 text-brand-600">{icon as React.ReactNode}</div><p className="font-semibold">{title as string}</p></Card>
          ))}
        </div>
      </section>

      <Card>
        <h3 className="text-xl font-semibold">{dict.home.newStudent as string}</h3>
      </Card>

      <section>
        <h2 className="text-2xl font-bold">{dict.home.testimonials as string}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}><p className="text-sm text-slate-600 dark:text-slate-300">“{t.text}”</p><p className="mt-3 font-semibold">{t.name}</p></Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">{dict.home.faqPreview as string}</h2>
        <div className="mt-4"><FAQAccordion items={faqs.slice(0, 3)} /></div>
      </section>
    </div>
  );
}
