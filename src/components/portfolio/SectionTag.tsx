import type { ReactNode } from "react";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-neon transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_var(--neon-soft)] cursor-default">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}
