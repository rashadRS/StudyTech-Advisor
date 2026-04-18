export function Loading({ label }: { label: string }) {
  return <div className="animate-pulse rounded-xl bg-slate-200 p-4 text-sm dark:bg-slate-800">{label}</div>;
}
