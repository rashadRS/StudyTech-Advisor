'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';

export default function QuizHistoryPage() {
  const [history, setHistory] = useState<{ date: string; answers: Record<string, string> }[]>([]);
  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('quiz_history') || '[]'));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Quiz History</h1>
      {!history.length ? <EmptyState title="No quiz history" description="Complete the smart quiz to build history." /> : history.map((h, idx) => <Card key={idx}><p className="text-sm">{h.date}</p><pre className="mt-2 text-xs">{JSON.stringify(h.answers, null, 2)}</pre></Card>)}
    </div>
  );
}
