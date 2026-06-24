import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useApp } from "@/lib/i18n";
import { toast } from "sonner";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const { t } = useApp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xlgygkkr", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSent(true);
        toast.success("Заявка успешно отправлена!");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          toast.error(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          toast.error("Произошла ошибка при отправке.");
        }
      }
    } catch (error) {
      toast.error("Не удалось отправить форму.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden p-8 md:p-32 bg-secondary text-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 size-80 rounded-full bg-primary animate-drift" />
        <div className="absolute -bottom-24 -right-10 size-60 bg-accent animate-float" />
      </div>
      <div ref={ref} className="reveal relative max-w-4xl mx-auto text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-background/50 mb-8">
          {t("contact.kicker")}
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">
          {t("contact.title")}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <div className="space-y-3">
            <label className="block font-mono text-[10px] uppercase tracking-widest text-background/50">{t("contact.name")}</label>
            <input
              required
              name="name"
              type="text"
              className="w-full bg-transparent border-b border-background/20 py-2 focus:border-primary outline-none transition-colors text-background"
            />
          </div>
          <div className="space-y-3">
            <label className="block font-mono text-[10px] uppercase tracking-widest text-background/50">{t("contact.email")}</label>
            <input
              required
              name="email"
              type="email"
              className="w-full bg-transparent border-b border-background/20 py-2 focus:border-primary outline-none transition-colors text-background"
            />
          </div>
          <div className="space-y-3 md:col-span-2">
            <label className="block font-mono text-[10px] uppercase tracking-widest text-background/50">{t("contact.task")}</label>
            <textarea
              required
              name="message"
              rows={3}
              className="w-full bg-transparent border-b border-background/20 py-2 focus:border-primary outline-none transition-colors text-background resize-none"
            />
          </div>
          <div className="md:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting || sent}
              className={`cta-shimmer px-12 py-6 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-[0.2em] transition-all ${
                isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-accent hover:text-foreground hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? "ОТПРАВКА..." : sent ? t("contact.sent") : t("contact.send")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}