import { timeline } from "../../data/timeline";
import { useLocale } from "../../i18n/useLocale";
import { TimelineCard } from "../ui/TimelineCard";

export function Experience() {
  const { t } = useLocale();

  return (
    <section className="mt-12" aria-labelledby="experience-title">
      <h2 id="experience-title" className="text-2xl font-bold">
        {t.experienceTitle}
      </h2>

      <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
        {timeline.map((item) => (
          <TimelineCard key={`${item.period}-${item.title.en}`} item={item} />
        ))}
      </div>
    </section>
  );
}
