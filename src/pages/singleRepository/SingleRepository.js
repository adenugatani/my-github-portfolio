import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepositoryDetails } from "../../components/repositoryDetails/RepositoryDetails";
import { repositoryService } from "../../service/Repo.service";

export const SingleRepository = () => {
  const [userRepositoryDetails, setUserRepositoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const getSingleRepository = async (param) => {
    try {
      setLoading(true);
      const { data } = await repositoryService.getSingleRepository(param);
      setUserRepositoryDetails(data);
      console.log(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!name) return;
    getSingleRepository(name);
  }, [name]);

  if (loading) {
    return (
      <section className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <div
          className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"
          role="status"
          aria-label="Loading repository details"
        />
        <p className="mt-4 text-sm font-medium tracking-wide text-secondary">
          Loading repository details...
        </p>
      </section>
    );
  }

  return (
    <div>
      <RepositoryDetails userRepositoryDetails={userRepositoryDetails} />
    </div>
  );
};
