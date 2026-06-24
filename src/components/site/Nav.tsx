import { Toggles } from "./Toggles";
import { useApp } from "@/lib/i18n";

export function Nav() {
  const { t } = useApp();
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 gap-4">
        <a href="#top" className="flex items-center gap-3">
          <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
            <path d="M2 22 L12 10 L16 14 L24 4 L28 10 L46 10 L46 24 L2 24 Z" fill="url(#logo-grad)"/>
            <path d="M2 22 L12 10 L16 14 L24 4 L28 10 L46 10" stroke="#42B4E6" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="24" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#42B4E6" stopOpacity="0.4"/>
                <stop offset="1" stopColor="#42B4E6" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col justify-center leading-none">
            <span className="font-bold text-[16px] text-[#021444] dark:text-white tracking-wide">CRESTVALE</span>
            <span className="font-bold text-[13px] text-[#42B4E6] tracking-wide">ANALYTICS</span>
          </div>
        </a>
        <div className="hidden lg:flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#services" className="link-underline hover:text-primary transition-colors">{t("nav.services")}</a>
          <a href="#metrics" className="link-underline hover:text-primary transition-colors">{t("nav.cases")}</a>
          <a href="#process" className="link-underline hover:text-primary transition-colors">{t("nav.process")}</a>
          <a href="#tools" className="link-underline hover:text-primary transition-colors">{t("nav.tools")}</a>
          <a href="#contact" className="link-underline hover:text-primary transition-colors">{t("nav.contact")}</a>
        </div>
        <div className="flex items-center gap-3">
          <Toggles />
          <a
            href="#contact"
            className="cta-shimmer hidden sm:inline-block px-5 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}