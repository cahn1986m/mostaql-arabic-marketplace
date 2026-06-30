import { FreelancerCard } from '../../components/FreelancerCard';
import { FilterSidebar } from '../../components/FilterSidebar';
import { SearchBar } from '../../components/SearchBar';
import { StarRating } from '../../components/StarRating';
import { MobileBottomNav } from '../../components/MobileBottomNav';

const freelancers = [
  { name: 'علي الهاشمي', title: 'مطور ويب محترف', rating: 97.96, country: 'الإمارات', isOnline: true },
  { name: 'سارة الرفاعي', title: 'مصممة UX/UI', rating: 95.2, country: 'مصر', isOnline: false },
  { name: 'خالد محمود', title: 'مطور تطبيقات موبايل', rating: 93.8, country: 'السعودية', isOnline: true },
  { name: 'هند علي', title: 'كاتبة محتوى', rating: 96.4, country: 'لبنان', isOnline: false },
  { name: 'يوسف الصالح', title: 'مسوق رقمي', rating: 94.2, country: 'الكويت', isOnline: true }
];

export default function FreelancersPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:py-16">
      <div className="mb-10 text-right">
        <h1 className="text-3xl font-semibold text-text">ابحث عن مستقلين</h1>
        <p className="mt-2 text-muted">اكتشف أفضل المستقلين العربيين واحصل على العروض المناسبة.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <FilterSidebar title="التصفية">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">التخصص</h3>
            <div className="grid gap-2 text-sm text-text">
              {['برمجة', 'تصميم', 'تسويق', 'كتابة', 'هندسة'].map((item) => (
                <label key={item} className="inline-flex items-center gap-2 rounded-2xl border border-border px-3 py-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-text">المسمى الوظيفي</label>
            <input className="mt-2 w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="مثال: مطور واجهات" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text">المهارات</label>
            <input className="mt-2 w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="مثال: React" />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">التقييم</h3>
            <div className="flex flex-wrap gap-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <button key={star} className="rounded-full border border-border px-4 py-2 text-sm text-text transition hover:border-primary">{star} نجوم</button>
              ))}
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {['هوية موثّقة', 'المتصلون الآن', 'أضافوا عروضاً', 'وظفتهم سابقاً'].map((filter) => (
              <label key={filter} className="inline-flex w-full items-center gap-3 rounded-2xl border border-border px-3 py-3">
                <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                {filter}
              </label>
            ))}
          </div>
        </FilterSidebar>

        <div className="space-y-6">
          <div className="grid gap-6">
            {freelancers.map((item) => (
              <div key={item.name} className="rounded-3xl border border-border bg-white p-6 shadow-card">
                <FreelancerCard {...item} />
                <div className="mt-4 text-right">
                  <StarRating rating={item.rating} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-muted">
            <p>عرض 1-5 من المستقلين</p>
            <button className="text-primary">المزيد</button>
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
