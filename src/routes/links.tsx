import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Activity,
  Globe,
  Phone,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import profileImg from "../assets/links-profile.jpg";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Francisco Chagas | Links" },
      { name: "description", content: "Hub de links de Francisco Chagas — redes sociais, portfólios e contato em um só lugar." },
      { property: "og:title", content: "Francisco Chagas | Links" },
      { property: "og:description", content: "Conecte-se comigo: LinkedIn, Instagram, Strava, YouTube, portfólios e WhatsApp." },
    ],
  }),
  component: LinksPage,
});

type LinkItem = {
  label: string;
  sub: string;
  preview: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
};

const LINKS: LinkItem[] = [
  {
    label: "LinkedIn",
    sub: "Carreira & Networking",
    preview: "Veja minha trajetória profissional e conecte-se comigo",
    url: "https://www.linkedin.com/",
    Icon: Linkedin,
    accent: "#0A66C2",
  },
  {
    label: "Instagram",
    sub: "Bastidores & Inspiração",
    preview: "Acompanhe meu dia a dia, projetos e inspirações visuais",
    url: "https://www.instagram.com/",
    Icon: Instagram,
    accent: "#E1306C",
  },
  {
    label: "Facebook",
    sub: "Comunidade",
    preview: "Posts, atualizações e conexões pessoais",
    url: "https://www.facebook.com/",
    Icon: Facebook,
    accent: "#1877F2",
  },
  {
    label: "Strava",
    sub: "Corridas & Treinos",
    preview: "Acompanhe minhas atividades como runner amador",
    url: "https://www.strava.com/",
    Icon: Activity,
    accent: "#FC4C02",
  },
  {
    label: "YouTube",
    sub: "Vídeos & Cases",
    preview: "Vídeos sobre projetos, design e corrida",
    url: "https://www.youtube.com/",
    Icon: Youtube,
    accent: "#FF0000",
  },
  {
    label: "Portfólio Web",
    sub: "UX/UI & Desenvolvimento",
    preview: "Meus projetos de design e desenvolvimento web",
    url: "/",
    Icon: Globe,
    accent: "var(--neon)",
  },
  {
    label: "Portfólio Runner",
    sub: "Atleta amador",
    preview: "Minha jornada na corrida de rua em uma landing dedicada",
    url: "https://francisco-app.base44.app/",
    Icon: Activity,
    accent: "var(--neon)",
  },
  {
    label: "WhatsApp",
    sub: "Fale comigo agora",
    preview: "Conversa direta — respondo o mais rápido possível",
    url: "https://wa.me/5500000000000",
    Icon: Phone,
    accent: "#25D366",
  },
];

function LinksPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30" style={{ background: "var(--neon)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-32 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-20" style={{ background: "var(--accent)" }} />

      <div className="relative mx-auto max-w-xl px-5 py-10 sm:py-14">
        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portfólio
          </Link>
        </div>

        {/* Profile header */}
        <header className="flex flex-col items-center text-center">
          <div className="relative">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full blur-xl opacity-60"
              style={{ background: "var(--neon)" }}
            />
            <div
              className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px]"
              style={{ background: "linear-gradient(135deg, var(--neon), var(--accent))" }}
            >
              <img
                src={profileImg}
                alt="Foto de perfil de Francisco Chagas"
                width={144}
                height={144}
                className="w-full h-full rounded-full object-cover border-4 border-background"
              />
            </div>
            <span
              aria-label="Disponível"
              className="absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-background"
              style={{ background: "var(--neon)", boxShadow: "0 0 12px var(--neon)" }}
            />
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Francisco Chagas
          </h1>
          <p className="mt-1 text-sm sm:text-base text-muted-foreground">
            Web Developer & UX/UI Designer · Runner
          </p>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs text-muted-foreground"
            style={{ borderColor: "color-mix(in oklab, var(--neon) 40%, transparent)" }}>
            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "var(--neon)" }} />
            Disponível para novos projetos
          </div>

          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Todos os meus canais em um só lugar. Escolha por onde prefere conversar,
            acompanhar meus projetos ou conhecer minha jornada.
          </p>
        </header>

        {/* Links */}
        <ul className="mt-10 flex flex-col gap-3">
          {LINKS.map(({ label, sub, preview, url, Icon, accent }) => {
            const external = url.startsWith("http");
            const content = (
              <div
                className="group relative flex items-center gap-4 w-full rounded-2xl border bg-card/60 backdrop-blur-sm px-4 py-3.5 sm:px-5 sm:py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--neon)] hover:shadow-[0_10px_30px_-12px_var(--neon)] active:translate-y-0 active:scale-[0.99]"
              >
                {/* glow bar */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: accent }}
                />

                <span
                  className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
                  style={{
                    background: `color-mix(in oklab, ${accent} 18%, transparent)`,
                    color: accent,
                    boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${accent} 35%, transparent)`,
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>

                <div className="flex-1 min-w-0 text-left">
                  <div className="font-semibold text-base sm:text-lg leading-tight">{label}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground truncate">{sub}</div>
                </div>

                <ExternalLink className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-[color:var(--neon)] group-hover:translate-x-1" />

                {/* Tooltip preview */}
                <span
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full z-20 whitespace-nowrap max-w-[18rem] px-3 py-1.5 rounded-lg text-xs bg-popover text-popover-foreground border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ borderColor: "color-mix(in oklab, var(--neon) 50%, transparent)" }}
                >
                  {preview}
                  <span
                    aria-hidden
                    className="absolute left-1/2 -translate-x-1/2 top-full -mt-px w-2 h-2 rotate-45 bg-popover border-r border-b"
                    style={{ borderColor: "color-mix(in oklab, var(--neon) 50%, transparent)" }}
                  />
                </span>
              </div>
            );

            return (
              <li key={label}>
                {external ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} — ${preview}`}
                    title={preview}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <Link to={url} aria-label={`${label} — ${preview}`} title={preview} className="block">
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <footer className="mt-14 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Francisco Chagas.</p>
          <p>Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
