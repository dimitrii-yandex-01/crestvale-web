import { useReveal } from "@/hooks/use-reveal";
import { useApp } from "@/lib/i18n";

export function Pricing() {
  const ref = useReveal<HTMLElement>();
  const { t } = useApp();
  const tiers = [
    { tag: t("pricing.base.tag"), name: t("pricing.base.name"), price: t("pricing.base.price"), desc: t("pricing.base.desc"), featured: false },
    { tag: t("pricing.pop.tag"), name: t("pricing.pop.name"), price: t("pricing.pop.price"), desc: t("pricing.pop.desc"), featured: true },
    { tag: t("pricing.cust.tag"), name: t("pricing.cust.name"), price: t("pricing.cust.price"), desc: t("pricing.cust.desc"), featured: false },
  ];
  return (
    <section
      id="pricing"
      ref={ref}
      className="stagger grid grid-cols-1 md:grid-cols-3 border-b border-border"
    >
      {tiers.map((tier, i) => (
        <div
          key={tier.name}
          className={`stagger-item tile-lift p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-border flex flex-col justify-between min-h-[400px] ${
            tier.featured ? "bg-card" : ""
          }`}
          style={{ ["--reveal-delay" as never]: `${i * 160}ms` }}
        >
          <div>
            <h4
              className={`font-mono text-xs uppercase tracking-widest mb-8 ${
                tier.featured ? "text-primary" : "text-foreground/40"
              }`}
            >
              {tier.tag}
            </h4>
            <h3 className="text-4xl font-bold mb-4">{tier.name}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{tier.desc}</p>
          </div>
          <div className="mt-12">
            <div className="text-3xl font-bold mb-6">{tier.price}</div>
            <a
              href="#contact"
              className={`cta-shimmer block text-center w-full py-4 font-mono text-xs uppercase tracking-widest transition-colors ${
                tier.featured
                  ? "bg-primary text-primary-foreground hover:bg-secondary"
                  : "border border-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {t("pricing.choose")}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}