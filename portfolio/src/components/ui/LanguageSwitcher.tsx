import type { Locale } from "../../types";
import { useLocale } from "../../i18n/useLocale";

const LOCALES: Locale[] = ["en", "pt"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex justify-end gap-2">
      {LOCALES.map((option) => {
        const active = locale === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={active}
            className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
              active
                ? "border-white bg-white text-slate-900"
                : "border-slate-600 bg-slate-800 text-slate-200 hover:border-slate-400"
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
