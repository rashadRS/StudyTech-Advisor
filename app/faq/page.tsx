import { FAQAccordion } from '@/components/ui/faq-accordion';
import { faqs } from '@/lib/data/content';

export default function FAQPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <FAQAccordion items={faqs} />
    </div>
  );
}
