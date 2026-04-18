import Link from 'next/link';
import { PARTNER } from '@/data/constants';
import { budgetDevices } from '@/data/devices';
import { FAQAccordion } from '@/components/ui/common';

export default function PartnerPage() {
  return (
    <div className="space-y-8">
      <section className="card p-8"><h1 className="text-3xl font-bold">أجهزة موثوقة بسعر أقل / Trusted Devices at Lower Prices</h1><p className="mt-3">For students with limited budgets, we highlight reliable affordable devices through a trusted partner.</p></section>
      <section className="card p-6"><span className="inline-flex px-3 py-1 rounded-full bg-teal-100 text-teal-700">Trusted Partner</span><ul className="mt-4 text-sm list-disc ps-5"><li>Carefully selected devices</li><li>Affordable pricing for students</li><li>Suitable for university tasks</li></ul></section>
      <section className="grid md:grid-cols-2 gap-4">{budgetDevices.map(d => <div key={d.id} className="card p-5"><h3 className="font-semibold">{d.brand} {d.model}</h3><p className="text-sm">{d.ram} • {d.cpu} • {d.storage}</p><p className="text-sm">{d.condition}</p><p className="font-semibold mt-2">RM {d.price_myr}</p></div>)}</section>
      <Link href={PARTNER.link} className="btn-primary" target="_blank">Browse Devices Now</Link>
      <section className="card p-6"><h2 className="font-semibold mb-2">Contact</h2><p>WhatsApp: {PARTNER.whatsapp}</p><p>Phone: {PARTNER.phone}</p><p>Email: {PARTNER.email}</p></section>
      <FAQAccordion items={[{ q:'Are these devices tested?', a:'Partner checks quality before listing.'}, { q:'Is there any warranty?', a:'Warranty terms vary by device.'}, { q:'Are they suitable for students?', a:'Yes, selected for common university usage.'}, { q:'Can I ask for help choosing?', a:'Yes, use contact details above.'}]} />
    </div>
  );
}
