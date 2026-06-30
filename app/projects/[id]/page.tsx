import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: { id: string };
}

const project = {
  title: 'تطوير منصة تجارة إلكترونية',
  author: 'شركة الريادة',
  rating: 4.8,
  createdAt: 'قبل ساعتين',
  description: 'مشروع شامل لبناء منصة تجارة إلكترونية متعددة اللغات مع بوابة دفع آمنة ولوحة تحكم للمسؤول.',
  category: 'برمجة',
  skills: ['Next.js', 'React', 'Tailwind CSS'],
  budget: '500-1200$',
  duration: '2 أسابيع-شهر'
};

export default function ProjectPage({ params }: ProjectPageProps) {
  if (!params.id) notFound();

  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:py-16 text-right">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
        <h1 className="text-3xl font-semibold text-text">{project.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>العميل: {project.author}</span>
          <span>تقييم: {project.rating}</span>
          <span>{project.createdAt}</span>
        </div>
        <p className="mt-6 text-sm leading-7 text-muted">{project.description}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-5">
            <h3 className="mb-3 text-sm font-semibold text-text">التصنيف</h3>
            <p className="text-sm text-muted">{project.category}</p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-5">
            <h3 className="mb-3 text-sm font-semibold text-text">مدة التسليم</h3>
            <p className="text-sm text-muted">{project.duration}</p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-5">
            <h3 className="mb-3 text-sm font-semibold text-text">الميزانية</h3>
            <p className="text-sm text-muted">{project.budget}</p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-5">
            <h3 className="mb-3 text-sm font-semibold text-text">المهارات</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-badge px-3 py-1 text-sm font-medium text-primary">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <button className="mt-8 rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover">قدّم عرضاً</button>
      </div>
    </div>
  );
}
