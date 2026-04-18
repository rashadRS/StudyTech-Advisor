'use client';

import Link from 'next/link';
import { PARTNER } from '@/data/constants';
import { budgetDevices } from '@/data/devices';
import { FAQAccordion } from '@/components/ui/common';
import { ShieldCheck, BadgeCheck, Handshake, Wallet } from 'lucide-react';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function PartnerPage() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-8">
      <section className="card p-8 bg-gradient-to-br from-teal-500/10 to-blue-500/10">
        <h1 className="text-3xl font-bold">{lang === 'ar' ? 'أجهزة موثوقة بسعر أقل' : 'Trusted Devices at Lower Prices'}</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{lang === 'ar' ? 'نوفر لك خيارات اقتصادية موثوقة عبر شريك معتمد لمساعدتك على البدء بدون ضغط مالي.' : 'We highlight reliable lower-cost devices through a trusted partner for budget-conscious students.'}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="card p-4"><BadgeCheck className="text-teal-600 mb-2" /><p>{t(lang, 'testedDevices')}</p></div>
        <div className="card p-4"><Wallet className="text-teal-600 mb-2" /><p>{t(lang, 'studentPrices')}</p></div>
        <div className="card p-4"><Handshake className="text-teal-600 mb-2" /><p>{t(lang, 'safeBuy')}</p></div>
      </section>

      <section className="card p-6">
        <span className="inline-flex px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm"><ShieldCheck size={14} className="me-1" /> {t(lang, 'trustedPartner')}</span>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{lang === 'ar' ? 'الشريك: BBTech - أجهزة مستعملة ومجددة مناسبة للدراسة الجامعية.' : 'Partner spotlight: BBTech offers student-suitable used and refurbished devices.'}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">{t(lang, 'partnerWhy')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {budgetDevices.map((d) => (
            <div key={d.id} className="card p-5">
              <h3 className="font-semibold">{d.brand} {d.model}</h3>
              <p className="text-sm">{d.ram} • {d.cpu} • {d.storage}</p>
              <p className="text-xs text-slate-500">{d.condition}</p>
              <p className="font-semibold mt-2">RM {d.price_myr}</p>
              <p className="text-sm mt-1">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Link href={PARTNER.link} className="btn-primary text-base" target="_blank">{t(lang, 'browseNow')}</Link>

      <section className="card p-6">
        <h2 className="font-semibold mb-2">{t(lang, 'contactUs')}</h2>
        <p>WhatsApp: {PARTNER.whatsapp}</p>
        <p>Phone: {PARTNER.phone}</p>
        <p>Email: {PARTNER.email}</p>
      </section>

      <FAQAccordion items={[{ q: lang === 'ar' ? 'هل الأجهزة مفحوصة؟' : 'Are these devices tested?', a: lang === 'ar' ? 'نعم، يتم فحص الجودة قبل الإدراج.' : 'Yes, quality is checked before listing.' }, { q: lang === 'ar' ? 'هل توجد ضمانات؟' : 'Is there any warranty?', a: lang === 'ar' ? 'تختلف مدة الضمان حسب الجهاز.' : 'Warranty terms vary by product.' }, { q: lang === 'ar' ? 'هل تناسب الدراسة؟' : 'Are they suitable for students?', a: lang === 'ar' ? 'نعم، تم اختيارها لاستخدامات جامعية شائعة.' : 'Yes, selected for common university needs.' }, { q: lang === 'ar' ? 'هل يمكن المساعدة في الاختيار؟' : 'Can I ask for help choosing?', a: lang === 'ar' ? 'نعم، تواصل معنا عبر بيانات الاتصال.' : 'Yes, contact us for guided help.' }]} />
    </div>
  );
}
