import Link from 'next/link';

interface UserPageProps {
  params: { username: string };
}

export default function UserProfilePage({ params }: UserPageProps) {
  const username = params.username;
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:py-16 text-right">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">{username[0].toUpperCase()}</div>
            <div>
              <h1 className="text-3xl font-semibold text-text">{username}</h1>
              <p className="text-sm text-muted">مطور ويب | مستقل محترف</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-5 text-sm text-text">
            <p>الدولة: مصر</p>
            <p className="mt-2">عضو منذ 2024</p>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-text">نبذة شخصية</h2>
            <p className="mt-3 text-sm leading-7 text-muted">أنا مستقل متخصص في تطوير الواجهات وتجربة المستخدم مع خبرة في المشاريع العربية والدولية.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text">المهارات</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind CSS', 'Figma'].map((skill) => (
                <span key={skill} className="rounded-full bg-badge px-3 py-1 text-sm font-medium text-primary">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text">أعمال سابقة</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <Link key={item} href="/portfolios" className="overflow-hidden rounded-3xl border border-border bg-surface p-4 text-sm text-text transition hover:bg-white">
                  مشروع {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text">التقييمات والمراجعات</h2>
            <div className="mt-4 space-y-4 rounded-3xl border border-border bg-surface p-5">
              <div className="rounded-3xl bg-white p-5 shadow-card">
                <p className="text-sm leading-7 text-muted">عمل ممتاز وتسليم سريع للغاية.</p>
                <p className="mt-3 text-sm font-semibold text-text">– عميل سابق</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-card">
                <p className="text-sm leading-7 text-muted">التواصل كان رائعاً والفهم ممتاز.</p>
                <p className="mt-3 text-sm font-semibold text-text">– شركة ريادة</p>
              </div>
            </div>
          </div>
          <button className="rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover">تواصل معه</button>
        </div>
      </div>
    </div>
  );
}
