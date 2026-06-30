import Image from 'next/image';
import { Heart } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  likes: number;
  image: string;
}

export function PortfolioCard({ title, likes, image }: PortfolioCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card transition hover:-translate-y-1">
      <div className="relative h-52 w-full bg-gray-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted">
          <Heart size={16} className="text-primary" />
          {likes} إعجاب
        </div>
      </div>
    </div>
  );
}
