import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "../../data/projects";
import { CaseBlock } from "./CaseBlock";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useEscapeKey } from "../../hooks/useEscapeKey";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useBodyScrollLock(!!project);
  useEscapeKey(!!project, onClose);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-modal-fade-in" />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-primary/20 bg-card shadow-[0_0_60px_-20px_var(--neon-soft)] animate-modal-scale-in">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 bg-card/95 backdrop-blur-md px-6 py-4">
          <div>
            <div className="text-xs font-mono text-neon">{project.n}</div>
            <h3 className="text-lg font-bold">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:text-neon hover:border-primary/50 hover:bg-primary/10"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 space-y-5 text-sm leading-relaxed">
          <CaseBlock label="Visão geral">{project.caseStudy.overview}</CaseBlock>
          <CaseBlock label="Problema">{project.caseStudy.problem}</CaseBlock>
          <CaseBlock label="Objetivo">{project.caseStudy.objective}</CaseBlock>
          <CaseBlock label="Minha solução">{project.caseStudy.solution}</CaseBlock>
          <CaseBlock label="Processo">{project.caseStudy.process}</CaseBlock>
          <CaseBlock label="Ferramentas">{project.caseStudy.tools}</CaseBlock>
          <CaseBlock label="Resultado">{project.caseStudy.result}</CaseBlock>
          <div className="flex flex-wrap gap-3 pt-3">
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-neon inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              <ExternalLink className="h-4 w-4" /> Acessar projeto
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              <Github className="h-4 w-4" /> Repositório
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
