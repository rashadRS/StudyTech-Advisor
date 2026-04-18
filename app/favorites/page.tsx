'use client';

import { useEffect, useMemo, useState } from 'react';
import { devices } from '@/data/devices';
import { EmptyState } from '@/components/ui/common';
import { storage } from '@/lib/utils';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function FavoritesPage() {
  const { lang } = useLanguage();
  const [ids, setIds] = useState<string[] | null>(null);

  useEffect(() => {
    setIds(storage.get<string[]>('studytech_favorites', []));
  }, []);

  const favs = useMemo(() => devices.filter((d) => (ids ?? []).includes(d.id)), [ids]);

  if (!ids) return <div className="card p-10 text-center animate-pulse">{lang === 'ar' ? 'جار التحميل...' : 'Loading...'}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t(lang, 'favorites')}</h1>
      {favs.length ? <div className="grid md:grid-cols-2 gap-4">{favs.map((f) => <div key={f.id} className="card p-5"><h3 className="font-semibold">{f.brand} {f.model}</h3><p>{f.ram} • {f.cpu}</p></div>)}</div> : <EmptyState title={t(lang, 'noFavorites')} />}
    </div>
  );
}
