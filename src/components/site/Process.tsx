import { useReveal } from "@/hooks/use-reveal";
import { useApp } from "@/lib/i18n";

export function Process() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const { t } = useApp();
  const steps = [
    { num: "01", title: t("process.p1.title"), desc: t("process.p1.desc") },
    { num: "02", title: t("process.p2.title"), desc: t("process.p2.desc") },
    { num: "03", title: t("process.p3.title"), desc: t("process.p3.desc") },
    { num: "04", title: t("process.p4.title"), desc: t("process.p4.desc") },
  ];
  return (
    <section id="process" className="border-b border-border">
      <div ref={headRef} className="reveal p-8 md:p-16">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          {t("process.kicker")}
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl">
          {t("process.title")}
        </h2>
      </div>
      <div ref={gridRef} className="stagger grid grid-cols-1 md:grid-cols-4 border-t border-border">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="stagger-item relative p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-border min-h-[260px] flex flex-col justify-between hover:bg-foreground hover:text-background transition-colors duration-500 group overflow-hidden"
            style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
          >
            <div className="absolute inset-0 -z-0 bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />
            <div className="relative font-mono text-sm">{s.num}</div>
            <div>
              <h3 className="relative text-2xl font-bold mb-3 transition-transform duration-500 group-hover:translate-x-1">{s.title}</h3>
              <p className="relative text-sm opacity-70 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}