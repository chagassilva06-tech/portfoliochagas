import { Activity, ArrowUp, Facebook, Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import { SOCIALS } from "../../data/techs";

const ICONS: Record<(typeof SOCIALS)[number]["key"], LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  strava: Activity,
  facebook: Facebook,
  github: Github,
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 sm:grid-cols-3 items-center">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          © 2026 <span className="text-foreground font-semibold">Francisco Chagas</span>.
          <br />
          Web Developer & UX/UI Designer
        </div>

        <div className="flex justify-center">
          <a
            href="#inicio"
            className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-1"
            aria-label="Voltar ao início"
          >
            <ArrowUp className="h-4 w-4" /> Voltar ao início
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center sm:justify-end">
          {SOCIALS.map((s) => {
            const Icon = ICONS[s.key];
            return (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground hover:text-neon hover:border-primary/50 hover:-translate-y-0.5 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-muted-foreground/70 italic px-5">
        "Design com propósito. Código com identidade. Interfaces feitas para conectar pessoas."
      </div>
    </footer>
  );
}
