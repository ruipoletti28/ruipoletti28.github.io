import { useMemo, useState, type ReactNode } from "react";

import type { Locale } from "../types";
import { LocaleContext } from "./locale-context";
import { translations } from "./translations";

const DEFAULT_LOCALE: Locale = "en";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale]
  );

  return <LocaleContext value={value}>{children}</LocaleContext>;
}
