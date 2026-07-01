import { TECHS, TEXT_TECHS } from "../../data/techs";

type Item =
  | { kind: "icon"; name: string; slug: string; color: string }
  | { kind: "text"; name: string };

export function TechCarousel({ reverse = false }: { reverse?: boolean }) {
  const items: Item[] = [
    ...TECHS.map((t) => ({ kind: "icon" as const, ...t })),
    ...TEXT_TECHS.map((name) => ({ kind: "text" as const, name })),
  ];
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden rounded-2xl border border-white/5 bg-card/40 py-5">
      <div
        className="marquee-track gap-10 px-6"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground/80 shrink-0">
            {t.kind === "icon" ? (
              <>
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                  alt={t.name}
                  width={28}
                  height={28}
                  className="h-7 w-7 opacity-90"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-sm font-semibold whitespace-nowrap">{t.name}</span>
              </>
            ) : (
              <span className="text-sm font-semibold whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 text-neon px-3 py-1">
                {t.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
