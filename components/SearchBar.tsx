interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar({ placeholder = 'ابحث عن مشروع أو مستقل...' }: SearchBarProps) {
  return (
    <div className="rounded-3xl border border-border bg-white px-4 py-3 shadow-card">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full bg-transparent text-right text-text placeholder:text-muted focus:outline-none"
      />
    </div>
  );
}
