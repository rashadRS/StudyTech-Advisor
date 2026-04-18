'use client';

import { FAQAccordion } from '@/components/ui/common';
import { faqs } from '@/data/content';
import { useLanguage } from '@/components/ui/providers';
import { t } from '@/data/i18n';

export default function FAQPage() {
  const { lang } = useLanguage();
  return <div><h1 className="text-3xl font-bold mb-6">{t(lang, 'faq')}</h1><FAQAccordion items={faqs.map((f) => ({ q: lang === 'ar' ? f.arQ : f.q, a: lang === 'ar' ? f.arA : f.a }))} /></div>;
}
