'use client';

import { useMemo, useState } from 'react';
import { QuizStep } from '@/components/quiz/quiz-step';
import { Button } from '@/components/ui/button';
import { getTopRecommendations, QuizAnswers } from '@/lib/data/quiz';
import { RecommendationCard } from '@/components/quiz/recommendation-card';
import { ComparisonTable } from '@/components/quiz/comparison-table';
import { Card } from '@/components/ui/card';

type Key = keyof QuizAnswers;

const questions: { key: Key; title: string; options: string[] }[] = [
  { key: 'major', title: 'What is your major?', options: ['Business', 'Computer Science', 'Engineering', 'Graphic Design', 'Architecture', 'Medicine', 'Media', 'General Studies'] },
  { key: 'budget', title: 'What is your budget?', options: ['low', 'mid', 'high', 'premium'] },
  { key: 'usage', title: 'What is your main usage?', options: ['General study', 'Programming', 'Design', 'Video editing', '3D / engineering software', 'Gaming + study', 'Everyday productivity'] },
  { key: 'os', title: 'Preferred OS?', options: ['Windows', 'macOS', 'Linux', 'No preference'] },
  { key: 'portability', title: 'How important is portability?', options: ['Very important', 'Medium', 'Not important'] },
  { key: 'battery', title: 'How important is battery life?', options: ['Very important', 'Medium', 'Not important'] },
  { key: 'priority', title: 'What matters most?', options: ['Lowest price', 'Balanced performance', 'Premium quality', 'High performance'] }
];

const initialAnswers: QuizAnswers = {
  major: '', budget: '', usage: '', os: '', portability: '', battery: '', priority: ''
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const [submitted, setSubmitted] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const recs = useMemo(() => (submitted ? getTopRecommendations(answers) : []), [submitted, answers]);

  const handleSelect = (v: string) => {
    const key = questions[step].key;
    setAnswers((prev) => ({ ...prev, [key]: v }));
  };

  const next = () => {
    if (!answers[questions[step].key]) return;
    if (step === questions.length - 1) {
      setSubmitted(true);
      const history = JSON.parse(localStorage.getItem('quiz_history') || '[]');
      history.unshift({ date: new Date().toISOString(), answers });
      localStorage.setItem('quiz_history', JSON.stringify(history.slice(0, 10)));
      return;
    }
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  if (!submitted) {
    const q = questions[step];
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">Smart Device Quiz</h1>
        <Card>
          <p className="mb-3 text-sm text-slate-500">Step {step + 1}/{questions.length}</p>
          <QuizStep title={q.title} options={q.options} value={answers[q.key]} onChange={handleSelect} />
          <div className="mt-6 flex gap-3">
            <Button variant="ghost" onClick={back} disabled={step === 0}>Back</Button>
            <Button onClick={next}>Next</Button>
          </div>
        </Card>
      </div>
    );
  }

  const compareDevices = recs.filter((r) => compareIds.includes(r.device.id)).map((r) => r.device);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Quiz Results</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {recs.map((r) => (
          <RecommendationCard
            key={r.device.id}
            device={r.device}
            match={r.match}
            reason={r.reason}
            onCompare={() => setCompareIds((prev) => prev.includes(r.device.id) ? prev.filter((id) => id !== r.device.id) : [...prev, r.device.id].slice(0, 3))}
            onFavorite={() => {
              const prev = JSON.parse(localStorage.getItem('favorites') || '[]');
              localStorage.setItem('favorites', JSON.stringify(Array.from(new Set([...prev, r.device.id]))));
            }}
          />
        ))}
      </div>

      <Card>
        <h2 className="text-xl font-semibold">Compare Selected</h2>
        <div className="mt-3"><ComparisonTable devices={compareDevices} /></div>
      </Card>

      <div className="flex gap-3">
        <Button onClick={() => window.print()}>Print/Download Summary</Button>
        <Button variant="ghost" onClick={() => { setSubmitted(false); setStep(0); setAnswers(initialAnswers); setCompareIds([]); }}>Restart Quiz</Button>
      </div>
    </div>
  );
}
