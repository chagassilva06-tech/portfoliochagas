import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Pause, Play } from "lucide-react";
import type { Project } from "../../data/projects";

type Props = {
  projects: Project[];
  onOpen: (n: string) => void;
};

const INTERVAL = 5000;

export function FeaturedCarousel({ projects, onOpen }: Props) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const total = projects.length;
  const timerRef = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (!playing || hover || total <= 1) return;
    timerRef.current = window.setTimeout(next, INTERVAL);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, playing, hover, next, total]);

  if (total === 0) return null;
  const p = projects[index];

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 shadow-[0_30px_80px_-30px_var(--neon-soft)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Destaques dos projetos"
    >
      <div className="relative">
        {projects.map((proj, i) => (
          <div
            key={proj.n}
            className={`grid md:grid-cols-2 gap-0 transition-opacity duration-700 ${
              i === index ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[380px] bg-background flex items-center justify-center p-6 overflow-hidden">
              <img
                src={proj.img}
                alt={proj.title}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="max-h-full max-w-full object-contain transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            </div>
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{proj.category}</div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold">{proj.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{proj.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpen(proj.n)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-neon transition-all hover:bg-primary/10 hover:-translate-y-0.5"
                >
                  Ver case <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                >
                  <ExternalLink className="h-4 w-4" /> Acessar projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Projeto anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-background/70 backdrop-blur text-foreground transition hover:text-neon hover:border-primary/60"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Próximo projeto"
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-background/70 backdrop-blur text-foreground transition hover:text-neon hover:border-primary/60"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Controls */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/10 bg-background/70 backdrop-blur px-3 py-2">
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "Pausar carrossel" : "Reproduzir carrossel"}
          className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:text-neon transition"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
        </button>
        <div className="flex items-center gap-1.5">
          {projects.map((proj, i) => (
            <button
              key={proj.n}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir para o projeto ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary shadow-[0_0_10px_var(--neon-soft)]" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
