import { Moon, Sun, ChevronDown } from "lucide-react";
import { useApp, Lang } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Toggles() {
  const { lang, setLang, theme, toggleTheme, t } = useApp();
  
  const languages: { code: Lang; label: string }[] = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            aria-label={t("ui.lang")}
            className="font-mono text-[11px] uppercase tracking-widest border border-border px-2.5 h-9 inline-flex items-center gap-1 hover:bg-foreground hover:text-background transition-colors focus:outline-none"
          >
            <span className="text-primary font-bold">{lang}</span>
            <ChevronDown className="size-3 opacity-50" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="font-mono text-[11px] uppercase tracking-widest min-w-[80px]">
          {languages.map((l) => (
            <DropdownMenuItem
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`cursor-pointer justify-center ${lang === l.code ? "bg-muted font-bold text-primary" : "opacity-70"}`}
            >
              {l.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

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