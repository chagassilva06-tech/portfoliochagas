import { Mail, Phone } from "lucide-react";
import { SectionTag } from "./SectionTag";
import { TechCarousel } from "./TechCarousel";

export function Contact() {
  return (
    <section id="contato" className="py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-10">
        <div className="mx-auto max-w-3xl">
          <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-background p-6 sm:p-8 text-center transition-all duration-500 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_var(--neon)]">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-primary/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
            <SectionTag>Contato</SectionTag>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold leading-tight">
              Vamos construir algo <span className="text-neon">incrível</span> juntos?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Aberto para oportunidades de UX/UI, desenvolvimento front-end e projetos freelance.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <a href="tel:+5511977240726" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition">
                <Phone className="h-4 w-4" /> 11 977240726
              </a>
              <a href="mailto:chagassilva06@hotmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition">
                <Mail className="h-4 w-4" /> chagassilva06@hotmail.com
              </a>
            </div>
          </div>
        </div>

        <TechCarousel reverse />
      </div>
    </section>
  );
}
