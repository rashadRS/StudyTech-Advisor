'use client';

import { Mail, Lock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { lang } = useLanguage();

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{t(lang, 'loginTitle')}</h1>
      <p className="text-slate-500 mb-6">{t(lang, 'loginHint')}</p>
      <form className="card p-6 space-y-3" onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        const fd = new FormData(e.currentTarget);
        const email = String(fd.get('email') || '').trim();
        const password = String(fd.get('password') || '');
        const result = auth.login(email, password);
        if (!result.ok) {
          setError(t(lang, 'loginFailed'));
          setLoading(false);
          return;
        }
        setSuccess(t(lang, 'loginSuccess'));
        setTimeout(() => router.push('/dashboard'), 700);
      }}>
        <label className="text-xs text-slate-500">{t(lang, 'email')}</label>
        <div className="relative"><Mail size={16} className="absolute top-3.5 text-slate-400 end-3" /><input name="email" type="email" placeholder={t(lang, 'email')} className="w-full rounded-xl border p-3 pe-9 bg-transparent" /></div>
        <label className="text-xs text-slate-500">{t(lang, 'password')}</label>
        <div className="relative"><Lock size={16} className="absolute top-3.5 text-slate-400 end-3" /><input name="password" type="password" placeholder={t(lang, 'password')} className="w-full rounded-xl border p-3 pe-9 bg-transparent" /></div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-teal-600 text-sm flex items-center gap-2"><CheckCircle2 size={14} /> {success}</p>}
        <button className="btn-primary w-full" disabled={loading}>{loading ? '...' : t(lang, 'signin')}</button>
      </form>
    </div>
  );
}
