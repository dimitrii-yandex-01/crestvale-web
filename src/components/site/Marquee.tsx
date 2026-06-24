export function Marquee() {
  const items = [
    "Predictive Models",
    "Business Intelligence",
    "Data Strategy",
    "ETL Pipelines",
    "Dashboard Design",
    "Machine Learning",
    "Data Audit",
    "Forecast 360",
  ];
  const line = items.join(" • ") + " • ";
  return (
    <div className="py-4 border-b border-border overflow-hidden whitespace-nowrap bg-foreground text-background">
      <div className="flex font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] animate-marquee">
        <span className="pr-12">{line.repeat(4)}</span>
        <span className="pr-12">{line.repeat(4)}</span>
      </div>
    </div>
  );
}