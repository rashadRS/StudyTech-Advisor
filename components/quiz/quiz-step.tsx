'use client';

import { motion } from 'framer-motion';

export function QuizStep({ question, helper, options, value, onChange, icon }: { question: string; helper: string; options: string[]; value: string; onChange: (v: string) => void; icon: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="h-9 w-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg">{question}</h3>
          <p className="text-sm text-slate-500">{helper}</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((op) => (
          <button key={op} onClick={() => onChange(op)} className={`text-start p-3 rounded-xl border transition ${value === op ? 'border-primary bg-blue-50 dark:bg-blue-950/30 shadow-sm' : 'border-slate-300 dark:border-slate-700 hover:border-primary/60'}`}>
            {op}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
