import { SectionTag } from "./SectionTag";

export function About() {
  return (
    <section id="sobre" className="pt-4 pb-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTag>Sobre mim</SectionTag>
        <div className="mt-6 max-w-3xl">
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Formado em Análise e Desenvolvimento de Sistemas, atualmente desenvolvendo projetos próprios com foco em interfaces modernas, responsividade e experiência do usuário.
          </p>

          <div className="mt-6 rounded-2xl border border-white/5 bg-card/60 p-6">
            <p className="text-muted-foreground leading-relaxed">
              Tenho experiência administrativa, o que fortalece minha visão de organização, processos, análise de dados e resolução de problemas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Desenvolvo projetos próprios para consolidar minha transição para a área de tecnologia, aplicando conhecimentos de design system, prototipação no Figma e desenvolvimento responsivo com HTML, CSS e JavaScript.
            </p>
            <blockquote className="mt-5 border-l-2 border-primary pl-4 italic text-foreground/90">
              "Tenho experiência profissional com processos e dados, e agora estou aplicando essa base na criação de interfaces web, projetos visuais e soluções digitais."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
