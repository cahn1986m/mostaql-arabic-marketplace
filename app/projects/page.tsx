import Link from 'next/link';
import { FilterSidebar } from '../../components/FilterSidebar';
import { ProjectCard } from '../../components/ProjectCard';
import { Pagination } from '../../components/Pagination';
import { SearchBar } from '../../components/SearchBar';
import { projectDurations, skills } from '../../lib/data';
import { MobileBottomNav } from '../../components/MobileBottomNav';

const sampleProjects = Array.from({ length: 12 }).map((_, index) => ({
  id: `proj-${index + 1}`,
  title: `مشروع برمجي ${index + 1}`,
  author: `عميل ${index + 1}`,
  createdAt: `${index + 1} ساعة مضت`,
  proposals: 5 + index,
  description: 'وصف مختصر للمشروع يتضمن المهارات المطلوبة والنتيجة المتوقعة من المستقل.',
  category: ['برمجة', 'تصميم', 'تسويق'][index % 3]
}));

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:py-16">
      <div className="mb-10 flex flex-col gap-4 text-right sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-text">المشاريع المفتوحة</h1>
          <p className="mt-2 text-muted">اكتشف المشاريع المفتوحة واختر العرض المناسب لك.</p>
        </div>
        <SearchBar placeholder="ابحث عن المشاريع..." />
      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <FilterSidebar title="التصفية">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">التصنيف</h3>
            <div className="grid gap-2 text-sm text-text">
              {['برمجة', 'تصميم', 'تسويق', 'كتابة', 'أعمال'].map((category) => (
                <label key={category} className="inline-flex items-center gap-2 rounded-2xl border border-border px-3 py-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                  {category}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-text">المهارات</label>
            <input className="mt-2 w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="ابحث عن مهارات" />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">مدة التسليم</h3>
            <div className="grid gap-2 text-sm text-text">
              {projectDurations.map((duration) => (
                <label key={duration} className="inline-flex items-center gap-2 rounded-2xl border border-border px-3 py-2">
                  <input type="radio" name="duration" className="h-4 w-4 rounded border-border text-primary" />
                  {duration}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-text">الميزانية</label>
            <input type="range" min="25" max="10000" className="mt-3 w-full" />
            <div className="mt-2 flex items-center justify-between text-sm text-muted">
              <span>25$</span>
              <span>10000$</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-3xl bg-primary px-5 py-3 text-white">عرض النتائج</button>
            <button className="rounded-3xl border border-border px-5 py-3 text-text">عودة</button>
          </div>
        </FilterSidebar>

        <div className="space-y-6">
          <div className="grid gap-6">
            {sampleProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <Pagination currentPage={1} totalPages={3} />
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
