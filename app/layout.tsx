import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'وظفني - منصة العمل الحر العربية',
  description: 'منصة عربية للعمل الحر، توظيف مستقلين وإدارة المشاريع بسهولة.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} min-h-screen bg-white text-text`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
