/**
 * Single source of truth for personal/contact details and headline metrics.
 * Keeping it here avoids hardcoding the same values across components.
 */
export const site = {
  name: "Rui Poletti",
  contact: {
    email: "ruicarlospolettijunior@gmail.com",
    linkedin: {
      label: "linkedin.com/in/ruipoletti",
      url: "https://www.linkedin.com/in/ruipoletti",
    },
    github: {
      label: "github.com/ruipoletti28",
      url: "https://github.com/ruipoletti28",
    },
  },
} as const;

export interface Stat {
  /** Prominent value, e.g. "3.500+". */
  value: string;
  /** Translation key describing the value. */
  labelKey: "highlightsLabel" | "invoicesLabel" | "multistackLabel";
}

export const stats: Stat[] = [
  { value: "10+", labelKey: "highlightsLabel" },
  { value: "3.500+", labelKey: "invoicesLabel" },
  { value: "Multistack", labelKey: "multistackLabel" },
];
