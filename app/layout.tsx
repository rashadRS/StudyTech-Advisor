import './globals.css';
import type { Metadata } from 'next';
import { AppProviders } from '@/components/providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'StudyTech Advisor',
  description: 'Bilingual smart platform for students to choose the right device.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <AppProviders>
          <Navbar />
          <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-6">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
