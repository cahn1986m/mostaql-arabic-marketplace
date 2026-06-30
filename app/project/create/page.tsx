import { StepIndicator } from '../../../components/StepIndicator';

const steps = ['تفاصيل المشروع', 'المهارات والمدة', 'الميزانية', 'مراجعة ونشر'];

export default function CreateProjectPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:py-16 text-right">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
        <h1 className="text-3xl font-semibold text-text">أضف مشروع جديد</h1>
        <p className="mt-2 text-muted">مرحباً بك في خطوات إنشاء مشروعك الجديد.</p>
        <div className="mt-8">
          <StepIndicator steps={steps} currentStep={1} />
        </div>
        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">عنوان المشروع</label>
            <input className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="مثال: تصميم متجر إلكتروني" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">التصنيف</label>
            <select className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary">
              <option>برمجة</option>
              <option>تصميم</option>
              <option>تسويق</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-text">الوصف التفصيلي</label>
            <textarea rows={6} className="w-full rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-primary" placeholder="اكتب تفاصيل المشروع والمتطلبات هنا..."></textarea>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover">التالي</button>
            <button className="rounded-3xl border border-border px-6 py-3 text-sm font-semibold text-text">عودة</button>
          </div>
        </form>
      </div>
    </div>
  );
}
