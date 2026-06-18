import type { TimelineItem } from "../../types";
import { useLocale } from "../../i18n/useLocale";

export function TimelineCard({ item }: { item: TimelineItem }) {
  const { locale } = useLocale();

  return (
    <article className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <span className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-slate-700" />
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {item.period}
      </p>
      <h3 className="mt-1 text-lg font-semibold">{item.title[locale]}</h3>
      <p className="mt-1 text-sm font-medium text-slate-600">{item.subtitle[locale]}</p>
      <p className="mt-3 text-slate-700">{item.description[locale]}</p>
    </article>
  );
}
