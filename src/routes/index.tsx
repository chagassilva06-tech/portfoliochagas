import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Figma,
  Github,
  Instagram,
  Linkedin,
  Facebook,
  Activity,
  Mail,
  Menu,
  X,
  Sparkles,
  Layout,
  Wrench,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";

import avatar from "../assets/francisco.jpg";
import projRunner from "../assets/proj-runner.jpg";
import projLinks from "../assets/proj-links.jpg";
import projDashboard from "../assets/proj-dashboard.jpg";
import projPortfolio from "../assets/proj-portfolio.jpg";

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

const PROJECTS = [
  {
    n: "01",
    title: "Landing Page Francisco Runner",
    category: "Landing Page • Storytelling",
    stack: ["HTML", "CSS", "JavaScript", "Base44"],
    desc: "Site pessoal para atleta amador, com foco em storytelling, UX, responsividade e identidade visual.",
    img: projRunner,
    featured: true,
  },
  {
    n: "02",
    title: "Página de Links Profissional",
    category: "Linktree Personalizado",
    stack: ["HTML", "CSS", "JavaScript", "UX/UI"],
    desc: "Projeto estilo Linktree personalizado, com foco em identidade, usabilidade e conversão.",
    img: projLinks,
  },
  {
    n: "03",
    title: "Dashboard de Fornecedores",
    category: "Dashboard • Dados",
    stack: ["Excel", "Base44", "UX"],
    desc: "Organização de dados para controle de entregas, fornecedores e notas fiscais.",
    img: projDashboard,
  },
  {
    n: "04",
    title: "Portfólio Web & UX",
    category: "Portfólio Pessoal",
    stack: ["HTML", "CSS", "JavaScript", "Design System"],
    desc: "Este próprio portfólio como projeto: estrutura, design system, responsividade e processo.",
    img: projPortfolio,
  },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    items: ["HTML", "CSS", "JavaScript", "GitHub", "VS Code"],
  },
  {
    icon: Layout,
    title: "UX / UI Design",
    items: ["Wireframe", "Prototipação", "Responsividade", "Hierarquia visual", "Experiência do usuário"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    items: ["Figma", "Canva", "Base44", "Excel", "GitHub Pages", "Lovable"],
  },
  {
    icon: HeartHandshake,
    title: "Soft skills",
    items: ["Organização", "Análise de processos", "Comunicação", "Controle de informações", "Visão operacional"],
  },
];

const PROCESS = [
  { n: "01", t: "Entender o problema", d: "Pesquisa, conversa e definição clara do desafio." },
  { n: "02", t: "Desenhar a solução", d: "Wireframes, fluxos e direção visual." },
  { n: "03", t: "Construir a interface", d: "Código limpo, responsivo e acessível." },
  { n: "04", t: "Testar e iterar", d: "Validação com usuários e ajustes finos." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-background/70 backdrop-blur-xl px-5 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]">
            <a href="#inicio" className="flex items-center gap-2 font-display font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">FC</span>
              <span className="hidden sm:inline">Francisco<span className="text-neon">.</span></span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="nav-link">{n.label}</a>
              ))}
            </nav>
            <a href="#contato" className="hidden md:inline-flex btn-neon items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
              Fale comigo <ArrowUpRight className="h-4 w-4" />
            </a>
            <button onClick={() => setMenuOpen(v => !v)} className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/10" aria-label="Menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-2 rounded-2xl border border-white/5 bg-background/95 backdrop-blur-xl p-4 fade-up">
              <div className="flex flex-col gap-3">
                {NAV.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary hover:text-neon transition">{n.label}</a>
                ))}
                <a href="#contato" onClick={() => setMenuOpen(false)} className="btn-neon mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                  Fale comigo <ArrowUpRight className="h-4 w-4" />
                </a>
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
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
              Francisco <br className="hidden sm:block" />
              <span className="text-neon">Chagas</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Desenvolvedor Web em transição para <span className="text-foreground font-semibold">UX/UI</span>, criando interfaces modernas, responsivas e centradas na experiência do usuário.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="btn-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                Ver projetos <ArrowRight className="h-4 w-4" />
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

          {/* Avatar */}
          <div className="relative mx-auto lg:mx-0 lg:justify-self-end">
            <div className="relative h-[380px] w-[300px] sm:h-[460px] sm:w-[360px]">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
              <div className="relative h-full w-full rounded-[32px] overflow-hidden border border-primary/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                <img src={avatar} alt="Francisco Chagas" className="h-full w-full object-cover" width={896} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating cards */}
              <div className="float absolute -left-8 top-10 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-card/90 backdrop-blur-md px-4 py-3 shadow-2xl">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-neon"><Code2 className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Stack</div>
                  <div className="text-sm font-semibold">HTML · CSS · JS</div>
                </div>
              </div>
              <div className="float absolute -right-6 bottom-12 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-card/90 backdrop-blur-md px-4 py-3 shadow-2xl" style={{ animationDelay: "-3s" }}>
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/20 text-accent"><Figma className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">UX/UI</div>
                  <div className="text-sm font-semibold">Figma · Lovable</div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 grid h-3 w-3 place-items-center rounded-full bg-primary pulse-ring" />
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
          <div className="mt-6 grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="relative">
              <div className="relative h-64 w-64 mx-auto rounded-3xl overflow-hidden border border-primary/30 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
                <img src={avatar} alt="Francisco" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-2 rounded-2xl bg-primary text-primary-foreground px-4 py-2 text-xs font-bold shadow-lg">
                Em transição → UX/UI
              </div>
            </div>

            <div>
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
                    "Tenho formação em ADS, experiência profissional com processos e dados, e agora estou aplicando essa base na criação de interfaces web, projetos visuais e soluções digitais."
                  </blockquote>
                </div>
              )}
            </div>
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

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <article key={p.n} className="card-glow group rounded-3xl overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
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
                  <a href="#contato" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neon hover:gap-3 transition-all">
                    Ver case <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE EM DESTAQUE */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTag>Case em destaque</SectionTag>
          <div className="mt-6 rounded-3xl overflow-hidden border border-primary/20 bg-card/60">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img src={projRunner} alt="Francisco Runner" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/40 to-transparent lg:bg-gradient-to-l" />
              </div>
              <div className="p-8 sm:p-12">
                <span className="text-xs text-neon font-mono uppercase tracking-widest">Francisco Runner</span>
                <h3 className="mt-3 text-3xl sm:text-4xl font-bold">Landing page para atleta amador</h3>

                <dl className="mt-8 space-y-5">
                  <CaseRow label="Problema">Criar uma presença digital visual para apresentar a trajetória como atleta amador.</CaseRow>
                  <CaseRow label="Objetivo">Desenvolver uma landing page moderna, responsiva e inspiradora.</CaseRow>
                  <CaseRow label="Solução">Estrutura com storytelling, cards visuais, contraste escuro e destaque para evolução pessoal.</CaseRow>
                  <CaseRow label="Ferramentas">HTML · CSS · JavaScript · Base44 · Canva / Figma</CaseRow>
                  <CaseRow label="Resultado">Página com identidade própria, melhor organização visual e navegação clara.</CaseRow>
                </dl>
              </div>
            </div>
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
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
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
              <div key={p.n} className="relative rounded-2xl border border-white/5 bg-card/60 p-6">
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

      {/* CONTATO */}
      <section id="contato" className="py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-background p-10 sm:p-16 text-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <SectionTag>Contato</SectionTag>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
              Vamos construir algo <span className="text-neon">incrível</span> juntos?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Aberto para oportunidades de UX/UI, desenvolvimento front-end e projetos freelance.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:francisco@example.com" className="btn-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                <Mail className="h-4 w-4" /> francisco@example.com
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            Desenvolvido por <span className="text-foreground font-semibold">Francisco Chagas</span>. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3">
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

function CaseRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 items-start">
      <dt className="text-xs font-mono uppercase tracking-widest text-neon pt-0.5">{label}</dt>
      <dd className="text-sm text-muted-foreground leading-relaxed">{children}</dd>
    </div>
  );
}
