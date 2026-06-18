import { useLocale } from "../../i18n/useLocale";

export function About() {
  const { t } = useLocale();

  return (
    <section aria-labelledby="about-title">
      <h2 id="about-title" className="text-2xl font-bold">
        {t.aboutTitle}
      </h2>
      <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">{t.aboutText}</p>
    </section>
  );
}
