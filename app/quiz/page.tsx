'use client';

import { useMemo, useState } from 'react';
import { QuizStep } from '@/components/quiz/quiz-step';
import { recommendDevices } from '@/lib/recommend';
import { QuizAnswers } from '@/lib/types';
import { RecommendationCard, DeviceComparisonTable } from '@/components/ui/common';
import { storage } from '@/lib/utils';

const steps = [
  { key:'major', q:'What is your major?', options:['Business','Computer Science','Engineering','Graphic Design','Architecture','Medicine','Media','General Studies'] },
  { key:'budget', q:'What is your budget?', options:['Below RM 2000','RM 2000 - RM 3500','RM 3500 - RM 5000','Above RM 5000'] },
  { key:'usage', q:'What is your main usage?', options:['General study','Programming','Design','Video editing','3D / engineering software','Gaming + study','Everyday productivity'] },
  { key:'os', q:'Preferred operating system?', options:['Windows','macOS','Linux','No preference'] },
  { key:'portability', q:'How important is portability?', options:['Very important','Medium','Not important'] },
  { key:'battery', q:'How important is battery life?', options:['Very important','Medium','Not important'] },
  { key:'priority', q:'What matters most?', options:['Lowest price','Balanced performance','Premium quality','High performance'] }
] as const;

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [compare, setCompare] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const done = index >= steps.length;
  const results = useMemo(() => done ? recommendDevices(answers as QuizAnswers) : [], [done, answers]);

  const current = steps[index];
  const onNext = (value: string) => {
    setAnswers((p) => ({ ...p, [current.key]: value }));
    setIndex((x) => x + 1);
  };

  if (!done) return <div className="space-y-4"><h1 className="text-3xl font-bold">Smart Device Quiz</h1><QuizStep question={current.q} options={current.options as unknown as string[]} value={(answers[current.key as keyof QuizAnswers] as string) ?? ''} onChange={onNext} /><p className="text-sm">Step {index + 1} / {steps.length}</p></div>;

  const filtered = results.filter(r => `${r.device.brand} ${r.device.model}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Top Recommendations</h1>
      <div className="flex gap-2"><input placeholder="Search recommendations" className="rounded-xl border p-2 bg-transparent" value={search} onChange={(e)=>setSearch(e.target.value)} /><button className="btn-secondary" onClick={() => window.print()}>Print Summary</button></div>
      <div className="grid lg:grid-cols-3 gap-4">{filtered.map((r) => <div key={r.device.id}><RecommendationCard device={r.device} match={r.match} /><button className="mt-2 btn-secondary text-xs" onClick={() => {storage.set('studytech_favorites', [...storage.get<string[]>('studytech_favorites', []), r.device.id]);}}>Save to Favorites</button><button className="mt-2 ms-2 btn-secondary text-xs" onClick={() => setCompare((c)=> c.includes(r.device.id)? c.filter(i=>i!==r.device.id) : [...c, r.device.id])}>Compare</button></div>)}</div>
      <DeviceComparisonTable selected={results.filter(r => compare.includes(r.device.id)).map(r => r.device)} />
      <button className="btn-primary" onClick={() => storage.set('studytech_quiz_history', [...storage.get<QuizAnswers[]>('studytech_quiz_history', []), answers as QuizAnswers])}>Save Quiz History</button>
    </div>
  );
}
