import React from "react";

export const Header = ({ title }) => {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-secondary md:text-base">
          Browse projects, inspect repository metadata, and drill into details for each codebase.
        </p>
      </div>
    </header>
  );
};
