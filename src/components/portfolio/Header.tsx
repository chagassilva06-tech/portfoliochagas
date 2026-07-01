import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../../data/nav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-background/70 backdrop-blur-xl px-5 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]">
          <a
            href="#inicio"
            onClick={goHome}
            className="flex items-center gap-2 font-display font-bold group/logo transition-all duration-300 hover:opacity-90"
          >
            <span className="text-sm sm:text-base origin-left transition-transform duration-300 group-hover/logo:scale-105 group-hover/logo:text-neon whitespace-nowrap">
              Francisco Chagas<span className="text-neon"> | </span>
              <span className="hidden sm:inline">Web & UX</span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full border border-white/10 bg-secondary/40 px-4 py-2 text-muted-foreground transition-all duration-300 hover:text-neon hover:border-primary/60 hover:bg-primary/10 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_var(--neon)]"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition hover:border-primary/60 hover:text-neon hover:scale-110"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="mt-1 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-900 border-b-2 border-yellow-400 shadow-[0_2px_8px_-2px_rgba(250,204,21,0.4)]" />

        {menuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/5 bg-background/95 backdrop-blur-xl p-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-white/10 bg-secondary/40 px-4 py-2 text-sm text-center transition-all duration-300 hover:text-neon hover:border-primary/60 hover:bg-primary/10 hover:scale-105"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
