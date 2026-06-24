import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Metrics } from "@/components/site/Metrics";
import { Process } from "@/components/site/Process";
import { Tools } from "@/components/site/Tools";
import { Pricing } from "@/components/site/Pricing";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crestvale Analytics — Аналитика данных для бизнеса" },
      { name: "description", content: "Аналитическое бюро: BI-дашборды, прогнозные ML-модели, аудит данных. Превращаем хаос данных в архитектуру решений." },
      { property: "og:title", content: "Crestvale Analytics — Аналитика данных" },
      { property: "og:description", content: "BI-дашборды, прогнозные модели и аудит данных." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <main className="max-w-[1440px] mx-auto">
        <Hero />
        <Marquee />
        <Services />
        <Metrics />
        <Process />
        <Tools />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
