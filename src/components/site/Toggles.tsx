import { Moon, Sun } from "lucide-react";
import { useApp } from "@/lib/i18n";

export function Toggles() {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleLang}
        aria-label={t("ui.lang")}
        className="font-mono text-[11px] uppercase tracking-widest border border-border px-2.5 h-9 inline-flex items-center gap-1 hover:bg-foreground hover:text-background transition-colors"
      >
        <span className={lang === "ru" ? "text-primary" : "opacity-50"}>RU</span>
        <span className="opacity-30">/</span>
        <span className={lang === "en" ? "text-primary" : "opacity-50"}>EN</span>
        <span className="opacity-30">/</span>
        <span className={lang === "es" ? "text-primary" : "opacity-50"}>ES</span>
      </button>
      <button
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t("ui.theme.light") : t("ui.theme.dark")}
        className="size-9 border border-border grid place-items-center hover:bg-foreground hover:text-background transition-colors"
      >
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    </div>
  );
}