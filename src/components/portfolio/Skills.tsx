import { SKILLS } from "../../data/skills";
import { SectionTag } from "./SectionTag";

export function Skills() {
  return (
    <section id="habilidades" className="py-12">
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
  );
}
