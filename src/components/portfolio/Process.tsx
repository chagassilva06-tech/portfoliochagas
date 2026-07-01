import { PROCESS } from "../../data/skills";
import { SectionTag } from "./SectionTag";

export function Process() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTag>Processo de criação</SectionTag>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Do problema à interface final</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((p, idx) => (
            <div key={p.n} className="process-card relative rounded-2xl border border-white/5 bg-card/60 p-6">
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
  );
}
