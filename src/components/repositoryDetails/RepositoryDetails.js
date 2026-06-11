import React from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

export const RepositoryDetails = (props) => {
  const { userRepositoryDetails } = props;

  const formatDate = (dateValue) => {
    if (!dateValue) return "N/A";
    return new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!userRepositoryDetails) {
    return (
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
        <h1 className="text-2xl font-bold text-slate-900">Repository details unavailable</h1>
        <p className="mt-3 text-secondary">
          We could not load this repository at the moment.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Back to repositories
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Back to repositories
        </Link>
        <span className="rounded-full border border-slate-200 px-2 py-1 text-xs font-medium capitalize text-secondary">
          {userRepositoryDetails.visibility}
        </span>
      </div>

      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">{userRepositoryDetails.name}</h1>
      </div>
      <div className="mb-6 grid gap-3 md:grid-cols-3 md:px-4">
        <Button extraClass="bg-emerald-600 md:basis-1/3">
          {userRepositoryDetails.forks} Forks
        </Button>
        <Button extraClass="bg-secondary md:basis-1/3">
          {userRepositoryDetails.watchers} Watching
        </Button>
        <Button extraClass="bg-slate-900 md:basis-1/3">
          {userRepositoryDetails.default_branch}
        </Button>
      </div>

      <p className="py-2 text-center text-secondary">
        {"Created at"}: {formatDate(userRepositoryDetails.created_at)}
      </p>
      <p className="py-2 text-center text-secondary">
        {"Updated at"}: {formatDate(userRepositoryDetails.updated_at)}
      </p>
      <p className="mb-2 py-2 text-center text-secondary">
        {"Pushed at"}: {formatDate(userRepositoryDetails.pushed_at)}
      </p>
    </div>
  );
};
