'use client';

import { Mail, Lock, User as UserIcon, School, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function SignupPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { lang } = useLanguage();

  const msg = (code: string) => {
    if (code === 'required') return t(lang, 'requiredField');
    if (code === 'invalid_email') return t(lang, 'invalidEmail');
    if (code === 'short_password') return t(lang, 'shortPassword');
    if (code === 'email_exists') return lang === 'ar' ? 'هذا البريد مسجل مسبقاً.' : 'Email already registered.';
    return code;
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{t(lang, 'signupTitle')}</h1>
      <p className="text-slate-500 mb-6">{t(lang, 'createAccountHint')}</p>
      <form className="card p-6 space-y-3" onSubmit={(e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);
        const fd = new FormData(e.currentTarget);
        const payload = {
          fullName: String(fd.get('fullName') || '').trim(),
          email: String(fd.get('email') || '').trim(),
          password: String(fd.get('password') || ''),
          university: String(fd.get('university') || '').trim(),
          major: String(fd.get('major') || '').trim()
        };
        const invalid = auth.validateSignup(payload);
        if (invalid) {
          setError(msg(invalid));
          setLoading(false);
          return;
        }
        const result = auth.signup(payload);
        if (!result.ok) {
          setError(msg(result.error));
          setLoading(false);
          return;
        }
        setSuccess(t(lang, 'accountCreated'));
        setTimeout(() => router.push('/dashboard'), 800);
      }}>
        <label className="text-xs text-slate-500">{t(lang, 'fullName')}</label>
        <div className="relative"><UserIcon size={16} className="absolute top-3.5 text-slate-400 end-3" /><input name="fullName" placeholder={t(lang, 'fullName')} className="w-full rounded-xl border p-3 pe-9 bg-transparent" /></div>

        <label className="text-xs text-slate-500">{t(lang, 'email')}</label>
        <div className="relative"><Mail size={16} className="absolute top-3.5 text-slate-400 end-3" /><input name="email" type="email" placeholder={t(lang, 'email')} className="w-full rounded-xl border p-3 pe-9 bg-transparent" /></div>

        <label className="text-xs text-slate-500">{t(lang, 'password')}</label>
        <div className="relative"><Lock size={16} className="absolute top-3.5 text-slate-400 end-3" /><input name="password" type="password" placeholder={t(lang, 'password')} className="w-full rounded-xl border p-3 pe-9 bg-transparent" /></div>

        <label className="text-xs text-slate-500">{t(lang, 'university')}</label>
        <div className="relative"><School size={16} className="absolute top-3.5 text-slate-400 end-3" /><input name="university" placeholder={t(lang, 'university')} className="w-full rounded-xl border p-3 pe-9 bg-transparent" /></div>

        <label className="text-xs text-slate-500">{t(lang, 'major')}</label>
        <div className="relative"><GraduationCap size={16} className="absolute top-3.5 text-slate-400 end-3" /><input name="major" placeholder={t(lang, 'major')} className="w-full rounded-xl border p-3 pe-9 bg-transparent" /></div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-teal-600 text-sm flex items-center gap-2"><CheckCircle2 size={14} /> {success}</p>}
        <button className="btn-primary w-full" disabled={loading}>{loading ? '...' : t(lang, 'signup')}</button>
      </form>
    </div>
  );
}
