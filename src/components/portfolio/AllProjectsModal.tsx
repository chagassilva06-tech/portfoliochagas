import { X } from "lucide-react";
import type { Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useEscapeKey } from "../../hooks/useEscapeKey";

type Props = {
  open: boolean;
  projects: Project[];
  onClose: () => void;
  onOpenProject: (n: string) => void;
};

export function AllProjectsModal({ open, projects, onClose, onOpenProject }: Props) {
  useBodyScrollLock(open);
  useEscapeKey(open, onClose);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-modal-fade-in" />
      <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-3xl border border-primary/20 bg-card shadow-[0_0_60px_-20px_var(--neon-soft)] animate-modal-scale-in">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 bg-card/95 backdrop-blur-md px-6 py-4">
          <div>
            <div className="text-xs font-mono text-neon">Portfólio</div>
            <h3 className="text-lg font-bold">Todos os projetos</h3>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:text-neon hover:border-primary/50 hover:bg-primary/10"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.n}
              project={p}
              onOpen={(n) => {
                onOpenProject(n);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
