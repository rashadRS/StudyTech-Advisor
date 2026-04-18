import { FAQAccordion } from '@/components/ui/common';
import { faqs } from '@/data/content';

export default function FAQPage() {
  return <div><h1 className="text-3xl font-bold mb-6">FAQ</h1><FAQAccordion items={faqs} /></div>;
}
