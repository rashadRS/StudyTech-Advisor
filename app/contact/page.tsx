'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold mb-6">{t(lang, 'contact')}</h1>
      <form className="card p-6 space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <input required placeholder={t(lang, 'fullName')} className="w-full rounded-xl border p-3 bg-transparent" />
        <input required type="email" placeholder={t(lang, 'email')} className="w-full rounded-xl border p-3 bg-transparent" />
        <textarea required placeholder={t(lang, 'message')} className="w-full rounded-xl border p-3 bg-transparent" rows={5} />
        <button className="btn-primary">{t(lang, 'send')}</button>
        {sent && <p className="text-teal-600 text-sm">{lang === 'ar' ? 'تم إرسال الرسالة بنجاح.' : 'Message sent successfully.'}</p>}
      </form>
    </div>
  );
}
