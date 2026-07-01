import { useReveal } from "@/hooks/use-reveal";
import { useApp } from "@/lib/i18n";
import { useState } from "react";

export function Services() {
  const ref = useReveal<HTMLElement>();
  const { t } = useApp();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services = [
    { num: "01", title: t("services.s1.title"), desc: t("services.s1.desc"), example: t("services.s1.example") },
    { num: "02", title: t("services.s2.title"), desc: t("services.s2.desc"), example: t("services.s2.example") },
    { num: "03", title: t("services.s3.title"), desc: t("services.s3.desc"), example: t("services.s3.example") },
    { num: "04", title: t("services.s4.title"), desc: t("services.s4.desc"), example: t("services.s4.example") },
    { num: "05", title: t("services.s5.title"), desc: t("services.s5.desc"), example: t("services.s5.example") },
    { num: "06", title: t("services.s6.title"), desc: t("services.s6.desc"), example: t("services.s6.example") },
    { num: "07", title: t("services.s7.title"), desc: t("services.s7.desc"), example: t("services.s7.example") },
    { num: "08", title: t("services.s8.title"), desc: t("services.s8.desc"), example: t("services.s8.example") },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b border-border bg-border gap-px"
    >
      {services.map((s, i) => {
        const isExpanded = expandedId === s.num;
        return (
          <div
            key={s.num}
            className="stagger-item tile-lift relative p-12 bg-background hover:bg-card transition-colors group overflow-hidden flex flex-col"
            style={{ ["--reveal-delay" as never]: `${i * 140}ms` }}
          >
            {/* Sliding accent bar that draws on hover */}
            <div className="absolute left-0 top-0 h-1 w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            <span className="font-mono text-primary text-sm mb-6 block">{s.num}/</span>
            <h3 className="text-3xl font-bold tracking-tight mb-4">{s.title}</h3>
            <p className="text-foreground/60 mb-8 leading-relaxed flex-1">{s.desc}</p>
            
            <div 
              className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0 mb-0"}`}
            >
              <div className="overflow-hidden">
                <div className="p-4 bg-muted/50 border-l-2 border-primary text-sm text-foreground/80 leading-relaxed">
                  {s.example}
                </div>
              </div>
            </div>

            <button 
              onClick={() => setExpandedId(isExpanded ? null : s.num)}
              className="size-12 border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 grid place-items-center mt-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className={`text-xl transition-transform duration-500 ${isExpanded ? "rotate-45" : "group-hover:rotate-90"}`}>
                +
              </span>
            </button>
          </div>
        );
      })}
    </section>
  );
}