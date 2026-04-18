import { basicsData } from '@/lib/data/content';
import { Card } from '@/components/ui/card';

export default function LearnBasicsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Learn Device Basics</h1>
      <p className="text-slate-600 dark:text-slate-300">Understand the key specs before buying your laptop or tablet.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {basicsData.map((item) => (
          <Card key={item.title}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm"><strong>Why it matters:</strong> {item.why}</p>
            <p className="mt-2 text-sm"><strong>Who needs more:</strong> {item.needs}</p>
            <p className="mt-2 text-sm"><strong>Recommended levels:</strong> {item.levels}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
