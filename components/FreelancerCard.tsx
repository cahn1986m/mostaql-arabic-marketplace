import { Star, CircleDot } from 'lucide-react';

interface FreelancerCardProps {
  name: string;
  title: string;
  rating: number;
  country: string;
  isOnline: boolean;
}

export function FreelancerCard({ name, title, rating, country, isOnline }: FreelancerCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">{name.slice(0, 2)}</div>
        <div>
          <h3 className="text-lg font-semibold text-text">{name}</h3>
          <p className="text-sm text-muted">{title}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-1 rounded-full bg-badge px-3 py-1 text-primary">
          <Star size={16} /> {rating.toFixed(2)}%
        </span>
        {isOnline && (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-success">
            <CircleDot size={12} /> متصل الآن
          </span>
        )}
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{country} - مستقل موثوق لخدمات الاحترافية.</p>
    </div>
  );
}
