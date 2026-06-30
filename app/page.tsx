import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Briefcase, Sparkles, BookOpen, User2 } from 'lucide-react';
import { CategoryGrid, FAQAccordion, SearchBar } from '../components';
import { featureCards, guaranteeCards, testimonials, faqs } from '../lib/data';
import { MobileBottomNav } from '../components/MobileBottomNav';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:py-16">
      <section className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div className="space-y-6 text-right">
          <p className="inline-flex items-center gap-2 rounded-full bg-badge px-4 py-2 text-sm font-semibold text-primary">
            منصة العمل الحر العربية
          </p>
          <h1 className="max-w-3xl text-4xl font-bold text-text sm:text-5xl">وظف أفضل المستقلين لإنجاز أعمالك عن بعد</h1>
          <p className="max-w-2xl text-base leading-8 text-muted">منصة عربية متكاملة تربطك بمستقلين محترفين في التصميم، البرمجة، التسويق، الكتابة والمزيد.</p>
          <div className="grid gap-4 sm:grid-cols-[1.5fr_1fr]">
            <SearchBar placeholder="ابحث عن مشروع أو مستقل..." />
            <Link href="/project/create" className="inline-flex items-center justify-center rounded-3xl bg-primary px-6 py-4 text-sm font-semibold text-white transition hover:bg-primaryHover">
              ابدأ مشروعك الآن
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium text-text">
            <Link href="/projects" className="rounded-full border border-border px-4 py-3 transition hover:border-primary hover:text-primary">ابحث عن عمل</Link>
            <Link href="/freelancers" className="rounded-full border border-border px-4 py-3 transition hover:border-primary hover:text-primary">ابحث عن مستقلين</Link>
          </div>
        </div>
        <div className="rounded-[2rem] bg-primary/5 p-8 text-right">
          <div className="rounded-[1.75rem] bg-white p-8 shadow-card">
            <div className="mb-4 flex items-center gap-3 text-primary">
              <ShieldCheck size={24} /> ضمان الدفع الآمن
            </div>
            <p className="text-sm text-muted">نظام الدفع آمن ويضمن حقوق العميل والمستقل حتى استلام المشروع.</p>
          </div>
        </div>
      </section>

      <section className="mt-20 text-right">
        <h2 className="text-3xl font-semibold text-text">كيف يعمل</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {['أضف مشروع', 'اختر المستقل', 'استلم المشروع'].map((step) => (
            <div key={step} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">✓</div>
              <h3 className="text-xl font-semibold text-text">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-right">
        <h2 className="text-3xl font-semibold text-text">مزايا مستقل</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-semibold text-text">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-right">
        <h2 className="text-3xl font-semibold text-text">ضماناتنا</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guaranteeCards.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-semibold text-text">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-right">
        <h2 className="text-3xl font-semibold text-text">التصنيفات</h2>
        <div className="mt-8">
          <CategoryGrid />
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-primary text-white">
        <div className="grid gap-8 rounded-3xl p-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold">مستقل للمؤسسات</h2>
            <p className="mt-4 text-base leading-8 text-primary/80">وظف المستقلين وأدر مشاريع مؤسستك من مكان واحد مع نظام حماية وتنسيق فرق كامل.</p>
          </div>
          <div className="space-y-3 text-sm">
            {['إدارة فرق العمل', 'تقارير موحدة', 'دعم احترافي'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-3xl bg-white/10 p-4">
                <Briefcase size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 text-right">
        <h2 className="text-3xl font-semibold text-text">شهادة العملاء</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((review) => (
            <div key={review.name} className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <p className="text-muted leading-7">«{review.text}»</p>
              <p className="mt-4 font-semibold text-text">{review.name}</p>
              <p className="text-sm text-muted">{review.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-right">
        <h2 className="text-3xl font-semibold text-text">الأسئلة الشائعة</h2>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-primary/5 p-10 text-right">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-text">ابدأ مشروعك الآن</h2>
            <p className="mt-2 text-muted">انشر مشروعك واجذب أفضل المستقلين العرب بسرعة.</p>
          </div>
          <Link href="/project/create" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white transition hover:bg-primaryHover">
            ابدأ مشروعك الآن
            <ArrowRight size={18} className="mr-2" />
          </Link>
        </div>
      </section>

      <MobileBottomNav />
    </div>
  );
}
