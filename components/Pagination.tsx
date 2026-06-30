interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl bg-white p-4 shadow-card">
      {pages.map((page) => (
        <button
          key={page}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${page === currentPage ? 'bg-primary text-white' : 'bg-surface text-text hover:bg-primary/10'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
