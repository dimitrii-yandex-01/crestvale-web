import { useReveal } from "@/hooks/use-reveal";
import { useApp } from "@/lib/i18n";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SiClickhouse, SiApacheairflow, SiDbt, SiApachesuperset, SiN8N, SiOllama, SiPostgresql, SiMetabase, SiGrafana, SiPython, SiGit } from "react-icons/si";
import { Waypoints, Bot } from "lucide-react";

const baseTools = [
  {
    name: "ClickHouse",
    k: "sql",
    example: "SELECT city, uniq(user_id) FROM events WHERE ts > now() - 7",
    color: "bg-[#FFCC01]",
    icon: <SiClickhouse className="w-10 h-10 text-black" />,
  },
  {
    name: "PostgreSQL",
    k: "pg",
    example: "CREATE INDEX idx_users_email ON users(email);",
    color: "bg-[#4169E1]",
    icon: <SiPostgresql className="w-10 h-10" />,
  },
  {
    name: "Airflow",
    k: "air",
    example: "PythonOperator(task_id='load', python_callable=etl)",
    color: "bg-[#017CEE]",
    icon: <SiApacheairflow className="w-10 h-10" />,
  },
  {
    name: "dbt",
    k: "dbt",
    example: "dbt run --select tag:finance --target prod",
    color: "bg-[#FF694B]",
    icon: <SiDbt className="w-10 h-10" />,
  },
  {
    name: "OpenMetadata",
    k: "ometa",
    example: "GET /api/v1/tables/name/clickhouse.db.events",
    color: "bg-primary",
    icon: <Waypoints className="w-10 h-10" />,
  },
  {
    name: "Apache Superset",
    k: "super",
    example: "Chart → Line → Group by: region → Time: last 30d",
    color: "bg-[#20A7C9]",
    icon: <SiApachesuperset className="w-10 h-10" />,
  },
  {
    name: "Metabase",
    k: "meta",
    example: "Question → Filter by date → Save to Dashboard",
    color: "bg-[#509EE3]",
    icon: <SiMetabase className="w-10 h-10" />,
  },
  {
    name: "Grafana",
    k: "grafana",
    example: "sum(rate(http_requests_total[5m])) by (status)",
    color: "bg-[#F46800]",
    icon: <SiGrafana className="w-10 h-10" />,
  },
  {
    name: "Open WebUI / Ollama",
    k: "ai",
    example: "RAG Pipeline: Embedding -> ChromaDB -> Llama3",
    color: "bg-foreground",
    icon: <SiOllama className="w-10 h-10 text-background" />,
  },
  {
    name: "AnythingLLM",
    k: "allm",
    example: "Workspace -> Upload Doc -> Chat with context",
    color: "bg-secondary",
    icon: <Bot className="w-10 h-10" />,
  },
  {
    name: "n8n",
    k: "n8n",
    example: "Webhook Node → HTTP Request → Send Message Node",
    color: "bg-[#EA4B71]",
    icon: <SiN8N className="w-10 h-10" />,
  },
  {
    name: "Python",
    k: "py",
    example: "df.groupby('segment').agg({'revenue':'sum'})",
    color: "bg-[#3776AB]",
    icon: <SiPython className="w-10 h-10" />,
  },
  {
    name: "Git",
    k: "git",
    example: 'git commit -m "feat: add churn model v2"',
    color: "bg-[#F05032]",
    icon: <SiGit className="w-10 h-10" />,
  },
];

export function Tools() {
  const headRef = useReveal<HTMLDivElement>();
  const carRef = useReveal<HTMLDivElement>();
  const { t } = useApp();

  return (
    <section id="tools" className="border-b border-border">
      <div ref={headRef} className="reveal p-8 md:p-16">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          {t("tools.kicker")}
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl">
            {t("tools.title")}
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("tools.hint")}
          </p>
        </div>
      </div>

      <div ref={carRef} className="reveal border-t border-border p-6 md:p-12">
        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="-ml-4">
            {baseTools.map((tool) => (
              <CarouselItem
                key={tool.name}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className="tile-lift relative h-full p-8 border border-border bg-card flex flex-col group overflow-hidden min-h-[520px]">
                  <div className="absolute left-0 top-0 h-1 w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                  <div
                    className={`size-16 ${tool.color} text-primary-foreground grid place-items-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {tool.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{tool.name}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">{t(`tools.${tool.k}.desc`)}</p>

                  <div className="mt-auto space-y-4">
                    <div className="border-l-2 border-primary pl-3">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                        {t("tools.case")}
                      </div>
                      <p className="text-xs text-foreground/80 leading-relaxed">{t(`tools.${tool.k}.task`)}</p>
                    </div>
                    <div className="border-l-2 border-foreground pl-3">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                        {t("tools.solution")}
                      </div>
                      <p className="text-xs text-foreground/80 leading-relaxed">{t(`tools.${tool.k}.sol`)}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/30 mb-2">
                        {t("tools.example")}
                      </div>
                      <code className="block font-mono text-[11px] text-foreground/70 bg-muted/50 p-3 border border-border leading-relaxed">
                        {tool.example}
                      </code>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-end gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 size-12 rounded-none border-border" />
            <CarouselNext className="static translate-y-0 size-12 rounded-none border-border" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
