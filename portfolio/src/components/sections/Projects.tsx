import { useMemo, useState } from "react";

import type { FilterKey } from "../../types";
import { projects } from "../../data/projects";
import { useLocale } from "../../i18n/useLocale";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectFilters } from "../ui/ProjectFilters";

export function Projects() {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className="mt-12" aria-labelledby="projects-title">
      <div className="flex flex-wrap items-center gap-3">
        <h2 id="projects-title" className="text-2xl font-bold">
          {t.projectsTitle}
        </h2>
        <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">
          {filteredProjects.length} {t.itemsLabel}
        </span>
      </div>

      <ProjectFilters activeFilter={activeFilter} onChange={setActiveFilter} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={`${project.category}-${project.title.en}`} project={project} />
        ))}
      </div>
    </section>
  );
}
