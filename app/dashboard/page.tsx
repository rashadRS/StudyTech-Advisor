'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth, User } from '@/lib/auth';
import { FeatureCard } from '@/components/ui/common';
import { BookOpen, Cpu, ShieldCheck } from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => setUser(auth.currentUser()), []);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome {user?.fullName ?? 'Student'}</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/basics"><FeatureCard title="Learn Device Basics" desc="Understand specs quickly." icon={<BookOpen />} /></Link>
        <Link href="/quiz"><FeatureCard title="Find Your Ideal Device" desc="Take the smart quiz now." icon={<Cpu />} /></Link>
        <Link href="/partner"><FeatureCard title="أجهزة موثوقة بسعر أقل" desc="Trusted budget options." icon={<ShieldCheck />} /></Link>
      </div>
    </div>
  );
}
