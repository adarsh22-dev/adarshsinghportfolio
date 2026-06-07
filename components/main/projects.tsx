"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 768 ? 4 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(PROJECTS.length / perPage);
  const visible = PROJECTS.slice(page * perPage, (page + 1) * perPage);

  useEffect(() => {
    if (page >= totalPages) setPage(0);
  }, [totalPages, page]);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10 md:py-20"
    >
      <h1 className="text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20 text-center px-6">
        My Projects
      </h1>
      <div className="relative w-full max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visible.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6 md:mt-8">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="size-10 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition"
              aria-label="Previous projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <span className="text-sm text-gray-400">
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="size-10 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition"
              aria-label="Next projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
