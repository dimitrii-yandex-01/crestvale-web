import { useApp } from "@/lib/i18n";

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="max-w-[1440px] mx-auto border-t border-border p-8 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-6 bg-primary" />
          <span className="font-mono font-bold tracking-tighter">CRESTVALE</span>
        </div>
        <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
          {t("footer.rights")}
        </div>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
}