'use client';

export function QuizStep({ question, options, value, onChange }: { question: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="card p-6">
      <h3 className="font-semibold mb-4">{question}</h3>
      <div className="grid sm:grid-cols-2 gap-3">{options.map(op => <button key={op} onClick={() => onChange(op)} className={`text-start p-3 rounded-xl border ${value===op ? 'border-primary bg-blue-50 dark:bg-blue-950/30' : 'border-slate-300 dark:border-slate-700'}`}>{op}</button>)}</div>
    </div>
  );
}
