'use client';

import { useEffect, useState } from 'react';
import { auth, User } from '@/lib/auth';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const { lang } = useLanguage();
  useEffect(() => setUser(auth.currentUser()), []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t(lang, 'profile')}</h1>
      <div className="card p-6">{user ? <div className="space-y-2"><p><b>{t(lang, 'fullName')}:</b> {user.fullName}</p><p><b>{t(lang, 'email')}:</b> {user.email}</p><p><b>{t(lang, 'university')}:</b> {user.university}</p><p><b>{t(lang, 'major')}:</b> {user.major}</p></div> : t(lang, 'authRequired')}</div>
    </div>
  );
}
