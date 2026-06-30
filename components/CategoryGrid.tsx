import Link from 'next/link';
import { categories } from '../lib/data';
import { Code2, Palette, TrendingUp, PenTool, Building, Brain, Cpu, Headphones, BookOpen } from 'lucide-react';

const icons = {
  برمجة: Code2,
  تصميم: Palette,
  تسويق: TrendingUp,
  كتابة: PenTool,
  أعمال: Building,
  هندسة: Brain,
  'ذكاء اصطناعي': Cpu,
  دعم: Headphones,
  تدريب: BookOpen
};

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const Icon = icons[category.key as keyof typeof icons];
        return (
          <Link
            key={category.key}
            href={`/categories`}
            className="group rounded-3xl border border-border bg-white p-6 text-right transition hover:border-primary hover:bg-primary/5"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-text">{category.label}</h3>
            <p className="mt-2 text-sm text-muted">اكتشف أفضل المشاريع والمستقلين في هذا القسم.</p>
          </Link>
        );
      })}
    </div>
  );
}
