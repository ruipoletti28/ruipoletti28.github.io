import type { FilterKey, Project } from "../types";

/** Filter options rendered above the project grid, in display order. */
export const filters: FilterKey[] = ["all", "personal", "unimed", "international"];

export const projects: Project[] = [
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
