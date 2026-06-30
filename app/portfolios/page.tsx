import { PortfolioCard } from '../../components/PortfolioCard';
import { FilterSidebar } from '../../components/FilterSidebar';
import { SearchBar } from '../../components/SearchBar';

const works = Array.from({ length: 12 }).map((_, index) => ({
  title: `عمل فني ${index + 1}`,
  likes: 20 + index * 5,
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
}));

export default function PortfoliosPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:py-16">
      <div className="mb-10 text-right">
        <h1 className="text-3xl font-semibold text-text">معرض الأعمال</h1>
        <p className="mt-2 text-muted">استعرض أعمال المستقلين السابقة لتقييم المهارة والجودة.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <FilterSidebar title="التصنيف">
          <div className="space-y-3">
            {['تصميم', 'برمجة', 'تسويق', 'كتابة', 'هندسة'].map((item) => (
              <label key={item} className="inline-flex w-full items-center gap-2 rounded-2xl border border-border px-3 py-3 text-sm text-text">
                <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                {item}
              </label>
            ))}
          </div>
        </FilterSidebar>
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {works.map((work) => (
              <PortfolioCard key={work.title} {...work} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
