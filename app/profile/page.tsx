'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

export default function ProfilePage() {
  const [user, setUser] = useState<Record<string, string> | null>(null);
  useEffect(() => {
    const raw = localStorage.getItem('mock_user');
    if (raw) setUser(JSON.parse(raw));
  }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        {user ? (
          <div className="grid gap-2 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>University:</strong> {user.university}</p>
            <p><strong>Major:</strong> {user.major}</p>
          </div>
        ) : (
          <p>No profile yet. Sign up first.</p>
        )}
      </Card>
    </div>
  );
}
