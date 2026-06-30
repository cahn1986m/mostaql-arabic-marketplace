import Link from 'next/link';

const categories = [
  { name: 'برمجة', sub: ['تطوير واجهات', 'Back-end', 'تطبيقات موبايل'] },
  { name: 'تصميم', sub: ['هوية بصرية', 'واجهات المستخدم', 'موشن جرافيك'] },
  { name: 'تسويق', sub: ['سوشيال ميديا', 'إعلانات', 'SEO'] },
  { name: 'كتابة', sub: ['مقالات', 'تدوين', 'كتابة إعلانية'] },
  { name: 'أعمال', sub: ['إدارة مشاريع', 'استشارات', 'محاسبة'] },
  { name: 'هندسة', sub: ['هندسة برمجيات', 'تصميم أنظمة', 'تحليل'] },
  { name: 'ذكاء اصطناعي', sub: ['نماذج لغة', 'تحليل بيانات', 'تطبيقات AI'] },
  { name: 'دعم', sub: ['دعم فني', 'صيانة', 'تقنية'] },
  { name: 'تدريب', sub: ['كورسات', 'ورش عمل', 'استشارات تدريب'] }
];

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:py-16 text-right">
      <h1 className="text-3xl font-semibold text-text">التصنيفات</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.name} className="rounded-3xl border border-border bg-white p-6 shadow-card">
            <h2 className="text-xl font-semibold text-text">{category.name}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {category.sub.map((sub) => (
                <li key={sub} className="flex items-center justify-between rounded-2xl border border-border px-3 py-2">
                  <span>{sub}</span>
                  <span className="rounded-full bg-badge px-3 py-1 text-xs font-semibold text-primary">{Math.floor(Math.random() * 120 + 10)}</span>
                </li>
              ))}
            </ul>
            <Link href="/projects" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover">
              عرض جميع المشاريع
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
