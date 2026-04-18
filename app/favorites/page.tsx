'use client';

import { devices } from '@/data/devices';
import { EmptyState } from '@/components/ui/common';
import { storage } from '@/lib/utils';
import { useMemo } from 'react';

export default function FavoritesPage() {
  const ids = storage.get<string[]>('studytech_favorites', []);
  const favs = useMemo(() => devices.filter((d) => ids.includes(d.id)), [ids]);
  return <div><h1 className="text-3xl font-bold mb-6">Favorites</h1>{favs.length ? <div className="grid md:grid-cols-2 gap-4">{favs.map(f => <div key={f.id} className="card p-5"><h3 className="font-semibold">{f.brand} {f.model}</h3><p>{f.ram} • {f.cpu}</p></div>)}</div> : <EmptyState title="No favorites yet." />}</div>;
}
