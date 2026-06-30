import { FAQAccordion } from '../../../components/FAQAccordion';
import { faqs } from '../../../lib/data';

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:py-16 text-right">
      <h1 className="text-3xl font-semibold text-text">الأسئلة الشائعة</h1>
      <p className="mt-4 text-sm text-muted">إليك أهم الأسئلة والإجابات حول استخدام مستقل.</p>
      <div className="mt-8">
        <FAQAccordion items={faqs} />
      </div>
    </div>
  );
}
