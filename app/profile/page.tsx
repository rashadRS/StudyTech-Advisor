'use client';

import { useEffect, useState } from 'react';
import { auth, User } from '@/lib/auth';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => setUser(auth.currentUser()), []);
  return <div><h1 className="text-3xl font-bold mb-6">Profile</h1><div className="card p-6">{user ? <div className="space-y-2"><p><b>Name:</b> {user.fullName}</p><p><b>Email:</b> {user.email}</p><p><b>University:</b> {user.university}</p><p><b>Major:</b> {user.major}</p></div> : 'Please login first.'}</div></div>;
}
