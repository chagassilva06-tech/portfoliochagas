import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Code2,
  Figma,
  Github,
  Instagram,
  Linkedin,
  Facebook,
  Activity,
  Mail,
  Phone,
  Menu,
  X,
  Sparkles,
  Layout,
  Wrench,
  HeartHandshake,
  ChevronDown,
  ExternalLink,
  Download,
} from "lucide-react";

import heroAsset from "../assets/hero-arms.png.asset.json";
import menuIconAsset from "../assets/menu-icon.png.asset.json";
import projRunner from "../assets/proj-runner.jpg";
import projLinks from "../assets/proj-links.jpg";
import projDashboard from "../assets/proj-dashboard.jpg";
import projPortfolio from "../assets/proj-portfolio.jpg";

const heroPhoto = heroAsset.url;
const menuIcon = menuIconAsset.url;
const CV_URL = "/Curriculo_Francisco_Chagas_2025.pdf";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francisco Chagas | Web & UX Portfolio" },
      { name: "description", content: "Desenvolvedor Web em transição para UX/UI — interfaces modernas, responsivas e centradas na experiência do usuário." },
      { property: "og:title", content: "Francisco Chagas | Web & UX Portfolio" },
      { property: "og:description", content: "Portfólio com projetos de UX/UI, desenvolvimento web e design de interfaces." },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

const PROJECT_LINK = "https://francisco-app.base44.app/";
const REPO_LINK = "https://github.com/";

const PROJECTS = [
  {
    n: "01",
    title: "Landing Page Francisco Runner",
    category: "Landing Page • Storytelling",
    stack: ["HTML", "CSS", "JavaScript", "Base44"],
    desc: "Site pessoal para atleta amador, com foco em storytelling, UX, responsividade e identidade visual.",
    img: projRunner,
    featured: true,
    live: PROJECT_LINK,
    repo: REPO_LINK,
    caseStudy: {
      overview: "A Landing Page Francisco Runner é um projeto pessoal criado para apresentar minha trajetória como atleta amador autodidata no mundo da corrida de rua. O objetivo foi construir uma página visual, moderna e responsiva, usando storytelling, identidade visual forte e uma experiência de navegação simples e direta.",
      problem: "Eu precisava de uma página que apresentasse minha história na corrida de forma mais profissional, organizada e visual. A ideia era sair de uma apresentação simples e criar uma experiência mais completa, com imagens, textos curtos, cards e uma narrativa clara da minha evolução como corredor.",
      objective: "Criar uma landing page moderna, responsiva e impactante para apresentar minha trajetória, conquistas, evolução pessoal e conexão com a corrida de rua, usando princípios de UX/UI, hierarquia visual e design responsivo.",
      solution: "Desenvolvi uma estrutura com hero impactante, seções bem divididas, cards visuais, contraste entre fundo escuro e detalhes em neon, além de uma navegação fluida. O projeto foi pensado para transmitir energia, foco, superação e identidade pessoal.",
      process: "O processo começou com a definição da proposta visual e da mensagem principal da página. Depois, organizei as seções em uma ordem lógica: apresentação, história, evolução, imagens, destaques e contato. Em seguida, trabalhei o layout com foco em responsividade, leitura agradável e impacto visual.",
      tools: "HTML, CSS, JavaScript, Base44, Canva e conceitos de UX/UI.",
      result: "O resultado foi uma landing page com identidade própria, visual moderno, boa organização das informações e adaptação para diferentes tamanhos de tela. O projeto reforça minha capacidade de criar interfaces digitais com foco em experiência do usuário, estética visual e comunicação clara.",
    },
  },
  {
    n: "02",
    title: "Página de Links Profissional",
    category: "Linktree Personalizado",
    stack: ["HTML", "CSS", "JavaScript", "UX/UI"],
    desc: "Projeto estilo Linktree personalizado, com foco em identidade, usabilidade e conversão.",
    img: projLinks,
    live: PROJECT_LINK,
    repo: REPO_LINK,
    caseStudy: {
      overview: "Página de links personalizada para centralizar contatos, redes sociais e projetos em um único lugar com identidade visual coerente.",
      problem: "Centralizar minhas redes e projetos em um link único, evitando soluções genéricas e sem identidade visual.",
      objective: "Construir um hub de links com visual próprio, leve, responsivo e de fácil manutenção.",
      solution: "Layout minimalista com botões grandes, hierarquia clara, foto de perfil e contraste alto para boa legibilidade no mobile.",
      process: "Definição dos links prioritários, esboço visual, prototipação rápida e implementação em HTML, CSS e JS puro.",
      tools: "HTML, CSS, JavaScript e conceitos de UX/UI.",
      result: "Uma página leve, com carregamento rápido, identidade própria e foco em conversão para os principais canais.",
    },
  },
  {
    n: "03",
    title: "Dashboard de Fornecedores",
    category: "Dashboard • Dados",
    stack: ["Excel", "Base44", "UX"],
    desc: "Organização de dados para controle de entregas, fornecedores e notas fiscais.",
    img: projDashboard,
    live: PROJECT_LINK,
    repo: REPO_LINK,
    caseStudy: {
      overview: "Dashboard interno para acompanhar fornecedores, entregas e notas fiscais com visão centralizada e filtros úteis.",
      problem: "As informações de fornecedores estavam dispersas em planilhas e documentos, dificultando o acompanhamento operacional.",
      objective: "Centralizar e organizar os dados em uma única visão que facilitasse decisões rápidas no dia a dia.",
      solution: "Estrutura tabular com indicadores, filtros por status e cards de resumo destacando o que precisa de atenção.",
      process: "Levantamento dos dados, organização das colunas, definição de indicadores e construção do layout no Base44.",
      tools: "Excel, Base44 e princípios de UX para dashboards.",
      result: "Maior controle das entregas, redução de retrabalho e visão clara do status dos fornecedores.",
    },
  },
  {
    n: "04",
    title: "Portfólio Web & UX",
    category: "Portfólio Pessoal",
    stack: ["HTML", "CSS", "JavaScript", "Design System"],
    desc: "Este próprio portfólio como projeto: estrutura, design system, responsividade e processo.",
    img: projPortfolio,
    live: PROJECT_LINK,
    repo: REPO_LINK,
    caseStudy: {
      overview: "Meu portfólio pessoal pensado como produto: design system, identidade visual, responsividade e narrativa de processo.",
      problem: "Eu precisava de um espaço próprio para apresentar projetos, habilidades e processo de forma consistente.",
      objective: "Criar um portfólio com identidade forte, navegação clara e foco em UX, que servisse como vitrine profissional.",
      solution: "Design system com tokens semânticos, tema escuro com acentos neon, cards animados, microinterações e seções bem definidas.",
      process: "Definição de tom visual, wireframes, prototipação, escolha tipográfica e implementação responsiva.",
      tools: "HTML, CSS, JavaScript, Design System, Figma e Lovable.",
      result: "Portfólio coeso, moderno e responsivo, que comunica claramente meu posicionamento como Web & UX.",
    },
  },
];

const SKILLS = [
  { icon: Code2, title: "Desenvolvimento Web", items: ["HTML", "CSS", "JavaScript", "GitHub", "VS Code"] },
  { icon: Layout, title: "UX / UI Design", items: ["Wireframe", "Prototipação", "Responsividade", "Hierarquia visual", "Experiência do usuário"] },
  { icon: Wrench, title: "Ferramentas", items: ["Figma", "Canva", "Base44", "Excel", "GitHub Pages", "Lovable"] },
  { icon: HeartHandshake, title: "Soft skills", items: ["Organização", "Análise de processos", "Comunicação", "Controle de informações", "Visão operacional"] },
];

const PROCESS = [
  { n: "01", t: "Entender o problema", d: "Pesquisa, conversa e definição clara do desafio." },
  { n: "02", t: "Desenhar a solução", d: "Wireframes, fluxos e direção visual." },
  { n: "03", t: "Construir a interface", d: "Código limpo, responsivo e acessível." },
  { n: "04", t: "Testar e iterar", d: "Validação com usuários e ajustes finos." },
];

const TECHS = [
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "ffffff" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Vite", slug: "vite", color: "646CFF" },
  { name: "TailwindCSS", slug: "tailwindcss", color: "06B6D4" },
];

const TEXT_TECHS = ["Lovable", "Base44", "Prompt Engineering"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [cardAberto, setCardAberto] = useState<string | null>(null);
  const toggleCard = (n: string) => setCardAberto((prev) => (prev === n ? null : n));

  useEffect(() => {
    document.documentElement.classList.remove("light");
    try { localStorage.removeItem("theme"); } catch {}
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-background/70 backdrop-blur-xl px-5 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 font-display font-bold group/logo transition-all duration-300 hover:opacity-90"
            >
              <span className="hidden sm:inline origin-left transition-transform duration-300 group-hover/logo:scale-105 group-hover/logo:text-neon">Francisco Chagas<span className="text-neon"> | </span>Web & UX</span>
            </a>

            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="rounded-full border border-white/10 bg-secondary/40 px-4 py-2 text-muted-foreground transition-all duration-300 hover:text-neon hover:border-primary/60 hover:bg-primary/10 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_var(--neon)]"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
              <button onClick={() => setMenuOpen(v => !v)} className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition hover:border-primary/60 hover:text-neon hover:scale-110" aria-label="Menu">
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-2 rounded-2xl border border-white/5 bg-background/95 backdrop-blur-xl p-4 animate-fade-in">
              <div className="flex flex-col gap-3">
                {NAV.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="rounded-full border border-white/10 bg-secondary/40 px-4 py-2 text-sm text-center transition-all duration-300 hover:text-neon hover:border-primary/60 hover:bg-primary/10 hover:scale-105">{n.label}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-24 right-0 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-neon">
              <Sparkles className="h-3.5 w-3.5" /> Disponível para novos projetos
            </span>
            <div className="mt-5 flex items-center gap-5">
              <div className="group/title relative shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl transition-opacity duration-500 group-hover/title:opacity-90" />
                <div className="relative grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-2xl border-2 border-primary/60 bg-card/70 font-display text-2xl sm:text-3xl font-bold text-neon shadow-[0_0_30px_-5px_var(--neon)] transition-all duration-500 group-hover/title:-translate-y-1 group-hover/title:scale-110 group-hover/title:rotate-3">
                  FC
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Francisco <span className="text-neon">Chagas</span>
                <span className="block text-2xl sm:text-3xl text-muted-foreground font-semibold mt-1">| Web & UX</span>
              </h1>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Desenvolvedor Web em transição para <span className="text-foreground font-semibold">UX/UI</span>, criando interfaces modernas, responsivas e centradas na experiência do usuário.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="btn-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                Ver projetos <ArrowRight className="h-4 w-4" />
              </a>
              <a href={CV_URL} download className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                <Download className="h-4 w-4" /> Baixar currículo
              </a>

              <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                <Github className="h-4 w-4" /> Repositório GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "4+", v: "Projetos" },
                { k: "ADS", v: "Formação" },
                { k: "UX/UI", v: "Em transição" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-white/5 bg-card/60 p-4 text-center">
                  <div className="text-2xl font-bold text-neon">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero portrait (transparent PNG, blends with background) */}
          <div className="relative mx-auto lg:mx-0 lg:justify-self-end group">
            <div className="relative h-[460px] w-[360px] sm:h-[560px] sm:w-[420px]">
              <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-primary/25 via-accent/15 to-transparent blur-3xl transition-all duration-500 group-hover:from-primary/45 group-hover:via-accent/30" />
              <div className="relative h-full w-full rounded-[36px] overflow-hidden border border-primary/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_40px_90px_-20px_var(--neon-soft)]">
                <img
                  src={heroPhoto}
                  alt="Francisco Chagas"
                  width={1024}
                  height={1448}
                  className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
              </div>


              {/* Floating cards */}
              <div className="float absolute -left-4 top-10 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-card/90 backdrop-blur-md px-4 py-3 shadow-2xl">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-neon"><Code2 className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Stack</div>
                  <div className="text-sm font-semibold">HTML · CSS · JS</div>
                </div>
              </div>
              <div className="float absolute -right-2 bottom-24 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-card/90 backdrop-blur-md px-4 py-3 shadow-2xl" style={{ animationDelay: "-3s" }}>
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/20 text-accent"><Figma className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">UX/UI</div>
                  <div className="text-sm font-semibold">Figma · Lovable</div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 grid h-3 w-3 place-items-center rounded-full bg-primary pulse-ring" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center text-muted-foreground">
          <a href="#sobre" className="flex flex-col items-center gap-1 text-xs hover:text-neon transition">
            Role para conhecer <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTag>Sobre mim</SectionTag>
          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Formado em ADS, em transição para <span className="text-neon">Web e UX/UI</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Formado em Análise e Desenvolvimento de Sistemas, atualmente desenvolvendo projetos próprios com foco em interfaces modernas, responsividade e experiência do usuário.
            </p>

            <button
              onClick={() => setAboutOpen(v => !v)}
              className="btn-ghost-neon mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {aboutOpen ? "Fechar" : "Ler mais sobre mim"}
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>

            {aboutOpen && (
              <div className="mt-6 rounded-2xl border border-white/5 bg-card/60 p-6 fade-up">
                <p className="text-muted-foreground leading-relaxed">
                  Sou formado em Análise e Desenvolvimento de Sistemas e estou direcionando minha carreira para o desenvolvimento web, UX/UI e criação de interfaces digitais. Tenho experiência administrativa, o que fortalece minha visão de organização, processos, análise de dados e resolução de problemas.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Atualmente desenvolvo projetos próprios para consolidar minha transição para a área de tecnologia, aplicando conhecimentos de design system, prototipação no Figma e desenvolvimento responsivo com HTML, CSS e JavaScript.
                </p>
                <blockquote className="mt-5 border-l-2 border-primary pl-4 italic text-foreground/90">
                  "Tenho experiência profissional com processos e dados, e agora estou aplicando essa base na criação de interfaces web, projetos visuais e soluções digitais."
                </blockquote>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <SectionTag>Projetos</SectionTag>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Trabalhos selecionados</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Quatro projetos que mostram minha trajetória: do código à experiência do usuário.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-12">
            {PROJECTS.map((p) => {
              const isOpen = openCase === p.n;
              return (
                <article key={p.n} className="card-glow card-stack group rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.04] hover:shadow-[0_30px_70px_-20px_var(--neon-soft)]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute top-4 left-4 rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-mono text-neon">
                      {p.n}
                    </div>
                    {p.featured && (
                      <div className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                        Case em destaque
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{p.category}</div>
                    <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full border border-white/10 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">{s}</span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => toggleCase(p.n)}
                        aria-expanded={isOpen}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-neon transition-all hover:bg-primary/10 hover:-translate-y-0.5"
                      >
                        {isOpen ? "Fechar case" : "Ver case"}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn-neon inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                        <ExternalLink className="h-4 w-4" /> Acessar projeto
                      </a>
                      <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                        <Github className="h-4 w-4" /> Repositório
                      </a>
                    </div>

                    {isOpen && (
                      <div className="mt-5 rounded-2xl border border-primary/20 bg-background/50 p-5 fade-up space-y-4 text-sm leading-relaxed">
                        <CaseBlock label="Visão geral">{p.caseStudy.overview}</CaseBlock>
                        <CaseBlock label="Problema">{p.caseStudy.problem}</CaseBlock>
                        <CaseBlock label="Objetivo">{p.caseStudy.objective}</CaseBlock>
                        <CaseBlock label="Minha solução">{p.caseStudy.solution}</CaseBlock>
                        <CaseBlock label="Processo">{p.caseStudy.process}</CaseBlock>
                        <CaseBlock label="Ferramentas">{p.caseStudy.tools}</CaseBlock>
                        <CaseBlock label="Resultado">{p.caseStudy.result}</CaseBlock>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTag>Habilidades</SectionTag>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">O que eu trago para o time</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map((s) => (
              <div key={s.title} className="card-glow rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-neon">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-neon" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTag>Processo de criação</SectionTag>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Do problema à interface final</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, idx) => (
              <div key={p.n} className="process-card relative rounded-2xl border border-white/5 bg-card/60 p-6">
                <div className="font-mono text-sm text-neon">{p.n}</div>
                <h3 className="mt-3 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                {idx < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-3 text-neon/40">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO + LOGO CAROUSEL */}
      <section id="contato" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-10">

          <div className="mx-auto max-w-3xl">
            <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-background p-6 sm:p-8 text-center transition-all duration-500 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_var(--neon)]">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-primary/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
              <SectionTag>Contato</SectionTag>
              <h2 className="mt-3 text-xl sm:text-2xl font-bold leading-tight">
                Vamos construir algo <span className="text-neon">incrível</span> juntos?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
                Aberto para oportunidades de UX/UI, desenvolvimento front-end e projetos freelance.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <a href="tel:+5511977240726" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition">
                  <Phone className="h-4 w-4" /> 11 977240726
                </a>
                <a href="mailto:chagassilva06@hotmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition">
                  <Mail className="h-4 w-4" /> chagassilva06@hotmail.com
                </a>
              </div>
            </div>
          </div>

          <TechCarousel reverse />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 sm:grid-cols-3 items-center">
          <div className="text-sm text-muted-foreground text-center sm:text-left">
            © 2026 <span className="text-foreground font-semibold">Francisco Chagas</span>.
            <br className="hidden sm:block" />
            Web Developer & UX/UI Designer
          </div>

          <div className="flex justify-center">
            <a
              href="#inicio"
              className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-1"
              aria-label="Voltar ao início"
            >
              <ArrowUp className="h-4 w-4" /> Voltar ao início
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-end">
            {[
              { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Activity, href: "https://strava.com/", label: "Strava" },
              { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
              { icon: Github, href: "https://github.com/", label: "GitHub" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground hover:text-neon hover:border-primary/50 hover:-translate-y-0.5 transition">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground/70 italic px-5">
          "Design com propósito. Código com identidade. Interfaces feitas para conectar pessoas."
        </div>
      </footer>
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-neon">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

function CaseBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-widest text-neon">{label}</div>
      <p className="mt-1 text-muted-foreground">{children}</p>
    </div>
  );
}

function TechCarousel({ reverse = false }: { reverse?: boolean }) {
  const items = [
    ...TECHS.map(t => ({ kind: "icon" as const, ...t })),
    ...TEXT_TECHS.map(name => ({ kind: "text" as const, name })),
  ];
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden rounded-2xl border border-white/5 bg-card/40 py-5">
      <div
        className="marquee-track gap-10 px-6"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground/80 shrink-0">
            {t.kind === "icon" ? (
              <>
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                  alt={t.name}
                  className="h-7 w-7 opacity-90"
                  loading="lazy"
                />
                <span className="text-sm font-semibold whitespace-nowrap">{t.name}</span>
              </>
            ) : (
              <span className="text-sm font-semibold whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 text-neon px-3 py-1">
                {t.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
