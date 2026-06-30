import Link from 'next/link';
import { Clock, MessageCircle, Tag } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  proposals: number;
  description: string;
  category: string;
}

export function ProjectCard({ id, title, author, createdAt, proposals, description, category }: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm text-muted">
        <span className="inline-flex items-center gap-1 rounded-full bg-badge px-3 py-1 text-primary">
          <Tag size={14} /> {category}
        </span>
        <span>{createdAt}</span>
      </div>
      <h3 className="text-xl font-semibold text-text">
        <Link href={`/projects/${id}`} className="hover:text-primary">
          {title}
        </Link>
      </h3>
      <p className="my-4 text-sm leading-7 text-muted">{description}</p>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <Clock size={16} /> {author}
        </span>
        <span className="inline-flex items-center gap-2">
          <MessageCircle size={16} /> {proposals} عرض
        </span>
      </div>
    </div>
  );
}
