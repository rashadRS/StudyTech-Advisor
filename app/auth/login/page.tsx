'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="card p-6 space-y-3" onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        try {
          auth.login(String(fd.get('email') || ''), String(fd.get('password') || ''));
          router.push('/dashboard');
        } catch {
          setError('Invalid email or password.');
        }
      }}>
        <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border p-3 bg-transparent"/>
        <input name="password" required type="password" placeholder="Password" className="w-full rounded-xl border p-3 bg-transparent"/>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="btn-primary">Sign in</button>
      </form>
    </div>
  );
}
