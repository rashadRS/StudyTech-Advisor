'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { devices } from '@/data/devices';
import { useLanguage } from '@/components/ui/providers';

export default function DeviceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const device = devices.find((d) => d.id === id);
  const { lang } = useLanguage();

  if (!device) return <div className="card p-8">{lang === 'ar' ? 'الجهاز غير موجود.' : 'Device not found.'}</div>;

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">{device.brand} {device.model}</h1>
      <div className="card p-5 space-y-2">
        <p>{device.description}</p>
        <p>{device.cpu} • {device.ram} • {device.storage} • {device.gpu}</p>
        <p>{device.display} • {device.battery} • {device.weight}</p>
        <p className="font-semibold">RM {device.price_myr}</p>
        {device.buy_link ? <Link target="_blank" className="btn-primary" href={device.buy_link}>{lang === 'ar' ? 'شراء خارجي' : 'External Purchase'}</Link> : <p className="text-sm text-slate-500">{lang === 'ar' ? 'سيتم إضافة رابط الشراء قريباً.' : 'External purchase link will be configured soon.'}</p>}
      </div>
    </div>
  );
}
