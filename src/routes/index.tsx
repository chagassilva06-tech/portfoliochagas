import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/portfolio/Header";
import { Hero, HERO_PHOTO } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Projects } from "../components/portfolio/Projects";
import { Skills } from "../components/portfolio/Skills";
import { Process } from "../components/portfolio/Process";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francisco Chagas | Web & UX Portfolio" },
      { name: "description", content: "Desenvolvedor Web em transição para UX/UI — interfaces modernas, responsivas e centradas na experiência do usuário." },
      { property: "og:title", content: "Francisco Chagas | Web & UX Portfolio" },
      { property: "og:description", content: "Portfólio com projetos de UX/UI, desenvolvimento web e design de interfaces." },
      { property: "og:image", content: HERO_PHOTO },
    ],
    links: [
      { rel: "preload", as: "image", href: HERO_PHOTO, fetchpriority: "high" } as any,
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
