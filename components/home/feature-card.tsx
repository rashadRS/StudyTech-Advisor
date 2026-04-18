import { Card } from '@/components/ui/card';

export function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <Card className="h-full">
      <div className="mb-3 inline-flex rounded-xl bg-brand-100 p-2 text-brand-700 dark:bg-brand-600/20 dark:text-brand-200">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </Card>
  );
}
