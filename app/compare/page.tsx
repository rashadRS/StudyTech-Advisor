'use client';

import { useSearchParams } from 'next/navigation';
import { DeviceComparisonTable } from '@/components/ui/common';
import { devices } from '@/data/devices';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function ComparePage() {
  const params = useSearchParams();
  const ids = (params.get('ids') || '').split(',').filter(Boolean);
  const selected = ids.length ? devices.filter((d) => ids.includes(d.id)) : devices.slice(0, 3);
  const { lang } = useLanguage();
  return <div><h1 className="text-3xl font-bold mb-6">{t(lang, 'compare')}</h1><DeviceComparisonTable selected={selected} /></div>;
}
