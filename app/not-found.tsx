import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <p className="text-8xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-semibold">الصفحة المطلوبة غير موجودة!</h1>
      <p className="mt-2 text-muted max-w-xl">قد يكون الرابط غير صحيح أو تمت إزالة هذه الصفحة.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-white transition hover:bg-primaryHover">
        العودة للرئيسية
      </Link>
    </main>
  );
}
