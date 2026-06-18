import type { FilterKey } from "../../types";
import { filters } from "../../data/projects";
import { useLocale } from "../../i18n/useLocale";

export interface ProjectFiltersProps {
  activeFilter: FilterKey;
  onChange: (filter: FilterKey) => void;
}

export function ProjectFilters({ activeFilter, onChange }: ProjectFiltersProps) {
  const { t } = useLocale();

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
            }`}
          >
            {t.filters[filter]}
          </button>
        );
      })}
    </div>
  );
}
