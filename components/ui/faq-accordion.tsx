'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item.q} className="rounded-xl border border-slate-200 dark:border-slate-700">
          <button className="flex w-full items-center justify-between p-4 text-start" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <span className="font-medium">{item.q}</span>
            <ChevronDown className={`transition ${openIndex === idx ? 'rotate-180' : ''}`} size={18} />
          </button>
          {openIndex === idx && <p className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-300">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
