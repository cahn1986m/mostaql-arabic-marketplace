import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-160px)] max-w-[500px] flex-col justify-center px-4 py-10 text-right sm:px-6">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
        <h1 className="text-2xl font-semibold text-text">إنشاء حساب جديد</h1>
        <p className="mt-2 text-sm text-muted">اختر نوع الحساب واملأ البيانات للبدء.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="rounded-3xl border border-border bg-surface px-4 py-4 text-sm font-semibold text-text transition hover:border-primary">
            أريد توظيف مستقلين
          </button>
          <button className="rounded-3xl border border-border bg-surface px-4 py-4 text-sm font-semibold text-text transition hover:border-primary">
            أريد العمل كمستقل
          </button>
        </div>
        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">الاسم الكامل</label>
            <input className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="الاسم الكامل" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">البريد الإلكتروني</label>
            <input type="email" className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="example@domain.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">كلمة المرور</label>
            <input type="password" className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="••••••••" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">تأكيد كلمة المرور</label>
            <input type="password" className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover">إنشاء حساب</button>
        </form>
        <p className="mt-6 text-sm text-muted">
          لديك حساب؟{' '}
          <Link href="/login" className="text-primary hover:underline">
            تسجيل دخول
          </Link>
        </p>
      </div>
    </div>
  );
}
