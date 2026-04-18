import './globals.css';
import { Providers } from '@/components/ui/providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata = { title: 'StudyTech Advisor', description: 'Bilingual smart device advisor for students in Malaysia.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className="container-page py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
