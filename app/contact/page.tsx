import { ContactForm } from '@/components/ui/contact-form';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-600 dark:text-slate-300">Need help selecting a device? Send us a message.</p>
      <ContactForm />
    </div>
  );
}
