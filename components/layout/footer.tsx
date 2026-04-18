'use client';

import Link from 'next/link';
import { useApp } from '@/components/providers';

export function Footer() {
  const { dict } = useApp();
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-semibold">StudyTech Advisor</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Smart bilingual guidance for university students in Malaysia.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Quick Links</p>
          <div className="mt-2 flex flex-col gap-2">
            <Link href="/quiz">Smart Quiz</Link>
            <Link href="/learn-basics">Learn Basics</Link>
            <Link href="/partner">Trusted Partner</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Contact</p>
          <p className="mt-2">info@studytechadvisor.my</p>
          <p>+60 3-0000 0000</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs dark:border-slate-800">© 2026 StudyTech Advisor — {dict.footer.rights}</div>
    </footer>
  );
}
