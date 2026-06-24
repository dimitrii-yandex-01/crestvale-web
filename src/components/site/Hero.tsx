import { useApp } from "@/lib/i18n";

export function Hero() {
  const { t } = useApp();
  return (
    <section
      id="top"
      className="relative border-b border-border overflow-hidden bg-secondary text-secondary-foreground"
    >
      {/* Giant ghost monogram */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 text-[42vw] leading-none font-extrabold tracking-tighter opacity-[0.08] select-none"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        CV
      </div>
      {/* Scanlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 3px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-24 md:pb-32">
        <h1 className="font-mono font-extrabold uppercase tracking-tight leading-[0.95] text-[12vw] md:text-[8vw] max-w-[14ch] animate-blur-in">
          {t("hero.title.1")} {t("hero.title.2")}
          <span className="opacity-90">{t("hero.title.3")}.</span>
        </h1>

        <p
          className="mt-10 max-w-xl font-mono text-sm md:text-base leading-relaxed opacity-90 animate-blur-in"
          style={{ animationDelay: "200ms" }}
        >
          {t("hero.sub")}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#contact" className="chip-btn chip-btn--solid">
            {t("nav.cta")}
          </a>
          <a href="#process" className="chip-btn chip-btn--ghost">
            {t("nav.process")}
          </a>
        </div>

        <div className="mt-16 flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-80">
          <span className="inline-block size-2 bg-current animate-ticker" />
          {t("hero.kicker")}
        </div>
      </div>
    </section>
  );
}