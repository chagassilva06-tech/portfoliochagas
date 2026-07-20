import { useState } from "react";
import { ArrowRight, ChevronDown, Code2, Download, Figma, Github, QrCode, Sparkles, X } from "lucide-react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import heroAsset from "../../assets/hero-arms.png.asset.json";
import fcLogoAsset from "../../assets/fc-logo.png.asset.json";
import { CV_URL } from "../../data/nav";

export const HERO_PHOTO = heroAsset.url;

const STATS = [
  { k: "4+", v: "Projetos" },
  { k: "ADS", v: "Formação" },
  { k: "UX/UI", v: "Em transição" },
];

const PORTFOLIO_URL = "https://portfoliochagas.lovable.app/";
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=${encodeURIComponent(PORTFOLIO_URL)}`;

export function Hero() {
  const [qrOpen, setQrOpen] = useState(false);
  useBodyScrollLock(qrOpen);
  useEscapeKey(qrOpen, () => setQrOpen(false));

  const copyLink = () => {
    navigator.clipboard?.writeText(PORTFOLIO_URL);
  };

  return (
    <section id="inicio" className="relative pt-28 pb-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-24 right-0 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-neon">
            Disponível para novos projetos
          </span>
          <div className="mt-5 flex items-center gap-5">
            <div className="group/title relative shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-lg opacity-40" />
              <div className="relative grid h-16 w-16 sm:h-20 sm:w-20 place-items-center overflow-hidden rounded-2xl border-2 border-primary/60 bg-card/70 shadow-[0_0_15px_-10px_var(--neon)]">
                <img src={fcLogoAsset.url} alt="Logotipo FC - Francisco Chagas" width={80} height={80} loading="lazy" decoding="async" className="h-full w-full object-cover" />
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
            <button
              type="button"
              onClick={() => setQrOpen(true)}
              aria-label="Compartilhar portfólio via QR Code"
              className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <QrCode className="h-4 w-4" /> QR Code
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {STATS.map((s) => (
              <div key={s.v} className="rounded-xl border border-white/5 bg-card/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_var(--neon-soft)] hover:border-primary/30">
                <div className="text-2xl font-bold text-neon">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 lg:justify-self-end group">
          <div className="relative h-[460px] w-[360px] sm:h-[560px] sm:w-[420px]">
            <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-primary/25 via-accent/15 to-transparent blur-3xl transition-all duration-500 group-hover:from-primary/45 group-hover:via-accent/30" />
            <div className="relative h-full w-full rounded-[36px] overflow-hidden border border-primary/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_40px_90px_-20px_var(--neon-soft)]">
              <img
                src={HERO_PHOTO}
                alt="Francisco Chagas"
                width={1024}
                height={1448}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
            </div>

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
          Veja mais <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      {qrOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="QR Code do portfólio"
          className="fixed inset-0 z-[100] grid place-items-center p-4 bg-background/70 backdrop-blur-md animate-fade-in"
          onClick={() => setQrOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-3xl border border-primary/30 bg-card/95 p-6 shadow-[0_30px_80px_-20px_var(--neon-soft)]"
          >
            <button
              type="button"
              onClick={() => setQrOpen(false)}
              aria-label="Fechar"
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:text-neon hover:border-primary/60"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-neon">
                <QrCode className="h-3.5 w-3.5" /> Compartilhar portfólio
              </div>
              <h3 className="mt-3 text-lg font-bold">Aponte a câmera</h3>
              <p className="mt-1 text-xs text-muted-foreground">Escaneie o QR Code para abrir meu portfólio.</p>
            </div>
            <div className="mt-5 grid place-items-center">
              <div className="rounded-2xl bg-white p-3 shadow-inner">
                <img src={QR_SRC} alt={`QR Code para ${PORTFOLIO_URL}`} width={256} height={256} loading="lazy" decoding="async" className="h-64 w-64" />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                className="truncate rounded-full border border-white/10 bg-secondary/40 px-4 py-2 text-center text-xs text-muted-foreground hover:text-neon hover:border-primary/60 transition"
              >
                {PORTFOLIO_URL}
              </a>
              <button
                type="button"
                onClick={copyLink}
                className="btn-ghost-neon rounded-full px-4 py-2 text-xs font-semibold"
              >
                Copiar link
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
