'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';

export default function SignupPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>
      <form className="card p-6 space-y-3" onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const fullName = String(fd.get('fullName') || '');
        const email = String(fd.get('email') || '');
        const password = String(fd.get('password') || '');
        const university = String(fd.get('university') || '');
        const major = String(fd.get('major') || '');
        if (!fullName || !email || password.length < 6) return setError('Please complete all fields (password min 6 chars).');
        auth.signup({ fullName, email, password, university, major });
        router.push('/dashboard');
      }}>
        <input name="fullName" required placeholder="Full name" className="w-full rounded-xl border p-3 bg-transparent"/>
        <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border p-3 bg-transparent"/>
        <input name="password" required type="password" placeholder="Password" className="w-full rounded-xl border p-3 bg-transparent"/>
        <input name="university" required placeholder="University" className="w-full rounded-xl border p-3 bg-transparent"/>
        <input name="major" required placeholder="Major" className="w-full rounded-xl border p-3 bg-transparent"/>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="btn-primary">Sign up</button>
      </form>
    </div>
  );
}
