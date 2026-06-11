import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "../../components/pagination/Pagination";
import { RepositoryCard } from "../../components/repositoryCard/RepositoryCard";
import { repositoryService } from "../../service";

export const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 13;

  const getUserRepositories = async () => {
    try {
      setLoading(true);
      const { data } = await repositoryService.getUserRepositories();
      setRepos(data);
      setTotalItems(data.length);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserRepositories();
  }, []);

  const totalPages = Math.max(1, Math.ceil(repos.length / perPage));
  const paginatedRepos = repos.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  if (loading) {
    return (
      <section className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <div
          className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"
          role="status"
          aria-label="Loading repositories"
        />
        <p className="mt-4 text-sm font-medium tracking-wide text-secondary">
          Loading repositories, please wait...
        </p>
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-6">
      <section className="mb-6">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Total Repositories</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{totalItems}</p>
        </div>
      </section>

      <ul>
        {paginatedRepos.map((repo) => (
            <li key={repo.id}>
              <RepositoryCard repo={repo} />
            </li>
          ))}
      </ul>

      {!repos.length && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">No repositories found</h2>
        </div>
      )}

      <div className="mt-10 text-center">
        <Pagination
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
