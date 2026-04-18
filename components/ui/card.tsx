import { cn } from '@/lib/utils/cn';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('rounded-2xl border border-slate-200/70 bg-white p-5 shadow-soft dark:border-slate-700 dark:bg-slate-900', className)}>{children}</div>;
}
