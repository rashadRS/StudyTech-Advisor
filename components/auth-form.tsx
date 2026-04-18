'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

type Mode = 'login' | 'signup';

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') || '');
    const password = String(form.get('password') || '');
    if (!email.includes('@') || password.length < 6) {
      setError('Please provide valid email and password (>=6 chars).');
      return;
    }

    if (mode === 'signup') {
      const user = {
        name: String(form.get('name') || ''),
        email,
        university: String(form.get('university') || ''),
        major: String(form.get('major') || '')
      };
      localStorage.setItem('mock_user', JSON.stringify(user));
    }

    localStorage.setItem('is_logged_in', 'true');
    router.push('/dashboard');
  };

  return (
    <form className="grid gap-3" onSubmit={onSubmit}>
      {mode === 'signup' && <input required name="name" placeholder="Full name" className="rounded-xl border p-3 bg-transparent" />}
      <input required name="email" type="email" placeholder="Email" className="rounded-xl border p-3 bg-transparent" />
      <input required name="password" type="password" placeholder="Password" className="rounded-xl border p-3 bg-transparent" />
      {mode === 'signup' && <input required name="university" placeholder="University" className="rounded-xl border p-3 bg-transparent" />}
      {mode === 'signup' && <input required name="major" placeholder="Major" className="rounded-xl border p-3 bg-transparent" />}
      <Button type="submit">{mode === 'login' ? 'Login' : 'Create Account'}</Button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
