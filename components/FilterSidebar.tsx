"use client";

import { useState } from 'react';

interface FilterSidebarProps {
  title: string;
  children: React.ReactNode;
}

export function FilterSidebar({ title, children }: FilterSidebarProps) {
  const [open, setOpen] = useState(true);

  return (
    <aside className="rounded-3xl border border-border bg-white p-5 shadow-card lg:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text">{title}</h2>
        <button
          type="button"
          className="text-sm font-medium text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? 'إخفاء' : 'إظهار'}
        </button>
      </div>
      {open && <div className="space-y-5">{children}</div>}
    </aside>
  );
}
