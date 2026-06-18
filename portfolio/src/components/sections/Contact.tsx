import { site } from "../../config/site";
import { useLocale } from "../../i18n/useLocale";

export function Contact() {
  const { t } = useLocale();
  const { email, linkedin, github } = site.contact;

  return (
    <section
      className="mt-14 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="text-2xl font-bold">
        {t.contactTitle}
      </h2>
      <ul className="mt-4 space-y-2">
        <li>
          <span className="font-semibold">{t.email}:</span>{" "}
          <a href={`mailto:${email}`} className="text-sky-700 hover:underline">
            {email}
          </a>
        </li>
        <li>
          <span className="font-semibold">{t.linkedin}:</span>{" "}
          <a
            href={linkedin.url}
            className="text-sky-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin.label}
          </a>
        </li>
        <li>
          <span className="font-semibold">{t.github}:</span>{" "}
          <a
            href={github.url}
            className="text-sky-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {github.label}
          </a>
        </li>
      </ul>
    </section>
  );
}
