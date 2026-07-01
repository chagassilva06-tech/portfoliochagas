import type { ReactNode } from "react";

export function CaseBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-widest text-neon">{label}</div>
      <p className="mt-1 text-muted-foreground">{children}</p>
    </div>
  );
}
