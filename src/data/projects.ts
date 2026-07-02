import projRunnerAsset from "../assets/runner-cover.png.asset.json";
import projLinksAsset from "../assets/links-cover.png.asset.json";
import projDashboardAsset from "../assets/dashboard-cover.png.asset.json";
import projPortfolioAsset from "../assets/portfolio-cover.png.asset.json";
import projPMAsset from "../assets/product-manager-cover.png.asset.json";
import { REPO_LINK } from "./nav";

export type CaseStudy = {
  overview: string;
  problem: string;
  objective: string;
  solution: string;
  process: string;
  tools: string;
  result: string;
};

export type Project = {
  n: string;
  title: string;
  category: string;
  stack: string[];
  desc: string;
  img: string;
  featured?: boolean;
  live: string;
  repo: string;
  caseStudy: CaseStudy;
};

export const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Landing Page Francisco Runner",
    category: "Landing Page • Storytelling",
    stack: ["HTML", "CSS", "JavaScript", "Base44"],
    desc: "Site pessoal para atleta amador, com foco em storytelling, UX, responsividade e identidade visual.",
    img: projRunnerAsset.url,
    featured: true,
    live: "https://runnerfrancisco.lovable.app/",
    repo: REPO_LINK,
    caseStudy: {
      overview: "A Landing Page Francisco Runner é um projeto pessoal criado para apresentar minha trajetória como atleta amador autodidata no mundo da corrida de rua. O objetivo foi construir uma página visual, moderna e responsiva, usando storytelling, identidade visual forte e uma experiência de navegação simples e direta.",
      problem: "Eu precisava de uma página que apresentasse minha história na corrida de forma mais profissional, organizada e visual. A ideia era sair de uma apresentação simples e criar uma experiência mais completa, com imagens, textos curtos, cards e uma narrativa clara da minha evolução como corredor.",
      objective: "Criar uma landing page moderna, responsiva e impactante para apresentar minha trajetória, conquistas, evolução pessoal e conexão com a corrida de rua, usando princípios de UX/UI, hierarquia visual e design responsivo.",
      solution: "Desenvolvi uma estrutura com hero impactante, seções bem divididas, cards visuais, contraste entre fundo escuro e detalhes em neon, além de uma navegação fluida. O projeto foi pensado para transmitir energia, foco, superação e identidade pessoal.",
      process: "O processo começou com a definição da proposta visual e da mensagem principal da página. Depois, organizei as seções em uma ordem lógica: apresentação, história, evolução, imagens, destaques e contato. Em seguida, trabalhei o layout com foco em responsividade, leitura agradável e impacto visual.",
      tools: "HTML, CSS, JavaScript, Base44, Canva e conceitos de UX/UI.",
      result: "O resultado foi uma landing page com identidade própria, visual moderno, boa organização das informações e adaptação para diferentes tamanhos de tela. O projeto reforça minha capacidade de criar interfaces digitais com foco em experiência do usuário, estética visual e comunicação clara.",
    },
  },
  {
    n: "02",
    title: "Portfólio Web & UX",
    category: "Portfólio Pessoal",
    stack: ["HTML", "CSS", "JavaScript", "Design System"],
    desc: "Este próprio portfólio como projeto: estrutura, design system, responsividade e processo.",
    img: projPortfolioAsset.url,
    live: "https://portfoliochagas.lovable.app/",
    repo: REPO_LINK,
    caseStudy: {
      overview: "Meu portfólio pessoal pensado como produto: design system, identidade visual, responsividade e narrativa de processo.",
      problem: "Eu precisava de um espaço próprio para apresentar projetos, habilidades e processo de forma consistente.",
      objective: "Criar um portfólio com identidade forte, navegação clara e foco em UX, que servisse como vitrine profissional.",
      solution: "Design system com tokens semânticos, tema escuro com acentos neon, cards animados, microinterações e seções bem definidas.",
      process: "Definição de tom visual, wireframes, prototipação, escolha tipográfica e implementação responsiva.",
      tools: "HTML, CSS, JavaScript, Design System, Figma e Lovable.",
      result: "Portfólio coeso, moderno e responsivo, que comunica claramente meu posicionamento como Web & UX.",
    },
  },
  {
    n: "03",
    title: "Dashboard de Fornecedores",
    category: "Dashboard • Dados",
    stack: ["Excel", "Base44", "UX"],
    desc: "Organização de dados para controle de entregas, fornecedores e notas fiscais.",
    img: projDashboardAsset.url,
    live: "https://dashboardfranciscochagas.lovable.app/",
    repo: REPO_LINK,
    caseStudy: {
      overview: "Dashboard interno para acompanhar fornecedores, entregas e notas fiscais com visão centralizada e filtros úteis.",
      problem: "As informações de fornecedores estavam dispersas em planilhas e documentos, dificultando o acompanhamento operacional.",
      objective: "Centralizar e organizar os dados em uma única visão que facilitasse decisões rápidas no dia a dia.",
      solution: "Estrutura tabular com indicadores, filtros por status e cards de resumo destacando o que precisa de atenção.",
      process: "Levantamento dos dados, organização das colunas, definição de indicadores e construção do layout no Base44.",
      tools: "Excel, Base44 e princípios de UX para dashboards.",
      result: "Maior controle das entregas, redução de retrabalho e visão clara do status dos fornecedores.",
    },
  },
  {
    n: "04",
    title: "Product Manager",
    category: "Sistema • Gestão de Produtos",
    stack: ["HTML", "CSS", "JavaScript", "Base44"],
    desc: "Sistema para organizar, cadastrar e gerenciar produtos.",
    img: projPMAsset.url,
    live: "https://gestaoprodutofrancisco.lovable.app/",
    repo: REPO_LINK,
    caseStudy: {
      overview: "Sistema desenvolvido para organizar, cadastrar e gerenciar produtos de forma simples e centralizada, com foco em usabilidade e controle operacional.",
      problem: "Era necessário centralizar o cadastro e o acompanhamento de produtos em uma interface única, evitando planilhas dispersas e perda de informação.",
      objective: "Criar uma ferramenta clara para cadastrar, editar, listar e gerenciar produtos com agilidade e boa experiência de uso.",
      solution: "Interface com formulários objetivos, listagem organizada, filtros e ações rápidas, priorizando hierarquia visual e fluxo direto.",
      process: "Mapeamento dos campos essenciais, definição dos fluxos de cadastro/edição, prototipação e implementação responsiva.",
      tools: "HTML, CSS, JavaScript, Base44 e princípios de UX/UI.",
      result: "Um sistema funcional e organizado que facilita a gestão de produtos, reduz erros e melhora o controle do catálogo.",
    },
  },
  {
    n: "05",
    title: "Página de Links Profissional",
    category: "Linktree Personalizado",
    stack: ["HTML", "CSS", "JavaScript", "UX/UI"],
    desc: "Projeto estilo Linktree personalizado, com foco em identidade, usabilidade e conversão.",
    img: projLinksAsset.url,
    live: "https://conexoesfranciscochagas.lovable.app/",
    repo: REPO_LINK,
    caseStudy: {
      overview: "Página de links personalizada para centralizar contatos, redes sociais e projetos em um único lugar com identidade visual coerente.",
      problem: "Centralizar minhas redes e projetos em um link único, evitando soluções genéricas e sem identidade visual.",
      objective: "Construir um hub de links com visual próprio, leve, responsivo e de fácil manutenção.",
      solution: "Layout minimalista com botões grandes, hierarquia clara, foto de perfil e contraste alto para boa legibilidade no mobile.",
      process: "Definição dos links prioritários, esboço visual, prototipação rápida e implementação em HTML, CSS e JS puro.",
      tools: "HTML, CSS, JavaScript e conceitos de UX/UI.",
      result: "Uma página leve, com carregamento rápido, identidade própria e foco em conversão para os principais canais.",
    },
  },
];
