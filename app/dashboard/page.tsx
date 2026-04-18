import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const cards = [
    ['Learn Device Basics', '/learn-basics'],
    ['Find Your Ideal Device', '/quiz'],
    ['أجهزة موثوقة بسعر أقل', '/partner']
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-slate-600 dark:text-slate-300">Welcome back! Pick a quick action:</p>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(([title, link]) => (
          <Card key={title}>
            <h3 className="font-semibold">{title}</h3>
            <Button asLink href={link} className="mt-4">Open</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
