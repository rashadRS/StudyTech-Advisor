export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
