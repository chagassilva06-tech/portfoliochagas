import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  onOpen: (n: string) => void;
};

export function ProjectCard({ project: p, onOpen }: Props) {
  return (
    <article className="card-glow group rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.04] hover:shadow-[0_30px_70px_-20px_var(--neon-soft)]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-background flex items-center justify-center p-4">
        <img
          src={p.img}
          alt={p.title}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
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
            onClick={() => onOpen(p.n)}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-neon transition-all hover:bg-primary/10 hover:-translate-y-0.5"
          >
            Ver case <ArrowRight className="h-4 w-4" />
          </button>
          <a href={p.live} target="_blank" rel="noreferrer" className="btn-neon inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
            <ExternalLink className="h-4 w-4" /> Acessar projeto
          </a>
          <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
            <Github className="h-4 w-4" /> Repositório
          </a>
        </div>
      </div>
    </article>
  );
}
