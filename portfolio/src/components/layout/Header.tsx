import { site, stats } from "../../config/site";
import { useLocale } from "../../i18n/useLocale";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { StatCard } from "../ui/StatCard";

export function Header() {
  const { t } = useLocale();

  return (
    <header className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <LanguageSwitcher />

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-300">
          {t.portfolio}
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">{site.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-200">{t.headline}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.labelKey} value={stat.value} label={t[stat.labelKey]} />
          ))}
        </div>
      </div>
    </header>
  );
}
