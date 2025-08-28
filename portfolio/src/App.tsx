import React, { useState } from "react";

const projetos = [
  {
    titulo: "API Minimal .NET (Interno)",
    descricao:
      "API para envio e recebimento de faturas entre Unimed do Brasil, com autenticação JWT, certificado digital e documentação via Swagger. Permite o envio de arquivos JSON e faturas em PDF, além de receber dados em formato DTO, realizar o mapeamento de campos e salvar no banco de dados.",
    link: "https://github.com/seu-usuario/seu-repo",
  },
  {
    titulo: "APP em Kotlin",
    descricao:
      "Aplicativo desenvolvido em Kotlin para integração com Google Fit e Health, permitindo o envio de atividades físicas. Futuramente, será possível integrar com dispositivos Wearables e registrar atividades retroativas.",
    link: "https://github.com/seu-usuario/seu-repo",
  },
  {
    titulo: "API Encapsulada do DocuSign",
    descricao:
      "Integração de API para assinatura eletrônica via DocuSign, com envio de envelopes e callbacks para rastreamento de assinaturas. Desenvolvido para uso interno, atendendo demandas da área jurídica.",
    link: "https://github.com/seu-usuario/api-docusign",
  },
  {
    titulo: "Automação do Envio de NF",
    descricao:
      "Automação do processo de envio de notas fiscais eletrônicas utilizando Puppeteer e RobotJS. Permite a emissão automatizada de mais de 3.500 notas fiscais mensais.",
    link: "https://github.com/seu-usuario/api-docusign",
  },
];

export default function App() {
  const [startIdx, setStartIdx] = useState(0);
  const visibleProjects = projetos.slice(startIdx, startIdx + 2);
  const canPrev = startIdx > 0;
  const canNext = startIdx + 2 < projetos.length;

  return (
    <div className="font-sans bg-gray-100 text-red-800">
      {/* Header */}
      <header className="bg-slate-800 text-red-800 py-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold">Rui Poletti</h1>
        <p className="mt-2 text-lg">
          Desenvolvedor Web - .NET | PL/SQL | React | Kotlin | Java | C#
        </p>
      </header>

      {/* Sobre */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Sobre mim</h2>
        <p>
          Sou Analista de Sistemas com experiência em .NET, React, Kotlin, Java e
          PL/SQL. Tenho vivência em DevOps, CI/CD e arquiteturas modernas como
          Minimal API e também MVC. Atualmente estou com foco em .NET e PL/SQL. 
          Porém sigo estudando e aprendendo novas tecnologias e frameworks.
        </p>
      </section>

      {/* Projetos - Carrossel */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-6">Projetos</h2>
          <div className="flex items-center gap-4">
            {/* Seta Esquerda */}
            <button
              onClick={() => setStartIdx((idx) => Math.max(0, idx - 1))}
              disabled={!canPrev}
              className={`text-3xl px-2 py-1 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label="Anterior"
            >
              &#8592;
            </button>
            {/* Projetos Visíveis */}
            <div className="grid md:grid-cols-2 gap-6 flex-1">
              {visibleProjects.map((proj, idx) => (
                <div
                  key={proj.titulo + idx}
                  className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
                >
                  <h3 className="text-xl font-semibold mb-2">{proj.titulo}</h3>
                  <p className="mb-3">{proj.descricao}</p>
                  {/* <a
                    href={proj.link}
                    className="text-sky-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     Ver código
                  </a> */}
                </div>
              ))}
            </div>
            {/* Seta Direita */}
            <button
              onClick={() => setStartIdx((idx) => Math.min(projetos.length - 2, idx + 1))}
              disabled={!canNext}
              className={`text-3xl px-2 py-1 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label="Próximo"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Contato</h2>
        <ul className="space-y-2">
          <li>
            📧{" "}
            <a
              href="mailto:ruicarlospolettijunior@gmail.com"
              className="text-sky-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ruicarlospolettijunior@gmail.com
            </a>
          </li>
          <li>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/ruipoletti"
              className="text-sky-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            </li>
          <li>
            🔗{" "}
            <a
              href="https://github.com/ruipoletti28"
              className="text-sky-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6 text-center">
        <p>© 2025 - Portfólio de Rui Poletti</p>
      </footer>
    </div>
  );
}
