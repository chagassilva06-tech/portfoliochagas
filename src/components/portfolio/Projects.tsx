import { useMemo, useState } from "react";
import { LayoutGrid } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import { SectionTag } from "./SectionTag";
import { ProjectModal } from "./ProjectModal";
import { FeaturedCarousel } from "./FeaturedCarousel";
import { AllProjectsModal } from "./AllProjectsModal";

export function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const activeProject = useMemo(
    () => PROJECTS.find((p) => p.n === selected) ?? null,
    [selected],
  );

  return (
    <section id="projetos" className="pt-4 pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionTag>Projetos</SectionTag>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Meus trabalhos</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Alguns projetos que mostram minha trajetória: do código à experiência do usuário.
          </p>
        </div>

        <div className="mt-10">
          <FeaturedCarousel projects={PROJECTS} onOpen={setSelected} />
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/60 bg-transparent px-6 py-3 text-sm font-semibold text-neon transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-primary/10 animate-neon-pulse hover:animation-none hover:shadow-[0_0_28px_var(--neon-soft),0_0_60px_var(--neon-soft)]"
          >
            <LayoutGrid className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
            Veja todos os projetos
          </button>
        </div>
      </div>

      <AllProjectsModal
        open={showAll}
        projects={PROJECTS}
        onClose={() => setShowAll(false)}
        onOpenProject={(n) => setSelected(n)}
      />
      <ProjectModal project={activeProject} onClose={() => setSelected(null)} />
    </section>
  );
}
