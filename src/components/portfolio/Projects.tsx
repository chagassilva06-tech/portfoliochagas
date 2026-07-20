import { useMemo, useState } from "react";
import { PROJECTS } from "../../data/projects";
import { SectionTag } from "./SectionTag";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { FeaturedCarousel } from "./FeaturedCarousel";

export function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
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

        <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-12">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.n} project={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setSelected(null)} />
    </section>
  );
}

