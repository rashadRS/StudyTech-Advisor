'use client';

import { useEffect, useState } from 'react';
import { EmptyState } from '@/components/ui/common';
import { QuizAnswers } from '@/lib/types';
import { storage } from '@/lib/utils';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function QuizHistoryPage() {
  const [history, setHistory] = useState<QuizAnswers[] | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    setHistory(storage.get<QuizAnswers[]>('studytech_quiz_history', []));
  }, []);

  if (!history) return <div className="card p-10 text-center animate-pulse">{lang === 'ar' ? 'جار التحميل...' : 'Loading...'}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t(lang, 'quizHistory')}</h1>
      {history.length ? <div className="space-y-3">{history.map((h, i) => <div key={i} className="card p-4 text-sm">{h.major} • {h.budget} • {h.usage} • {h.valuePerformance}</div>)}</div> : <EmptyState title={t(lang, 'noHistory')} />}
    </div>
  );
}
