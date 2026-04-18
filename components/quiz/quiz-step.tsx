export function QuizStep({ title, options, value, onChange }: { title: string; options: string[]; value?: string; onChange: (v: string) => void }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-xl border p-3 text-start transition ${value === option ? 'border-brand-600 bg-brand-50 dark:bg-brand-600/20' : 'border-slate-200 dark:border-slate-700'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
