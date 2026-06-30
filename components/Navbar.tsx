import Link from 'next/link';
import { Menu, Search, User, Briefcase } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-primary">
            وظفني
          </Link>
          <nav className="hidden items-center gap-4 lg:flex">
            <Link href="/project/create" className="text-sm font-medium text-text transition hover:text-primary">
              أضف مشروع
            </Link>
            <Link href="/freelancers" className="text-sm font-medium text-text transition hover:text-primary">
              ابحث عن مستقلين
            </Link>
            <Link href="/projects" className="text-sm font-medium text-text transition hover:text-primary">
              تصفح المشاريع
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text transition hover:border-primary hover:text-primary lg:inline-flex">
            تسجيل دخول
          </Link>
          <Link href="/register" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primaryHover lg:inline-flex">
            حساب جديد
          </Link>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text lg:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
