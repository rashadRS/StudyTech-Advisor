import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    asLink?: boolean;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
  };

const classes = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'bg-tealish text-white hover:opacity-90',
  ghost: 'bg-transparent border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
};

export function Button({ asLink, href = '#', className, variant = 'primary', ...props }: ButtonProps) {
  const base = cn('inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition', classes[variant], className);
  if (asLink) {
    return (
      <Link href={href} className={base} {...props}>
        {props.children}
      </Link>
    );
  }
  return <button className={base} {...props} />;
}
