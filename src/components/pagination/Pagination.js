export const Pagination = (props) => {
  const { onPageChange, currentPage, totalPages } = props;
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  return (
    <div className="mx-auto flex max-w-fit flex-wrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <button
        className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
          isFirstPage
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
            : "border-slate-300 bg-white text-secondary hover:bg-slate-100"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Prev
      </button>
      {Array(totalPages)
        .fill()
        .map((_, index) => (
          <button
            key={index + 1}
            className={`min-w-10 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
              currentPage === index + 1
                ? "cursor-default border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => onPageChange(index + 1)}
            aria-current={currentPage === index + 1 ? "page" : undefined}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      <button
        className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
          isLastPage
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
            : "border-slate-300 bg-white text-secondary hover:bg-slate-100"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};
