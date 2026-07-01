import { Code2, Layout, Wrench, HeartHandshake, type LucideIcon } from "lucide-react";

export type Skill = { icon: LucideIcon; title: string; items: string[] };

export const SKILLS: Skill[] = [
  { icon: Code2, title: "Desenvolvimento Web", items: ["HTML", "CSS", "JavaScript", "GitHub", "VS Code"] },
  { icon: Layout, title: "UX / UI Design", items: ["Wireframe", "Prototipação", "Responsividade", "Hierarquia visual", "Experiência do usuário"] },
  { icon: Wrench, title: "Ferramentas", items: ["Figma", "Canva", "Base44", "Excel", "GitHub Pages", "Lovable"] },
  { icon: HeartHandshake, title: "Soft skills", items: ["Organização", "Análise de processos", "Comunicação", "Controle de informações", "Visão operacional"] },
];

export const PROCESS = [
  { n: "01", t: "Entender o problema", d: "Pesquisa, conversa e definição clara do desafio." },
  { n: "02", t: "Desenhar a solução", d: "Wireframes, fluxos e direção visual." },
  { n: "03", t: "Construir a interface", d: "Código limpo, responsivo e acessível." },
  { n: "04", t: "Testar e iterar", d: "Validação com usuários e ajustes finos." },
];
