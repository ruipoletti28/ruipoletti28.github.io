import type { CategoryKey, FilterKey, Locale } from "../types";

export interface UiText {
  portfolio: string;
  headline: string;
  highlightsLabel: string;
  invoicesLabel: string;
  multistackLabel: string;
  aboutTitle: string;
  aboutText: string;
  experienceTitle: string;
  projectsTitle: string;
  itemsLabel: string;
  contactTitle: string;
  email: string;
  linkedin: string;
  github: string;
  footer: string;
  filters: Record<FilterKey, string>;
  categories: Record<CategoryKey, string>;
}

export const translations: Record<Locale, UiText> = {
  en: {
    portfolio: "Professional Portfolio",
    headline:
      "Systems Analyst with experience in .NET, React, Kotlin, Java and SQL Server, focused on APIs, automation and business-driven solutions.",
    highlightsLabel: "Highlighted projects",
    invoicesLabel: "Automated invoices",
    multistackLabel: "Backend, frontend and data",
    aboutTitle: "About",
    aboutText:
      "I work on internal and external systems, connecting technology with business needs. My focus is technical quality, maintainability, performance and continuous delivery of value.",
    experienceTitle: "Experience Timeline",
    projectsTitle: "Projects",
    itemsLabel: "items",
    contactTitle: "Contact",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer: "Portfolio of Rui Poletti",
    filters: {
      all: "All",
      personal: "Personal Project",
      unimed: "Unimed",
      international: "Abroad",
    },
    categories: {
      personal: "Personal Project",
      unimed: "Unimed",
      international: "Abroad",
    },
  },
  pt: {
    portfolio: "Portfólio Profissional",
    headline:
      "Analista de Sistemas com experiência em .NET, React, Kotlin, Java e SQL Server, com foco em APIs, automações e soluções orientadas ao negócio.",
    highlightsLabel: "Projetos em destaque",
    invoicesLabel: "Notas fiscais automatizadas",
    multistackLabel: "Backend, frontend e dados",
    aboutTitle: "Sobre mim",
    aboutText:
      "Atuo com sistemas internos e externos, conectando tecnologia às necessidades do negócio. Tenho foco em qualidade técnica, manutenção, performance e entrega contínua de valor.",
    experienceTitle: "Timeline de Experiência",
    projectsTitle: "Projetos",
    itemsLabel: "itens",
    contactTitle: "Contato",
    email: "E-mail",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer: "Portfólio de Rui Poletti",
    filters: {
      all: "Todos",
      personal: "Projeto Pessoal",
      unimed: "Unimed",
      international: "Exterior",
    },
    categories: {
      personal: "Projeto Pessoal",
      unimed: "Unimed",
      international: "Exterior",
    },
  },
};
