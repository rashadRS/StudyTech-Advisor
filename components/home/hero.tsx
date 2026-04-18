'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useApp } from '@/components/providers';

export function Hero() {
  const { dict } = useApp();
  return (
    <section className="grid items-center gap-10 py-14 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">{dict.home.headline as string}</h1>
        <p className="mt-5 text-slate-600 dark:text-slate-300">{dict.home.subheadline as string}</p>
        <div className="mt-6 flex gap-3">
          <Button asLink href="/quiz">{dict.home.ctaQuiz as string}</Button>
          <Button asLink href="/learn-basics" variant="ghost">{dict.home.ctaLearn as string}</Button>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-gradient-to-br from-brand-100 to-cyan-100 p-8 dark:from-slate-800 dark:to-slate-700">
        <div className="grid gap-3">
          <div className="rounded-2xl bg-white p-4 shadow dark:bg-slate-900">Laptop recommendations</div>
          <div className="rounded-2xl bg-white p-4 shadow dark:bg-slate-900">Smart quiz matching</div>
          <div className="rounded-2xl bg-white p-4 shadow dark:bg-slate-900">Budget trusted options</div>
        </div>
      </motion.div>
    </section>
  );
}
