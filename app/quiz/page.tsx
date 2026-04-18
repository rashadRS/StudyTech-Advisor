'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, Wallet, Laptop, Battery, Monitor, Cpu, Trophy, CalendarClock, HardDrive } from 'lucide-react';
import { QuizStep } from '@/components/quiz/quiz-step';
import { QuizAnswers } from '@/lib/types';
import { storage } from '@/lib/utils';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [analyzing, setAnalyzing] = useState(false);
  const router = useRouter();
  const { lang } = useLanguage();

  const steps = useMemo(() => [
    { key:'major', q: lang === 'ar' ? 'ما هو تخصصك؟' : 'What is your major?', helper: lang === 'ar' ? 'تخصصك يحدد المواصفات اللازمة.' : 'Your field determines required specs.', options:['Business','Computer Science','Engineering','Graphic Design','Architecture','Medicine','Media','General Studies'], icon:<Briefcase size={16} /> },
    { key:'budget', q: lang === 'ar' ? 'ما هي ميزانيتك؟' : 'What is your budget?', helper: lang === 'ar' ? 'سنحافظ على توصيات واقعية بالرينجت.' : 'We keep recommendations realistic in MYR.', options:['Below RM 2000','RM 2000 - RM 3500','RM 3500 - RM 5000','Above RM 5000'], icon:<Wallet size={16} /> },
    { key:'usage', q: lang === 'ar' ? 'ما هو استخدامك الأساسي؟' : 'What is your main usage?', helper: lang === 'ar' ? 'أخبرنا بعبء دراستك اليومي.' : 'Tell us your daily study workload.', options:['General study','Programming','Design','Video editing','3D / engineering software','Gaming + study','Everyday productivity'], icon:<Laptop size={16} /> },
    { key:'os', q: lang === 'ar' ? 'نظام التشغيل المفضل؟' : 'Preferred operating system?', helper: lang === 'ar' ? 'اختر النظام حسب توافق البرامج.' : 'Choose OS based on software compatibility.', options:['Windows','macOS','Linux','No preference'], icon:<Monitor size={16} /> },
    { key:'portability', q: lang === 'ar' ? 'ما أهمية قابلية الحمل؟' : 'How important is portability?', helper: lang === 'ar' ? 'مهم للطلاب كثيري التنقل.' : 'For students moving around campus often.', options:['Very important','Medium','Not important'], icon:<HardDrive size={16} /> },
    { key:'battery', q: lang === 'ar' ? 'ما أهمية عمر البطارية؟' : 'How important is battery life?', helper: lang === 'ar' ? 'بطارية أطول تعني يوم دراسي أسهل.' : 'Long battery helps in full class days.', options:['Very important','Medium','Not important'], icon:<Battery size={16} /> },
    { key:'heavySoftware', q: lang === 'ar' ? 'هل تستخدم برامج ثقيلة؟' : 'Do you use heavy software?', helper: lang === 'ar' ? 'مثل CAD و3D وتحرير متقدم.' : 'CAD, 3D renderers, and advanced editing tools.', options:['Yes','Sometimes','No'], icon:<Cpu size={16} /> },
    { key:'valuePerformance', q: lang === 'ar' ? 'أفضل قيمة أم أفضل أداء؟' : 'Best value or best performance?', helper: lang === 'ar' ? 'وازن بين التكلفة والمواصفات.' : 'Balance cost vs top specs.', options:['Best value','Balanced','Best performance'], icon:<Trophy size={16} /> },
    { key:'years', q: lang === 'ar' ? 'كم سنة تريد أن يدوم الجهاز؟' : 'How many years should the device last?', helper: lang === 'ar' ? 'العمر الأطول يحتاج مواصفات أقوى.' : 'Longer use often needs stronger specs.', options:['2 years','3 years','4+ years'], icon:<CalendarClock size={16} /> }
  ] as const, [lang]);

  const progress = useMemo(() => Math.round((index / steps.length) * 100), [index, steps.length]);
  const step = steps[index];

  const onSelect = (value: string) => setAnswers((p) => ({ ...p, [step.key]: value }));

  const next = () => {
    if (!answers[step.key as keyof QuizAnswers]) return;
    if (index === steps.length - 1) {
      setAnalyzing(true);
      const finalAnswers = answers as QuizAnswers;
      storage.set('studytech_latest_quiz', finalAnswers);
      storage.set('studytech_quiz_history', [...storage.get<QuizAnswers[]>('studytech_quiz_history', []), finalAnswers]);
      setTimeout(() => router.push('/quiz/results'), 1400);
      return;
    }
    setIndex((i) => i + 1);
  };

  if (analyzing) return <div className="card p-14 text-center text-lg animate-pulse">{t(lang, 'analyzing')}</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <h1 className="text-3xl font-bold">{t(lang, 'quizTitle')}</h1>
      <p className="text-slate-500">{t(lang, 'quizSubtitle')}</p>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-600 to-teal-500" style={{ width: `${progress}%` }} /></div>
      <p className="text-xs text-slate-500">{progress}%</p>
      <QuizStep question={step.q} helper={step.helper} options={step.options as unknown as string[]} value={(answers[step.key as keyof QuizAnswers] as string) ?? ''} onChange={onSelect} icon={step.icon} />
      <div className="flex justify-between gap-2">
        <button className="btn-secondary" disabled={index === 0} onClick={() => setIndex((i) => Math.max(0, i - 1))}>{t(lang, 'previous')}</button>
        <button className="btn-primary" onClick={next}>{index === steps.length - 1 ? t(lang, 'resultsTitle') : t(lang, 'next')}</button>
      </div>
    </div>
  );
}
