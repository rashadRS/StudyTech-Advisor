'use client';

import { basics, buyMistakes, majorSpecs, osCompare } from '@/data/content';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function BasicsPage() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{t(lang, 'learnTitle')}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {basics.map((b) => (
          <article key={b.key} className="card p-5 space-y-2">
            <h2 className="font-semibold text-lg">{b.key}</h2>
            <p className="text-sm"><b>{lang === 'ar' ? 'ما هو؟' : 'What is it?'}</b> {lang === 'ar' ? b.arWhat : b.what}</p>
            <p className="text-sm"><b>{lang === 'ar' ? 'لماذا مهم؟' : 'Why it matters:'}</b> {lang === 'ar' ? b.arWhy : b.why}</p>
            <p className="text-sm"><b>{lang === 'ar' ? 'من يحتاج أكثر؟' : 'Who needs more:'}</b> {lang === 'ar' ? b.arWho : b.who}</p>
            <p className="text-sm text-teal-600"><b>{lang === 'ar' ? 'مستويات مقترحة:' : 'Recommended levels:'}</b> {lang === 'ar' ? b.arLevel : b.level}</p>
            <p className="text-sm"><b>{lang === 'ar' ? 'مثال طلابي:' : 'Student example:'}</b> {lang === 'ar' ? b.arExample : b.example}</p>
            <p className="text-sm text-amber-600"><b>{lang === 'ar' ? 'خطأ شائع:' : 'Common mistake:'}</b> {lang === 'ar' ? b.arMistake : b.mistake}</p>
          </article>
        ))}
      </div>

      <section className="card p-6">
        <h2 className="text-xl font-semibold mb-3">{t(lang, 'mistakesTitle')}</h2>
        <ul className="list-disc ps-5 space-y-1 text-sm">{buyMistakes.map((m) => <li key={m}>{m}</li>)}</ul>
      </section>

      <section className="card p-6">
        <h2 className="text-xl font-semibold mb-3">{t(lang, 'majorSpecsTitle')}</h2>
        <div className="grid md:grid-cols-2 gap-3 text-sm">{majorSpecs.map((m) => <div key={m.major} className="rounded-xl border p-3"><b>{m.major}:</b> {m.spec}</div>)}</div>
      </section>

      <section className="card p-6">
        <h2 className="text-xl font-semibold mb-3">{t(lang, 'osCompareTitle')}</h2>
        <div className="grid md:grid-cols-2 gap-3 text-sm">{osCompare.map((x) => <div key={x.os} className="rounded-xl border p-3"><p className="font-semibold">{x.os}</p><p><b>Pros:</b> {x.pros}</p><p><b>Cons:</b> {x.cons}</p></div>)}</div>
      </section>
    </div>
  );
}
