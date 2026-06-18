import type { Project } from "../../types";
import { useLocale } from "../../i18n/useLocale";

export function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {t.categories[project.category]}
      </p>
      <h3 className="mt-2 text-xl font-semibold">{project.title[locale]}</h3>
      <p className="mt-3 text-slate-700">{project.summary[locale]}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {project.highlights[locale].map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-1 text-slate-500" aria-hidden="true">
              •
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
