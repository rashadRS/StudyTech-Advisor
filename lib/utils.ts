import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: (string | undefined | false)[]) => twMerge(clsx(inputs));

export const storage = {
  get<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback;
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : fallback;
    } catch {
      return fallback;
    }
  },
  set<T>(key: string, value: T) {
    if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(value));
  }
};
