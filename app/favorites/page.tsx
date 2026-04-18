'use client';

import { useEffect, useState } from 'react';
import { devices } from '@/lib/data/devices';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';

export default function FavoritesPage() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    setIds(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);
  const items = devices.filter((d) => ids.includes(d.id));

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Favorites</h1>
      {items.length === 0 ? <EmptyState title="No favorites yet" description="Save devices from quiz results." /> : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((d) => <Card key={d.id}><h3 className="font-semibold">{d.brand} {d.model}</h3><p>RM {d.price_myr}</p></Card>)}
        </div>
      )}
    </div>
  );
}
