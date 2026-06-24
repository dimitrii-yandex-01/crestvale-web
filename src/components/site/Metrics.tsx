import { CountUp } from "./CountUp";
import { useReveal } from "@/hooks/use-reveal";
import { useApp } from "@/lib/i18n";

export function Metrics() {
  const ref = useReveal<HTMLDivElement>();
  const numbersRef = useReveal<HTMLDivElement>(0.25);
  const { t } = useApp();

  return (
    <section id="metrics" className="p-8 md:p-16 border-b border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div ref={ref} className="reveal">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            {t("metrics.kicker")}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-10 text-balance">
            {t("metrics.title")}
          </h2>
          <div className="aspect-[4/3] bg-secondary relative overflow-hidden group">
            {/* Composition: Bauhaus geometry */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary origin-top-left animate-scale-up" style={{ animationDelay: "100ms" }} />
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-accent origin-bottom-right animate-scale-up" style={{ animationDelay: "300ms" }} />
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 size-40 rounded-full border-[10px] border-background animate-scale-up group-hover:rotate-180 transition-transform duration-[1500ms]" style={{ animationDelay: "500ms" }} />
              <div className="absolute bottom-8 left-8 right-8 h-1 bg-background origin-left" style={{ animation: "bar-grow-x 1.1s cubic-bezier(0.16,1,0.3,1) 700ms both" }} />
            </div>
          </div>
        </div>

        <div ref={numbersRef} className="stagger space-y-12">
          <div className="stagger-item border-l-4 border-primary pl-8" style={{ ["--reveal-delay" as never]: "0ms" }}>
            <div className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-none">
              <CountUp to={140} suffix="%" />
            </div>
            <p className="font-mono uppercase text-sm tracking-widest mt-4 text-foreground/50">
              {t("metrics.m1")}
            </p>
          </div>
          <div className="stagger-item border-l-4 border-secondary pl-8" style={{ ["--reveal-delay" as never]: "150ms" }}>
            <div className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-none">
              <CountUp to={50} suffix="+" />
            </div>
            <p className="font-mono uppercase text-sm tracking-widest mt-4 text-foreground/50">
              {t("metrics.m2")}
            </p>
          </div>
          <div className="stagger-item border-l-4 border-accent pl-8" style={{ ["--reveal-delay" as never]: "300ms" }}>
            <div className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-none">
              24/7
            </div>
            <p className="font-mono uppercase text-sm tracking-widest mt-4 text-foreground/50">
              {t("metrics.m3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}