import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { paymentMethods } from '../lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-muted">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">مستقل</h3>
          <p className="max-w-sm text-sm">منصة عربية تمكنك من توظيف مستقلين وإدارة مشاريعك بكل سهولة وأمان.</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">المشاريع</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/projects" className="transition hover:text-primary">المشاريع المفتوحة</Link></li>
            <li><Link href="/project/create" className="transition hover:text-primary">أضف مشروع</Link></li>
            <li><Link href="/categories" className="transition hover:text-primary">التصنيفات</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">روابط</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/p/about" className="transition hover:text-primary">عن مستقل</Link></li>
            <li><Link href="/p/faq" className="transition hover:text-primary">الأسئلة الشائعة</Link></li>
            <li><Link href="/p/terms" className="transition hover:text-primary">شروط الاستخدام</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">تابعنا</h3>
          <div className="mb-4 flex items-center gap-3 text-text">
            <Instagram size={18} />
            <Twitter size={18} />
            <Facebook size={18} />
            <Linkedin size={18} />
          </div>
          <h4 className="mb-3 text-sm font-semibold text-text">وسائل الدفع</h4>
          <div className="flex flex-wrap gap-2 text-sm">
            {paymentMethods.map((method) => (
              <span key={method} className="rounded-full bg-badge px-3 py-1 font-medium text-primary">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-sm text-muted">© 2026 مستقل. جميع الحقوق محفوظة.</div>
    </footer>
  );
}
