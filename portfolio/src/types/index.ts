/** Languages supported by the UI. */
export type Locale = "en" | "pt";

/** A localized string, available in every supported locale. */
export type Localized<T = string> = Record<Locale, T>;

/** Project categories used both as labels and as filter keys. */
export type CategoryKey = "personal" | "unimed" | "international";

/** Filter options shown above the project grid ("all" + every category). */
export type FilterKey = "all" | CategoryKey;

export interface Project {
  title: Localized;
  category: CategoryKey;
  summary: Localized;
  stack: string[];
  highlights: Localized<string[]>;
}

export interface TimelineItem {
  period: string;
  title: Localized;
  subtitle: Localized;
  description: Localized;
}
