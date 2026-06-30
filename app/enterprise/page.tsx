import { CheckCircle2, Briefcase, Layers, ShieldCheck, BarChart3, MessageSquare } from 'lucide-react';
import { FAQAccordion } from '../../components/FAQAccordion';
import { MobileBottomNav } from '../../components/MobileBottomNav';
import { faqs } from '../../lib/data';

const enterpriseFeatures = [
  'إدارة المشاريع المشتركة',
  'صلاحيات وتحكم متقدم',
  'تقارير أداء دورية',
  'رصيد موحد للشركة',
  'مشاركة ملاحظات الفريق',
  'لوحة تحكم واحدة'
];

export default function EnterprisePage() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:py-16 text-right">
      <section className="rounded-[2rem] bg-[#0F172A] text-white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] p-10 lg:p-16">
          <div className="space-y-5">
            <p className="text-sm uppercase text-primary/80">مستقل للمؤسسات</p>
            <h1 className="text-4xl font-semibold">وظف المستقلين وأدر مشاريع مؤسستك من مكان واحد</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">حلول مخصصة للشركات لتسهيل التعاقد، التعاون، وإدارة الموارد مع حماية مالية جيدة.</p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover">أنشئ مؤسسة</button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">اعرف المزيد</button>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-8">
            <div className="grid gap-4">
              <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-5">
                <Briefcase size={24} className="text-primary" />
                <div>
                  <h3 className="font-semibold">فرق عمل مخصصة</h3>
                  <p className="text-sm text-slate-300">تنظيم فرق العمل وإدارة الصلاحيات.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-5">
                <Layers size={24} className="text-primary" />
                <div>
                  <h3 className="font-semibold">لوحة تحكم واحدة</h3>
                  <p className="text-sm text-slate-300">رؤية شاملة للمشاريع والميزانية.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 text-right">
        <h2 className="text-3xl font-semibold text-text">5 مميزات للمؤسسات</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {['فرق مخصصة', 'تقارير مفصلة', 'دفع موحد', 'دعم متخصص', 'تحكم كامل'].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-semibold text-text">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-right">
        <h2 className="text-3xl font-semibold text-text">كيف يعمل</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {['ابدأ مشروعك', 'اختر الفريق', 'تابع التنفيذ'].map((item, index) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">{index + 1}</div>
              <h3 className="text-lg font-semibold text-text">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-right">
        <h2 className="text-3xl font-semibold text-text">المميزات التفصيلية</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {enterpriseFeatures.map((feature) => (
            <div key={feature} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <h3 className="text-lg font-semibold text-text">{feature}</h3>
              <p className="mt-3 text-sm text-muted">حلول متكاملة لدعم تنظيم عمليتك في المشاريع والمؤسسة.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-right">
        <h2 className="text-3xl font-semibold text-text">الأسئلة الشائعة</h2>
        <div className="mt-8">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
      </section>

      <MobileBottomNav />
    </div>
  );
}
