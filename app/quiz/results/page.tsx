'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { recommendDevices } from '@/lib/recommend';
import { QuizAnswers } from '@/lib/types';
import { storage } from '@/lib/utils';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function QuizResultsPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [saved, setSaved] = useState<string[]>([]);

  const answers = storage.get<QuizAnswers | null>('studytech_latest_quiz', null);
  const results = useMemo(() => (answers ? recommendDevices(answers) : []), [answers]);

  if (!answers) {
    return (
      <div className="card p-10 text-center">
        <p>{lang === 'ar' ? 'لا توجد نتائج حتى الآن.' : 'No results yet.'}</p>
        <button className="btn-primary mt-4" onClick={() => router.push('/quiz')}>{t(lang, 'startQuiz')}</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t(lang, 'resultsTitle')}</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {results.map((r) => (
          <div className="card p-5 space-y-3" key={r.device.id}>
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-semibold">{r.device.brand} {r.device.model}</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700">{r.match}%</span>
            </div>
            <p className="text-sm text-slate-500">{t(lang, 'whyFit')}: {r.reason}</p>
            <div className="text-sm space-y-1">
              <p>{r.device.ram} • {r.device.cpu}</p>
              <p>{r.device.storage} • {r.device.gpu}</p>
              <p>{r.device.display} • {r.device.battery}</p>
              <p className="font-semibold">{t(lang, 'price')}: RM {r.device.price_myr}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="btn-secondary text-xs" onClick={() => {
                const curr = storage.get<string[]>('studytech_favorites', []);
                storage.set('studytech_favorites', Array.from(new Set([...curr, r.device.id])));
                setSaved((s) => [...s, r.device.id]);
              }}>{saved.includes(r.device.id) ? t(lang, 'saved') : t(lang, 'saveFavorite')}</button>
              <Link href={`/compare?ids=${r.device.id}`} className="btn-secondary text-xs">{t(lang, 'compareNow')}</Link>
              <Link href={`/devices/${r.device.id}`} className="btn-secondary text-xs">{t(lang, 'viewDetails')}</Link>
              {r.device.buy_link ? <Link target="_blank" href={r.device.buy_link} className="btn-primary text-xs">{t(lang, 'viewProduct')}</Link> : null}
            </div>
          </div>
        ))}
      </div>
      <button className="btn-secondary" onClick={() => window.print()}>{t(lang, 'printSummary')}</button>
      <div className="card p-4 text-sm text-slate-500">{lang === 'ar' ? 'تم حفظ النتائج محلياً ويمكن العودة لها في سجل الاختبارات.' : 'Results are saved locally and available in quiz history.'}</div>
    </div>
  );
}
