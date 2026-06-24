import { jsxs, jsx } from "react/jsx-runtime";
import { Sun, Moon, ArrowLeft, ArrowRight, Waypoints, Bot } from "lucide-react";
import { u as useApp } from "./router-Bx4zDOPZ.js";
import * as React from "react";
import { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { SiClickhouse, SiPostgresql, SiApacheairflow, SiDbt, SiApachesuperset, SiMetabase, SiGrafana, SiOllama, SiN8N, SiPython, SiGit } from "react-icons/si";
import { toast } from "sonner";
import "@tanstack/react-query";
import "@tanstack/react-router";
function Toggles() {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: toggleLang,
        "aria-label": t("ui.lang"),
        className: "font-mono text-[11px] uppercase tracking-widest border border-border px-2.5 h-9 inline-flex items-center gap-1 hover:bg-foreground hover:text-background transition-colors",
        children: [
          /* @__PURE__ */ jsx("span", { className: lang === "ru" ? "text-primary" : "opacity-50", children: "RU" }),
          /* @__PURE__ */ jsx("span", { className: "opacity-30", children: "/" }),
          /* @__PURE__ */ jsx("span", { className: lang === "en" ? "text-primary" : "opacity-50", children: "EN" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleTheme,
        "aria-label": theme === "dark" ? t("ui.theme.light") : t("ui.theme.dark"),
        className: "size-9 border border-border grid place-items-center hover:bg-foreground hover:text-background transition-colors",
        children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "size-4" }) : /* @__PURE__ */ jsx(Moon, { className: "size-4" })
      }
    )
  ] });
}
function Nav() {
  const { t } = useApp();
  return /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 gap-4", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 48 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-auto", children: [
        /* @__PURE__ */ jsx("path", { d: "M2 22 L12 10 L16 14 L24 4 L28 10 L46 10 L46 24 L2 24 Z", fill: "url(#logo-grad)" }),
        /* @__PURE__ */ jsx("path", { d: "M2 22 L12 10 L16 14 L24 4 L28 10 L46 10", stroke: "#42B4E6", strokeWidth: "3", strokeLinejoin: "round", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "logo-grad", x1: "24", y1: "4", x2: "24", y2: "24", gradientUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ jsx("stop", { stopColor: "#42B4E6", stopOpacity: "0.4" }),
          /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#42B4E6", stopOpacity: "0.05" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center leading-none", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-[16px] text-[#021444] dark:text-white tracking-wide", children: "CRESTVALE" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-[13px] text-[#42B4E6] tracking-wide", children: "ANALYTICS" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex gap-8 font-mono text-xs uppercase tracking-widest", children: [
      /* @__PURE__ */ jsx("a", { href: "#services", className: "link-underline hover:text-primary transition-colors", children: t("nav.services") }),
      /* @__PURE__ */ jsx("a", { href: "#metrics", className: "link-underline hover:text-primary transition-colors", children: t("nav.cases") }),
      /* @__PURE__ */ jsx("a", { href: "#process", className: "link-underline hover:text-primary transition-colors", children: t("nav.process") }),
      /* @__PURE__ */ jsx("a", { href: "#tools", className: "link-underline hover:text-primary transition-colors", children: t("nav.tools") }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "link-underline hover:text-primary transition-colors", children: t("nav.contact") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Toggles, {}),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#contact",
          className: "cta-shimmer hidden sm:inline-block px-5 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors",
          children: t("nav.cta")
        }
      )
    ] })
  ] }) });
}
function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      el.style.setProperty("--scroll", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: "scroll-progress fixed left-0 top-0 z-[60] h-[3px] w-full bg-primary"
    }
  );
}
function Hero() {
  const { t } = useApp();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "top",
      className: "relative border-b border-border overflow-hidden bg-secondary text-secondary-foreground",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 text-[42vw] leading-none font-extrabold tracking-tighter opacity-[0.08] select-none",
            style: { fontFamily: "var(--font-mono)" },
            children: "CV"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay",
            style: {
              backgroundImage: "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 3px)"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-[1440px] mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-24 md:pb-32", children: [
          /* @__PURE__ */ jsxs("h1", { className: "font-mono font-extrabold uppercase tracking-tight leading-[0.95] text-[12vw] md:text-[8vw] max-w-[14ch] animate-blur-in", children: [
            t("hero.title.1"),
            " ",
            t("hero.title.2"),
            /* @__PURE__ */ jsxs("span", { className: "opacity-90", children: [
              t("hero.title.3"),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "mt-10 max-w-xl font-mono text-sm md:text-base leading-relaxed opacity-90 animate-blur-in",
              style: { animationDelay: "200ms" },
              children: t("hero.sub")
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "#contact", className: "chip-btn chip-btn--solid", children: t("nav.cta") }),
            /* @__PURE__ */ jsx("a", { href: "#process", className: "chip-btn chip-btn--ghost", children: t("nav.process") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-16 flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-80", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block size-2 bg-current animate-ticker" }),
            t("hero.kicker")
          ] })
        ] })
      ]
    }
  );
}
function Marquee() {
  const items = [
    "Predictive Models",
    "Business Intelligence",
    "Data Strategy",
    "ETL Pipelines",
    "Dashboard Design",
    "Machine Learning",
    "Data Audit",
    "Forecast 360"
  ];
  const line = items.join(" • ") + " • ";
  return /* @__PURE__ */ jsx("div", { className: "py-4 border-b border-border overflow-hidden whitespace-nowrap bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "flex font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] animate-marquee", children: [
    /* @__PURE__ */ jsx("span", { className: "pr-12", children: line.repeat(4) }),
    /* @__PURE__ */ jsx("span", { className: "pr-12", children: line.repeat(4) })
  ] }) });
}
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
function Services() {
  const ref = useReveal();
  const { t } = useApp();
  const [expandedId, setExpandedId] = useState(null);
  const services = [
    { num: "01", title: t("services.s1.title"), desc: t("services.s1.desc"), example: t("services.s1.example") },
    { num: "02", title: t("services.s2.title"), desc: t("services.s2.desc"), example: t("services.s2.example") },
    { num: "03", title: t("services.s3.title"), desc: t("services.s3.desc"), example: t("services.s3.example") },
    { num: "04", title: t("services.s4.title"), desc: t("services.s4.desc"), example: t("services.s4.example") },
    { num: "05", title: t("services.s5.title"), desc: t("services.s5.desc"), example: t("services.s5.example") },
    { num: "06", title: t("services.s6.title"), desc: t("services.s6.desc"), example: t("services.s6.example") },
    { num: "07", title: t("services.s7.title"), desc: t("services.s7.desc"), example: t("services.s7.example") }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "services",
      ref,
      className: "stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b border-border bg-border gap-px",
      children: services.map((s, i) => {
        const isExpanded = expandedId === s.num;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "stagger-item tile-lift relative p-12 bg-background hover:bg-card transition-colors group overflow-hidden flex flex-col",
            style: { ["--reveal-delay"]: `${i * 140}ms` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 h-1 w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-primary text-sm mb-6 block", children: [
                s.num,
                "/"
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold tracking-tight mb-4", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground/60 mb-8 leading-relaxed flex-1", children: s.desc }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0 mb-0"}`,
                  children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/50 border-l-2 border-primary text-sm text-foreground/80 leading-relaxed", children: s.example }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setExpandedId(isExpanded ? null : s.num),
                  className: "size-12 border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 grid place-items-center mt-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  children: /* @__PURE__ */ jsx("span", { className: `text-xl transition-transform duration-500 ${isExpanded ? "rotate-45" : "group-hover:rotate-90"}`, children: "+" })
                }
              )
            ]
          },
          s.num
        );
      })
    }
  );
}
function CountUp({ to, suffix = "", prefix = "", duration = 1800, decimals = 0 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(to * eased);
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    prefix,
    value.toFixed(decimals),
    suffix
  ] });
}
function Metrics() {
  const ref = useReveal();
  const numbersRef = useReveal(0.25);
  const { t } = useApp();
  return /* @__PURE__ */ jsx("section", { id: "metrics", className: "p-8 md:p-16 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { ref, className: "reveal", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6", children: t("metrics.kicker") }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-6xl font-bold tracking-tighter mb-10 text-balance", children: t("metrics.title") }),
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-secondary relative overflow-hidden group", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1/2 h-1/2 bg-primary origin-top-left animate-scale-up", style: { animationDelay: "100ms" } }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-2/3 h-2/3 bg-accent origin-bottom-right animate-scale-up", style: { animationDelay: "300ms" } }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 size-40 rounded-full border-[10px] border-background animate-scale-up group-hover:rotate-180 transition-transform duration-[1500ms]", style: { animationDelay: "500ms" } }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-8 right-8 h-1 bg-background origin-left", style: { animation: "bar-grow-x 1.1s cubic-bezier(0.16,1,0.3,1) 700ms both" } })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { ref: numbersRef, className: "stagger space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "stagger-item border-l-4 border-primary pl-8", style: { ["--reveal-delay"]: "0ms" }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-7xl md:text-9xl font-extrabold tracking-tighter leading-none", children: /* @__PURE__ */ jsx(CountUp, { to: 140, suffix: "%" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-mono uppercase text-sm tracking-widest mt-4 text-foreground/50", children: t("metrics.m1") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "stagger-item border-l-4 border-secondary pl-8", style: { ["--reveal-delay"]: "150ms" }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-7xl md:text-9xl font-extrabold tracking-tighter leading-none", children: /* @__PURE__ */ jsx(CountUp, { to: 50, suffix: "+" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-mono uppercase text-sm tracking-widest mt-4 text-foreground/50", children: t("metrics.m2") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "stagger-item border-l-4 border-accent pl-8", style: { ["--reveal-delay"]: "300ms" }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-7xl md:text-9xl font-extrabold tracking-tighter leading-none", children: "24/7" }),
        /* @__PURE__ */ jsx("p", { className: "font-mono uppercase text-sm tracking-widest mt-4 text-foreground/50", children: t("metrics.m3") })
      ] })
    ] })
  ] }) });
}
function Process() {
  const headRef = useReveal();
  const gridRef = useReveal();
  const { t } = useApp();
  const steps = [
    { num: "01", title: t("process.p1.title"), desc: t("process.p1.desc") },
    { num: "02", title: t("process.p2.title"), desc: t("process.p2.desc") },
    { num: "03", title: t("process.p3.title"), desc: t("process.p3.desc") },
    { num: "04", title: t("process.p4.title"), desc: t("process.p4.desc") }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "process", className: "border-b border-border", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "reveal p-8 md:p-16", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6", children: t("process.kicker") }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl", children: t("process.title") })
    ] }),
    /* @__PURE__ */ jsx("div", { ref: gridRef, className: "stagger grid grid-cols-1 md:grid-cols-4 border-t border-border", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "stagger-item relative p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-border min-h-[260px] flex flex-col justify-between hover:bg-foreground hover:text-background transition-colors duration-500 group overflow-hidden",
        style: { ["--reveal-delay"]: `${i * 120}ms` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-0 bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" }),
          /* @__PURE__ */ jsx("div", { className: "relative font-mono text-sm", children: s.num }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "relative text-2xl font-bold mb-3 transition-transform duration-500 group-hover:translate-x-1", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "relative text-sm opacity-70 leading-relaxed", children: s.desc })
          ] })
        ]
      },
      s.num
    )) })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const baseTools = [
  {
    name: "ClickHouse",
    k: "sql",
    example: "SELECT city, uniq(user_id) FROM events WHERE ts > now() - 7",
    color: "bg-[#FFCC01]",
    icon: /* @__PURE__ */ jsx(SiClickhouse, { className: "w-10 h-10 text-black" })
  },
  {
    name: "PostgreSQL",
    k: "pg",
    example: "CREATE INDEX idx_users_email ON users(email);",
    color: "bg-[#4169E1]",
    icon: /* @__PURE__ */ jsx(SiPostgresql, { className: "w-10 h-10" })
  },
  {
    name: "Airflow",
    k: "air",
    example: "PythonOperator(task_id='load', python_callable=etl)",
    color: "bg-[#017CEE]",
    icon: /* @__PURE__ */ jsx(SiApacheairflow, { className: "w-10 h-10" })
  },
  {
    name: "dbt",
    k: "dbt",
    example: "dbt run --select tag:finance --target prod",
    color: "bg-[#FF694B]",
    icon: /* @__PURE__ */ jsx(SiDbt, { className: "w-10 h-10" })
  },
  {
    name: "OpenMetadata",
    k: "ometa",
    example: "GET /api/v1/tables/name/clickhouse.db.events",
    color: "bg-primary",
    icon: /* @__PURE__ */ jsx(Waypoints, { className: "w-10 h-10" })
  },
  {
    name: "Apache Superset",
    k: "super",
    example: "Chart → Line → Group by: region → Time: last 30d",
    color: "bg-[#20A7C9]",
    icon: /* @__PURE__ */ jsx(SiApachesuperset, { className: "w-10 h-10" })
  },
  {
    name: "Metabase",
    k: "meta",
    example: "Question → Filter by date → Save to Dashboard",
    color: "bg-[#509EE3]",
    icon: /* @__PURE__ */ jsx(SiMetabase, { className: "w-10 h-10" })
  },
  {
    name: "Grafana",
    k: "grafana",
    example: "sum(rate(http_requests_total[5m])) by (status)",
    color: "bg-[#F46800]",
    icon: /* @__PURE__ */ jsx(SiGrafana, { className: "w-10 h-10" })
  },
  {
    name: "Open WebUI / Ollama",
    k: "ai",
    example: "RAG Pipeline: Embedding -> ChromaDB -> Llama3",
    color: "bg-foreground",
    icon: /* @__PURE__ */ jsx(SiOllama, { className: "w-10 h-10 text-background" })
  },
  {
    name: "AnythingLLM",
    k: "allm",
    example: "Workspace -> Upload Doc -> Chat with context",
    color: "bg-secondary",
    icon: /* @__PURE__ */ jsx(Bot, { className: "w-10 h-10" })
  },
  {
    name: "n8n",
    k: "n8n",
    example: "Webhook Node → HTTP Request → Send Message Node",
    color: "bg-[#EA4B71]",
    icon: /* @__PURE__ */ jsx(SiN8N, { className: "w-10 h-10" })
  },
  {
    name: "Python",
    k: "py",
    example: "df.groupby('segment').agg({'revenue':'sum'})",
    color: "bg-[#3776AB]",
    icon: /* @__PURE__ */ jsx(SiPython, { className: "w-10 h-10" })
  },
  {
    name: "Git",
    k: "git",
    example: 'git commit -m "feat: add churn model v2"',
    color: "bg-[#F05032]",
    icon: /* @__PURE__ */ jsx(SiGit, { className: "w-10 h-10" })
  }
];
function Tools() {
  const headRef = useReveal();
  const carRef = useReveal();
  const { t } = useApp();
  return /* @__PURE__ */ jsxs("section", { id: "tools", className: "border-b border-border", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "reveal p-8 md:p-16", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6", children: t("tools.kicker") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl", children: t("tools.title") }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: t("tools.hint") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { ref: carRef, className: "reveal border-t border-border p-6 md:p-12", children: /* @__PURE__ */ jsxs(Carousel, { opts: { align: "start", loop: true }, className: "relative", children: [
      /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: baseTools.map((tool) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "pl-4 basis-full sm:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsxs("article", { className: "tile-lift relative h-full p-8 border border-border bg-card flex flex-col group overflow-hidden min-h-[520px]", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 h-1 w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `size-16 ${tool.color} text-primary-foreground grid place-items-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`,
                children: tool.icon
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 tracking-tight", children: tool.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/60 leading-relaxed mb-6", children: t(`tools.${tool.k}.desc`) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-auto space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-primary pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-1", children: t("tools.case") }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/80 leading-relaxed", children: t(`tools.${tool.k}.task`) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-foreground pl-3", children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-1", children: t("tools.solution") }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/80 leading-relaxed", children: t(`tools.${tool.k}.sol`) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/30 mb-2", children: t("tools.example") }),
                /* @__PURE__ */ jsx("code", { className: "block font-mono text-[11px] text-foreground/70 bg-muted/50 p-3 border border-border leading-relaxed", children: tool.example })
              ] })
            ] })
          ] })
        },
        tool.name
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3 mt-8", children: [
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "static translate-y-0 size-12 rounded-none border-border" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "static translate-y-0 size-12 rounded-none border-border" })
      ] })
    ] }) })
  ] });
}
function Pricing() {
  const ref = useReveal();
  const { t } = useApp();
  const tiers = [
    { tag: t("pricing.base.tag"), name: t("pricing.base.name"), price: t("pricing.base.price"), desc: t("pricing.base.desc"), featured: false },
    { tag: t("pricing.pop.tag"), name: t("pricing.pop.name"), price: t("pricing.pop.price"), desc: t("pricing.pop.desc"), featured: true },
    { tag: t("pricing.cust.tag"), name: t("pricing.cust.name"), price: t("pricing.cust.price"), desc: t("pricing.cust.desc"), featured: false }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "pricing",
      ref,
      className: "stagger grid grid-cols-1 md:grid-cols-3 border-b border-border",
      children: tiers.map((tier, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `stagger-item tile-lift p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-border flex flex-col justify-between min-h-[400px] ${tier.featured ? "bg-card" : ""}`,
          style: { ["--reveal-delay"]: `${i * 160}ms` },
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: `font-mono text-xs uppercase tracking-widest mb-8 ${tier.featured ? "text-primary" : "text-foreground/40"}`,
                  children: tier.tag
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold mb-4", children: tier.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/60 leading-relaxed", children: tier.desc })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold mb-6", children: tier.price }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  className: `cta-shimmer block text-center w-full py-4 font-mono text-xs uppercase tracking-widest transition-colors ${tier.featured ? "bg-primary text-primary-foreground hover:bg-secondary" : "border border-foreground hover:bg-foreground hover:text-background"}`,
                  children: t("pricing.choose")
                }
              )
            ] })
          ]
        },
        tier.name
      ))
    }
  );
}
function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useReveal();
  const { t } = useApp();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/xlgygkkr", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      if (response.ok) {
        setSent(true);
        toast.success("Заявка успешно отправлена!");
        e.target.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          toast.error(data["errors"].map((error) => error["message"]).join(", "));
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
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative overflow-hidden p-8 md:p-32 bg-secondary text-background", children: [
    /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -left-20 size-80 rounded-full bg-primary animate-drift" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -right-10 size-60 bg-accent animate-float" })
    ] }),
    /* @__PURE__ */ jsxs("div", { ref, className: "reveal relative max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-background/50 mb-8", children: t("contact.kicker") }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-7xl font-bold tracking-tighter mb-16", children: t("contact.title") }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-left",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("label", { className: "block font-mono text-[10px] uppercase tracking-widest text-background/50", children: t("contact.name") }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  required: true,
                  name: "name",
                  type: "text",
                  className: "w-full bg-transparent border-b border-background/20 py-2 focus:border-primary outline-none transition-colors text-background"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("label", { className: "block font-mono text-[10px] uppercase tracking-widest text-background/50", children: t("contact.email") }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  required: true,
                  name: "email",
                  type: "email",
                  className: "w-full bg-transparent border-b border-background/20 py-2 focus:border-primary outline-none transition-colors text-background"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 md:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { className: "block font-mono text-[10px] uppercase tracking-widest text-background/50", children: t("contact.task") }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  required: true,
                  name: "message",
                  rows: 3,
                  className: "w-full bg-transparent border-b border-background/20 py-2 focus:border-primary outline-none transition-colors text-background resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "md:col-span-2 flex justify-center mt-8", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting || sent,
                className: `cta-shimmer px-12 py-6 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-[0.2em] transition-all ${isSubmitting ? "opacity-70 cursor-wait" : "hover:bg-accent hover:text-foreground hover:-translate-y-1"}`,
                children: isSubmitting ? "ОТПРАВКА..." : sent ? t("contact.sent") : t("contact.send")
              }
            ) })
          ]
        }
      )
    ] })
  ] });
}
function Footer() {
  const { t } = useApp();
  return /* @__PURE__ */ jsx("footer", { className: "max-w-[1440px] mx-auto border-t border-border p-8 md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "size-6 bg-primary" }),
      /* @__PURE__ */ jsx("span", { className: "font-mono font-bold tracking-tighter", children: "CRESTVALE" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-foreground/40 uppercase tracking-widest", children: t("footer.rights") }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6 text-xs font-mono uppercase tracking-widest", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "LinkedIn" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Telegram" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-[1440px] mx-auto", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Marquee, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Metrics, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Tools, {}),
      /* @__PURE__ */ jsx(Pricing, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
