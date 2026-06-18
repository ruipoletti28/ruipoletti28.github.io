import { createContext } from "react";

import type { Locale } from "../types";
import type { UiText } from "./translations";

export interface LocaleContextValue {
  /** Currently active locale. */
  locale: Locale;
  /** Switch the active locale. */
  setLocale: (locale: Locale) => void;
  /** Translation dictionary for the active locale. */
  t: UiText;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);
