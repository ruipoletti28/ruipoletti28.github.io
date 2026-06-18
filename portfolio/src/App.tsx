import React, { useMemo, useState } from "react";

type Locale = "en" | "pt";
type CategoryKey = "personal" | "unimed" | "international";
type FilterKey = "all" | CategoryKey;

interface Project {
  title: Record<Locale, string>;
  category: CategoryKey;
  summary: Record<Locale, string>;
  stack: string[];
  highlights: Record<Locale, string[]>;
}

interface TimelineItem {
  period: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
}

const uiText = {
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

const timeline: TimelineItem[] = [
  {
    period: "Current",
    title: {
      en: "Systems Analyst / Software Developer",
      pt: "Analista de Sistemas / Desenvolvedor de Software",
    },
    subtitle: {
      en: "Enterprise projects with APIs, SQL Server and automation",
      pt: "Projetos empresariais com APIs, SQL Server e automação",
    },
    description: {
      en: "Development and maintenance of backend services, data structures and integrations focused on performance and business requirements.",
      pt: "Desenvolvimento e manutenção de serviços backend, estruturas de dados e integrações com foco em performance e regras de negócio.",
    },
  },
  {
    period: "Unimed",
    title: {
      en: "Internal Integrations and Process Automation",
      pt: "Integrações Internas e Automação de Processos",
    },
    subtitle: {
      en: "DocuSign API, NF automation and internal Minimal API",
      pt: "API DocuSign, automação de NF e Minimal API interna",
    },
    description: {
      en: "Delivered internal APIs and operational automation, including over 3,500 automated invoices and digital signature workflows integrated with CRM/ERP.",
      pt: "Entreguei APIs internas e automações operacionais, incluindo mais de 3.500 notas fiscais automatizadas e fluxos de assinatura digital integrados ao CRM/ERP.",
    },
  },
  {
    period: "Abroad",
    title: {
      en: "Web Portal, AI Agent and Data Layer",
      pt: "Portal Web, Agente de IA e Camada de Dados",
    },
    subtitle: {
      en: "React portal, Copilot Studio and SQL Server",
      pt: "Portal em React, Copilot Studio e SQL Server",
    },
    description: {
      en: "Built workflow-driven forms, access control paths, reporting pages and AI support for onboarding, plus SQL optimization with procedures, views and tables.",
      pt: "Construí formulários com fluxo entre equipes, controle de acessos, páginas de relatórios e suporte com IA para onboarding, além de otimização em SQL com procedures, views e tabelas.",
    },
  },
  {
    period: "Academic",
    title: {
      en: "ETL with Encryption (Capstone)",
      pt: "ETL com Criptografia (TCC)",
    },
    subtitle: {
      en: "Planilha Integra",
      pt: "Planilha Integra",
    },
    description: {
      en: "Designed an ETL-oriented tool to transform spreadsheet data with security controls and encryption for sensitive information.",
      pt: "Projetei uma ferramenta orientada a ETL para transformar dados de planilhas com controles de segurança e criptografia para informações sensíveis.",
    },
  },
];

const projects: Project[] = [
  {
    title: {
      en: "Kotlin App",
      pt: "APP em Kotlin",
    },
    category: "personal",
    summary: {
      en: "Mobile app foundation for healthy routine tracking with future wearable integrations.",
      pt: "Base de aplicativo mobile para rotina saudável com evolução para integrações com wearables.",
    },
    stack: ["Kotlin", "Android"],
    highlights: {
      en: [
        "Physical activity synchronization baseline",
        "Structure ready for historical records",
        "Continuous evolution as personal product",
      ],
      pt: [
        "Base para sincronização de atividades físicas",
        "Estrutura preparada para registros retroativos",
        "Evolução contínua como projeto pessoal",
      ],
    },
  },
  {
    title: {
      en: "Capstone: ETL Tool with Encryption - Planilha Integra",
      pt: "TCC: Ferramenta de ETL com Criptografia - Planilha Integra",
    },
    category: "personal",
    summary: {
      en: "Data extraction, transformation and loading with encryption layer for sensitive information.",
      pt: "Extração, transformação e carga de dados com camada de criptografia para informações sensíveis.",
    },
    stack: ["ETL", "Encryption", "Data Processing"],
    highlights: {
      en: [
        "Configurable transformation pipeline",
        "Encryption applied to critical data",
        "Focus on traceability and data integrity",
      ],
      pt: [
        "Pipeline de transformação com regras configuráveis",
        "Criptografia aplicada em dados críticos",
        "Foco em rastreabilidade e integridade",
      ],
    },
  },
  {
    title: {
      en: "Encapsulated DocuSign API",
      pt: "API Encapsulada do DocuSign",
    },
    category: "unimed",
    summary: {
      en: "Internal API for digital signature requests, tracking and document delivery integrated with CRM and ERP.",
      pt: "API interna para solicitação, acompanhamento de assinaturas digitais e envio de documentos integrada ao CRM e ERP.",
    },
    stack: [".NET", "C#", "DocuSign", "API"],
    highlights: {
      en: [
        "Internal standardized signature workflows",
        "Document status tracking",
        "Support for operational teams",
      ],
      pt: [
        "Padronização de fluxos internos de assinatura",
        "Acompanhamento de status de documentos",
        "Apoio às áreas operacionais",
      ],
    },
  },
  {
    title: {
      en: "Invoice Sending Automation",
      pt: "Automação do Envio de NF",
    },
    category: "unimed",
    summary: {
      en: "Automation of invoice generation and sending to comply with municipal legislation updates.",
      pt: "Automação da geração e envio de notas fiscais para atender atualizações da legislação municipal.",
    },
    stack: ["Automation", "Integration", "Fiscal"],
    highlights: {
      en: [
        "Over 3,500 invoices automated",
        "Lower manual effort and operational risk",
        "Workflow aligned with legal requirements",
      ],
      pt: [
        "Mais de 3.500 notas fiscais automatizadas",
        "Redução de esforço manual e risco operacional",
        "Processo alinhado às exigências legais",
      ],
    },
  },
  {
    title: {
      en: "Internal .NET Minimal API",
      pt: "API Minimal .NET (Interno)",
    },
    category: "unimed",
    summary: {
      en: "Internal services built with Minimal API for maintainability and fast evolution.",
      pt: "Serviços internos com Minimal API para manutenção simples e evolução rápida.",
    },
    stack: [".NET", "Minimal API", "C#"],
    highlights: {
      en: [
        "Lean architecture for internal services",
        "Fast endpoint evolution",
        "Support for corporate integrations",
      ],
      pt: [
        "Arquitetura enxuta para serviços internos",
        "Facilidade na evolução de endpoints",
        "Suporte a integrações corporativas",
      ],
    },
  },
  {
    title: {
      en: "Power Automate Flows",
      pt: "Automações com Power Automate",
    },
    category: "international",
    summary: {
      en: "Automation flows for repetitive tasks and process orchestration.",
      pt: "Fluxos de automação para tarefas repetitivas e orquestração de processos.",
    },
    stack: ["Power Automate", "Process Automation"],
    highlights: {
      en: [
        "Operational standardization",
        "Better response time between teams",
        "Higher efficiency in recurring routines",
      ],
      pt: [
        "Padronização operacional",
        "Melhor tempo de resposta entre equipes",
        "Mais eficiência em rotinas recorrentes",
      ],
    },
  },
  {
    title: {
      en: "Internal/External User Portal (React)",
      pt: "Portal de usuários internos e externos (React)",
    },
    category: "international",
    summary: {
      en: "Portal with workflow forms, excavation calculator, access control and report pages.",
      pt: "Portal com formulários em fluxo, calculadora de escavação, controle de acesso e páginas de relatórios.",
    },
    stack: ["React", "Routing", "Access Control"],
    highlights: {
      en: [
        "Project forms to support contract generation",
        "Excavation and material calculator",
        "Filtered reports without direct Power BI dependency",
      ],
      pt: [
        "Formulários de projeto para geração de contratos",
        "Calculadora de escavação e materiais",
        "Relatórios filtrados sem dependência direta do Power BI",
      ],
    },
  },
  {
    title: {
      en: "API and SQL Server (.NET/C#)",
      pt: "API e SQL Server (.NET/C#)",
    },
    category: "international",
    summary: {
      en: "Development, maintenance and performance improvements for APIs and database layers.",
      pt: "Desenvolvimento, manutenção e melhorias de performance em APIs e camada de banco de dados.",
    },
    stack: [".NET", "C#", "SQL Server", "APIs"],
    highlights: {
      en: [
        "Continuous delivery of enhancements",
        "Performance-focused optimization",
        "Support for new business features",
      ],
      pt: [
        "Entrega contínua de melhorias",
        "Otimização com foco em performance",
        "Suporte a novas funcionalidades",
      ],
    },
  },
  {
    title: {
      en: "AI Agent in Copilot Studio",
      pt: "Agente de IA no Copilot Studio",
    },
    category: "international",
    summary: {
      en: "AI assistant to help new employees with instant answers from indexed documentation.",
      pt: "Assistente de IA para apoiar novos colaboradores com respostas rápidas a partir de documentação indexada.",
    },
    stack: ["Copilot Studio", "AI", "Knowledge Base"],
    highlights: {
      en: [
        "Faster onboarding",
        "Reduced time to find process information",
        "Increased team autonomy",
      ],
      pt: [
        "Onboarding mais rápido",
        "Menor tempo para encontrar informações",
        "Maior autonomia das equipes",
      ],
    },
  },
  {
    title: {
      en: "SQL Server - Procedures, Tables and Views",
      pt: "SQL Server - Procs, tabelas e views",
    },
    category: "international",
    summary: {
      en: "Creation and maintenance of database objects focused on business rules and performance.",
      pt: "Criação e manutenção de objetos de banco com foco em regras de negócio e performance.",
    },
    stack: ["SQL Server", "T-SQL", "Data Modeling"],
    highlights: {
      en: [
        "Stored procedures, tables and views",
        "Critical query tuning",
        "Evolution aligned with business needs",
      ],
      pt: [
        "Procedures, tabelas e views",
        "Otimização de consultas críticas",
        "Evolução alinhada ao negócio",
      ],
    },
  },
];

const filters: FilterKey[] = ["all", "personal", "unimed", "international"];

export default function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const t = uiText[locale];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
                locale === "en"
                  ? "border-white bg-white text-slate-900"
                  : "border-slate-600 bg-slate-800 text-slate-200"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("pt")}
              className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
                locale === "pt"
                  ? "border-white bg-white text-slate-900"
                  : "border-slate-600 bg-slate-800 text-slate-200"
              }`}
            >
              PT
            </button>
          </div>

          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-300">{t.portfolio}</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Rui Poletti</h1>
          <p className="mt-4 max-w-3xl text-slate-200">{t.headline}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm text-slate-300">{t.highlightsLabel}</p>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
              <p className="text-2xl font-bold">3.500+</p>
              <p className="text-sm text-slate-300">{t.invoicesLabel}</p>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
              <p className="text-2xl font-bold">Multistack</p>
              <p className="text-sm text-slate-300">{t.multistackLabel}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section>
          <h2 className="text-2xl font-bold">{t.aboutTitle}</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">{t.aboutText}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">{t.experienceTitle}</h2>

          <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
            {timeline.map((item) => (
              <article key={`${item.period}-${item.title.en}`} className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-slate-700" />
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title[locale]}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">{item.subtitle[locale]}</p>
                <p className="mt-3 text-slate-700">{item.description[locale]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-bold">{t.projectsTitle}</h2>
            <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">
              {filteredProjects.length} {t.itemsLabel}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {t.filters[filter]}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={`${project.category}-${project.title.en}`}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {t.categories[project.category]}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.title[locale]}</h3>
                <p className="mt-3 text-slate-700">{project.summary[locale]}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {project.highlights[locale].map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 text-slate-500">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={`${project.title.en}-${technology}`}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">{t.contactTitle}</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="font-semibold">{t.email}:</span>{" "}
              <a href="mailto:ruicarlospolettijunior@gmail.com" className="text-sky-700 hover:underline">
                ruicarlospolettijunior@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">{t.linkedin}:</span>{" "}
              <a
                href="https://www.linkedin.com/in/ruipoletti"
                className="text-sky-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ruipoletti
              </a>
            </li>
            <li>
              <span className="font-semibold">{t.github}:</span>{" "}
              <a
                href="https://github.com/ruipoletti28"
                className="text-sky-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ruipoletti28
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} - {t.footer}
      </footer>
    </div>
  );
}
