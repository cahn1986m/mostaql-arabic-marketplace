import Link from 'next/link';
import { Home, Search, User, Menu } from 'lucide-react';

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white py-2 shadow-[0_-2px_15px_rgba(15,23,42,0.06)] lg:hidden">
      <div className="mx-auto flex max-w-[1180px] items-center justify-around px-4">
        <Link href="/" className="flex flex-col items-center text-sm text-text">
          <Home size={20} />
          الرئيسية
        </Link>
        <Link href="/projects" className="flex flex-col items-center text-sm text-text">
          <Search size={20} />
          بحث
        </Link>
        <Link href="/register" className="flex flex-col items-center text-sm text-text">
          <User size={20} />
          حسابي
        </Link>
        <Link href="/categories" className="flex flex-col items-center text-sm text-text">
          <Menu size={20} />
          القائمة
        </Link>
      </div>
    </nav>
  );
}
