import { budgetDevices } from '@/lib/data/devices';
import { partnerConfig, faqs } from '@/lib/data/content';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { Button } from '@/components/ui/button';

export default function PartnerPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-brand-100 to-cyan-100 p-8 dark:from-slate-800 dark:to-slate-700">
        <h1 className="text-3xl font-bold">أجهزة موثوقة بسعر أقل / Trusted Devices at Lower Prices</h1>
        <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-200">For students with limited budgets, this section highlights reliable and affordable devices from a trusted partner.</p>
        <div className="mt-4"><Badge text="Trusted Partner" /></div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Sample Budget Devices</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {budgetDevices.map((d) => (
            <Card key={d.id}>
              <h3 className="font-semibold">{d.brand} {d.model}</h3>
              <p className="text-sm">{d.cpu} • {d.ram} • {d.storage}</p>
              <p className="text-sm">Condition: {d.condition}</p>
              <p className="mt-2 font-semibold text-brand-600">RM {d.price_myr}</p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{d.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <h3 className="text-xl font-semibold">Browse all devices from our partner</h3>
        <Button asLink href={partnerConfig.link} className="mt-4" target="_blank" rel="noreferrer">Browse Devices Now</Button>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold">Contact</h3>
        <p className="mt-2">WhatsApp: {partnerConfig.whatsapp}</p>
        <p>Phone: {partnerConfig.phone}</p>
        <p>Email: {partnerConfig.email}</p>
      </Card>

      <section>
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-4"><FAQAccordion items={faqs} /></div>
      </section>
    </div>
  );
}
