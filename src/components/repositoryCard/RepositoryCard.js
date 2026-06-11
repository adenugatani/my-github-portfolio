import React from "react";
import { Link } from "react-router-dom";

export const RepositoryCard = (props) => {
  const { repo } = props;

  const formatDate = (dateValue) => {
    if (!dateValue) return "N/A";
    return new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link to={`repo/${repo.name}`}>
      <div className="my-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:border-sky-200 hover:shadow-md">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-semibold text-tertiary hover:underline hover:decoration-tertiary">
            {repo.name}
          </h2>
          <span className="rounded-full border border-slate-200 px-2 py-1 text-xs font-medium capitalize text-secondary">
            {repo.visibility}
          </span>
        </div>
        <p className="mt-3 text-base text-secondary">
          {"Description"}: {repo.description}
        </p>
        <p className="mt-2 text-sm text-secondary">
          {"Language Used"}: {repo.language}
        </p>
        <p className="mt-2 text-sm text-secondary">
          {"Updated on"}: {formatDate(repo.updated_at)}
        </p>
      </div>
    </Link>
  );
};
