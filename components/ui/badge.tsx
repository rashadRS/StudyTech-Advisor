export function Badge({ text }: { text: string }) {
  return <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">{text}</span>;
}
