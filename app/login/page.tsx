import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-160px)] max-w-[420px] flex-col justify-center px-4 py-10 text-right sm:px-6">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
        <h1 className="text-2xl font-semibold text-text">تسجيل الدخول</h1>
        <p className="mt-2 text-sm text-muted">استخدم بريدك وكلمة المرور للدخول إلى حسابك.</p>
        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">البريد الإلكتروني</label>
            <input type="email" className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="example@domain.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">كلمة المرور</label>
            <input type="password" className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover">دخول</button>
        </form>
        <p className="mt-6 text-sm text-muted">
          ليس لديك حساب؟{' '}
          <Link href="/register" className="text-primary hover:underline">
            حساب جديد
          </Link>
        </p>
      </div>
    </div>
  );
}
