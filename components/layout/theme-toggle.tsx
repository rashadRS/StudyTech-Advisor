'use client';

import { Moon, Sun } from 'lucide-react';
import { useThemeMode } from '@/components/providers';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useThemeMode();
  const dark = resolvedTheme === 'dark';
  return (
    <button
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="rounded-xl border border-slate-300 p-2 dark:border-slate-600"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
