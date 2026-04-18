'use client';

import { EmptyState } from '@/components/ui/common';
import { QuizAnswers } from '@/lib/types';
import { storage } from '@/lib/utils';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function QuizHistoryPage() {
  const history = storage.get<QuizAnswers[]>('studytech_quiz_history', []);
  const { lang } = useLanguage();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t(lang, 'quizHistory')}</h1>
      {history.length ? <div className="space-y-3">{history.map((h, i) => <div key={i} className="card p-4 text-sm">{h.major} • {h.budget} • {h.usage} • {h.valuePerformance}</div>)}</div> : <EmptyState title={t(lang, 'noHistory')} />}
    </div>
  );
}
