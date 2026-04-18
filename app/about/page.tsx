'use client';

import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function AboutPage() {
  const { lang } = useLanguage();
  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-3xl font-bold">{t(lang, 'about')}</h1>
      <p>{lang === 'ar' ? 'StudyTech Advisor مشروع طلابي يهدف لمساعدة طلبة الجامعات في ماليزيا على اختيار الأجهزة المناسبة بثقة.' : 'StudyTech Advisor is a student-focused project that helps university students in Malaysia pick the right devices confidently.'}</p>
      <p>{lang === 'ar' ? 'نمزج بين التثقيف التقني للمبتدئين، واختبار ذكي بالتوصيات، وصفحة أجهزة موثوقة منخفضة التكلفة.' : 'We combine beginner-friendly tech education, a smart recommendation quiz, and a trusted lower-cost devices pathway.'}</p>
    </div>
  );
}
