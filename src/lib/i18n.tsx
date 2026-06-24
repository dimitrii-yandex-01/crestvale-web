import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";
export type Theme = "light" | "dark";

type Dict = Record<string, string | string[]>;

const dict: Record<Lang, Dict> = {
  ru: {
    "nav.services": "Услуги",
    "nav.cases": "Кейсы",
    "nav.process": "Процесс",
    "nav.tools": "Стек",
    "nav.contact": "Контакт",
    "nav.cta": "Начать проект",

    "hero.kicker": "№ 001 — Платформа управления данными",
    "hero.title.1": "ДАННЫЕ —",
    "hero.title.2": "ЭТО ",
    "hero.title.3": "СИСТЕМА",
    "hero.sub": "Полноценная система данных для бизнеса. От хранилищ и дашбордов до корпоративных AI-помощников.",
    "hero.status": "СИСТЕМА: АКТИВНА",

    "services.s1.title": "Корпоративный AI-помощник",
    "services.s1.desc": "Поиск по регламентам, анализ договоров, ответы на вопросы сотрудников. (Open WebUI, Ollama, AnythingLLM)",
    "services.s1.example": "Пример: Бот анализирует 100-страничный договор и за секунду выдает риски по штрафам.",
    "services.s2.title": "Data Warehouse",
    "services.s2.desc": "Единый источник данных, автоматизированные витрины, финансовая отчетность. (ClickHouse, Airflow, dbt)",
    "services.s2.example": "Пример: Сбор транзакций из 5 разных систем в единую витрину с обновлением раз в минуту.",
    "services.s3.title": "Data Observability",
    "services.s3.desc": "Контроль качества данных, мониторинг ETL, алерты на аномалии. (OpenMetadata, Great Expectations)",
    "services.s3.example": "Пример: Автоматический алерт в Telegram, если ночная выгрузка данных из CRM упала.",
    "services.s4.title": "Каталог данных",
    "services.s4.desc": "Описание метрик, владельцы данных, поиск по таблицам и отчетам. (DataHub, OpenMetadata)",
    "services.s4.example": "Пример: Единый портал, где каждый видит точную формулу расчета метрики LTV.",
    "services.s5.title": "Аналитическая платформа",
    "services.s5.desc": "Дашборды, KPI, контроль продаж и финансов. (Apache Superset, Metabase, Grafana)",
    "services.s5.example": "Пример: Интерактивный дашборд для CEO с план/факт анализом по регионам.",
    "services.s6.title": "Автоматизация процессов",
    "services.s6.desc": "Автоматические отчеты, уведомления, интеграции между сервисами. (n8n, Kestra)",
    "services.s6.example": "Пример: Сценарий, который сам формирует PDF-отчет и отправляет инвесторам 1 числа.",
    "services.s7.title": "Замена Atlassian-стека",
    "services.s7.desc": "Локальные аналоги: Plane вместо Jira, Outline вместо Confluence, Mattermost вместо Slack.",
    "services.s7.example": "Пример: Миграция 1000 тикетов и базы знаний на независимые self-hosted решения.",

    "metrics.kicker": "№ 002 — Результаты",
    "metrics.title": "Цифры, которые подтверждают экспертизу",
    "metrics.m1": "Средний рост ROI после внедрения BI",
    "metrics.m2": "Крупных внедрений в ритейле и финтехе",
    "metrics.m3": "Автоматизированный мониторинг систем",

    "process.kicker": "№ 003 — Метод",
    "process.title": "Подход STAR. Никаких отклонений.",
    "process.p1.title": "Ситуация (Situation)",
    "process.p1.desc": "Аудит текущего состояния: где находятся данные, как они собираются и какие проблемы мешают бизнесу.",
    "process.p2.title": "Задача (Task)",
    "process.p2.desc": "Формирование четких KPI, проектирование архитектуры хранилища и выбор оптимального стека.",
    "process.p3.title": "Действие (Action)",
    "process.p3.desc": "Разработка ETL-пайплайнов, внедрение AI-моделей и построение аналитических дашбордов.",
    "process.p4.title": "Результат (Result)",
    "process.p4.desc": "Готовая система данных с автоматическим мониторингом, метриками и измеримым ROI.",

    "tools.kicker": "№ 004 — Инструменты",
    "tools.title": "Стек, который решает задачи",
    "tools.hint": "← листай карточки →",
    "tools.case": "Кейс",
    "tools.solution": "Как решили",
    "tools.example": "Пример",

    "tools.sql.desc": "Аналитика над миллиардами строк в реальном времени. Агрегаты за секунды.",
    "tools.sql.task": "Задача: посчитать DAU/MAU по городам за 7 дней на 2 млрд событий.",
    "tools.sql.sol": "Решение: ClickHouse + uniq() агрегат, ответ за ~1.2с.",
    "tools.pg.desc": "Надежное реляционное хранилище для мастер-данных и бизнес-логики.",
    "tools.pg.task": "Задача: хранение профилей пользователей с транзакционной целостностью.",
    "tools.pg.sol": "Решение: PostgreSQL + JSONB поля для гибких атрибутов.",
    "tools.air.desc": "Оркестрация ETL-пайплайнов. DAG с зависимостями, retry и alerting.",
    "tools.air.task": "Задача: ночная загрузка из 12 источников с зависимостями.",
    "tools.air.sol": "Решение: DAG с SLA-алертами в Telegram, fail-rate упал с 8% до 0.3%.",
    "tools.dbt.desc": "Трансформация данных в хранилище (T в ELT). Инженерные практики для SQL.",
    "tools.dbt.task": "Задача: версионирование бизнес-логики и тестирование метрик.",
    "tools.dbt.sol": "Решение: dbt + CI/CD. Документация и тесты генерируются автоматически.",
    "tools.ometa.desc": "Единый каталог данных (Data Catalog) и контроль качества (Observability).",
    "tools.ometa.task": "Задача: аналитики не знают, откуда берется метрика Revenue.",
    "tools.ometa.sol": "Решение: OpenMetadata с lineage графами от базы до дашборда.",
    "tools.super.desc": "Современная BI-платформа. Дашборды, SQL-лаборатория и кэширование.",
    "tools.super.task": "Задача: дать доступ 100 менеджерам к интерактивной отчетности.",
    "tools.super.sol": "Решение: Apache Superset поверх ClickHouse с Redis кэшированием.",
    "tools.meta.desc": "Легкая BI-система для self-service аналитики без знания SQL.",
    "tools.meta.task": "Задача: маркетинг хочет сам строить воронки.",
    "tools.meta.sol": "Решение: Metabase с преднастроенными моделями данных.",
    "tools.grafana.desc": "Мониторинг инфраструктуры и алертинг в реальном времени.",
    "tools.grafana.task": "Задача: отслеживать нагрузку на сервера базы данных.",
    "tools.grafana.sol": "Решение: Grafana + Prometheus для визуализации метрик CPU/RAM.",
    "tools.ai.desc": "Локальные LLM-агенты для корпоративных задач без утечек в публичный API.",
    "tools.ai.task": "Задача: HR тратит 4 часа в день на ответы по отпускам и регламентам.",
    "tools.ai.sol": "Решение: Open WebUI + Ollama с RAG по базе знаний компании.",
    "tools.allm.desc": "Универсальное RAG-приложение для работы с документами предприятия.",
    "tools.allm.task": "Задача: быстрый поиск пунктов по 500-страничному договору.",
    "tools.allm.sol": "Решение: AnythingLLM с локальной векторной базой.",
    "tools.n8n.desc": "Визуальная автоматизация процессов. Альтернатива Zapier и Make.",
    "tools.n8n.task": "Задача: отправлять аллерт в мессенджер при падении продаж в регионе.",
    "tools.n8n.sol": "Решение: сценарий n8n (Webhook -> ClickHouse -> Telegram).",
    "tools.py.desc": "Универсальный язык для ML, скриптов и сложной трансформации данных.",
    "tools.py.task": "Задача: прогнозирование оттока пользователей (Churn).",
    "tools.py.sol": "Решение: scikit-learn модель, запускаемая по расписанию в Airflow.",
    "tools.git.desc": "Контроль версий для аналитического кода (Analytics as Code).",
    "tools.git.task": "Задача: аналитики затирают код друг друга в хранилище.",
    "tools.git.sol": "Решение: GitLab/GitHub с обязательным Code Review для dbt моделей.",

    "pricing.base.tag": "База",
    "pricing.base.name": "Аудит",
    "pricing.base.price": "150к ₽",
    "pricing.base.desc": "Разовое исследование инфраструктуры и качества данных.",
    "pricing.pop.tag": "Популярное",
    "pricing.pop.name": "Внедрение",
    "pricing.pop.price": "450к+ ₽",
    "pricing.pop.desc": "Разработка дашбордов и настройка сквозной аналитики под ключ.",
    "pricing.cust.tag": "Под задачу",
    "pricing.cust.name": "Прогноз",
    "pricing.cust.price": "от 800к ₽",
    "pricing.cust.desc": "ML-моделирование и предиктивная аналитика для сложных систем.",
    "pricing.choose": "Выбрать",

    "contact.kicker": "№ 005 — Контакт",
    "contact.title": "ГОТОВЫ К ОПТИМИЗАЦИИ?",
    "contact.name": "Имя",
    "contact.email": "Email",
    "contact.task": "Задача",
    "contact.send": "Отправить запрос",
    "contact.sent": "Отправлено ✓",

    "footer.rights": "© 2026 CRESTVALE ANALYTICS. ВСЕ СИСТЕМЫ В НОРМЕ.",

    "ui.theme.light": "Светлая",
    "ui.theme.dark": "Тёмная",
    "ui.lang": "RU / EN",
  },
  en: {
    "nav.services": "Services",
    "nav.cases": "Cases",
    "nav.process": "Process",
    "nav.tools": "Stack",
    "nav.contact": "Contact",
    "nav.cta": "Start a project",

    "hero.kicker": "№ 001 — Data Management Platform",
    "hero.title.1": "DATA IS",
    "hero.title.2": "A ",
    "hero.title.3": "SYSTEM",
    "hero.sub": "A complete data system for businesses. From warehouses and dashboards to corporate AI assistants.",
    "hero.status": "SYSTEM: ACTIVE",

    "services.s1.title": "Corporate AI Assistant",
    "services.s1.desc": "Search through regulations, analyze contracts, answer employee questions. (Open WebUI, Ollama, AnythingLLM)",
    "services.s1.example": "Example: The bot analyzes a 100-page contract and highlights penalty risks in seconds.",
    "services.s2.title": "Data Warehouse",
    "services.s2.desc": "Single source of truth, automated data marts, financial reporting. (ClickHouse, Airflow, dbt)",
    "services.s2.example": "Example: Collecting transactions from 5 systems into a single data mart updated every minute.",
    "services.s3.title": "Data Observability",
    "services.s3.desc": "Data quality control, ETL monitoring, anomaly alerts. (OpenMetadata, Great Expectations)",
    "services.s3.example": "Example: Automated Telegram alert if the nightly CRM data extract fails.",
    "services.s4.title": "Data Catalog",
    "services.s4.desc": "Metric descriptions, data owners, table and report search. (DataHub, OpenMetadata)",
    "services.s4.example": "Example: A single portal where everyone can see the exact formula for LTV.",
    "services.s5.title": "Analytics Platform",
    "services.s5.desc": "Dashboards, KPIs, sales and finance control. (Apache Superset, Metabase, Grafana)",
    "services.s5.example": "Example: Interactive dashboard for the CEO with target vs actual analysis by region.",
    "services.s6.title": "Process Automation",
    "services.s6.desc": "Automated reports, notifications, cross-service integrations. (n8n, Kestra)",
    "services.s6.example": "Example: A workflow that generates a PDF report and emails investors on the 1st of every month.",
    "services.s7.title": "Atlassian Stack Replacement",
    "services.s7.desc": "Local alternatives: Plane for Jira, Outline for Confluence, Mattermost for Slack.",
    "services.s7.example": "Example: Migrating 1000 tickets and knowledge base to independent self-hosted solutions.",

    "metrics.kicker": "№ 002 — Results",
    "metrics.title": "Numbers that prove expertise",
    "metrics.m1": "Average ROI growth after BI rollout",
    "metrics.m2": "Major deployments in retail & fintech",
    "metrics.m3": "Automated systems monitoring",

    "process.kicker": "№ 003 — Method",
    "process.title": "STAR approach. No deviations.",
    "process.p1.title": "Situation",
    "process.p1.desc": "Auditing the current state: where data lives, how it's collected, and what issues hinder the business.",
    "process.p2.title": "Task",
    "process.p2.desc": "Defining clear KPIs, designing warehouse architecture, and selecting the optimal stack.",
    "process.p3.title": "Action",
    "process.p3.desc": "Building ETL pipelines, deploying AI models, and creating analytical dashboards.",
    "process.p4.title": "Result",
    "process.p4.desc": "A turnkey data system with automated monitoring, metrics, and measurable ROI.",

    "tools.kicker": "№ 004 — Tools",
    "tools.title": "A stack that solves problems",
    "tools.hint": "← swipe the cards →",
    "tools.case": "Case",
    "tools.solution": "How we solved it",
    "tools.example": "Example",

    "tools.sql.desc": "Real-time analytics over billions of rows. Aggregates in seconds.",
    "tools.sql.task": "Goal: compute DAU/MAU by city over 7 days on 2B events.",
    "tools.sql.sol": "Solution: ClickHouse + uniq() — answer in ~1.2s.",
    "tools.pg.desc": "Reliable relational storage for master data and business logic.",
    "tools.pg.task": "Goal: store user profiles with transactional integrity.",
    "tools.pg.sol": "Solution: PostgreSQL + JSONB fields for flexible attributes.",
    "tools.air.desc": "ETL pipeline orchestration. DAGs with dependencies and alerting.",
    "tools.air.task": "Goal: nightly load from 12 sources with dependencies.",
    "tools.air.sol": "Solution: DAG with SLA alerts to Telegram, fail rate dropped to 0.3%.",
    "tools.dbt.desc": "Data transformation in the warehouse. Software engineering for SQL.",
    "tools.dbt.task": "Goal: versioning business logic and testing metrics.",
    "tools.dbt.sol": "Solution: dbt + CI/CD. Auto-generated documentation and tests.",
    "tools.ometa.desc": "Unified Data Catalog and Data Observability platform.",
    "tools.ometa.task": "Goal: analysts don't know where the Revenue metric comes from.",
    "tools.ometa.sol": "Solution: OpenMetadata with data lineage from DB to dashboard.",
    "tools.super.desc": "Modern BI platform. Dashboards, SQL Lab, and caching.",
    "tools.super.task": "Goal: provide interactive reporting to 100 managers.",
    "tools.super.sol": "Solution: Apache Superset over ClickHouse with Redis caching.",
    "tools.meta.desc": "Lightweight BI system for self-service analytics without SQL knowledge.",
    "tools.meta.task": "Goal: marketing wants to build funnels on their own.",
    "tools.meta.sol": "Solution: Metabase with pre-configured data models.",
    "tools.grafana.desc": "Infrastructure monitoring and real-time alerting.",
    "tools.grafana.task": "Goal: monitor database server load.",
    "tools.grafana.sol": "Solution: Grafana + Prometheus for CPU/RAM metrics visualization.",
    "tools.ai.desc": "Local LLM agents for corporate tasks with no data leaks to public APIs.",
    "tools.ai.task": "Goal: HR spends 4 hours/day answering policy questions.",
    "tools.ai.sol": "Solution: Open WebUI + Ollama with RAG on the company's knowledge base.",
    "tools.allm.desc": "Versatile RAG application for working with enterprise documents.",
    "tools.allm.task": "Goal: quickly find clauses in a 500-page contract.",
    "tools.allm.sol": "Solution: AnythingLLM with a local vector database.",
    "tools.n8n.desc": "Visual workflow automation. Self-hosted alternative to Zapier.",
    "tools.n8n.task": "Goal: send an alert to a messenger when regional sales drop.",
    "tools.n8n.sol": "Solution: n8n workflow (Webhook -> ClickHouse -> Telegram).",
    "tools.py.desc": "Universal language for ML, scripting, and complex data transformation.",
    "tools.py.task": "Goal: forecast user churn.",
    "tools.py.sol": "Solution: scikit-learn model, scheduled in Airflow.",
    "tools.git.desc": "Version control for analytical code (Analytics as Code).",
    "tools.git.task": "Goal: analysts overwrite each other's code in the warehouse.",
    "tools.git.sol": "Solution: GitLab/GitHub with mandatory Code Review for dbt models.",

    "pricing.base.tag": "Base",
    "pricing.base.name": "Audit",
    "pricing.base.price": "$1.5k",
    "pricing.base.desc": "One-time research of infrastructure and data quality.",
    "pricing.pop.tag": "Popular",
    "pricing.pop.name": "Delivery",
    "pricing.pop.price": "$4.5k+",
    "pricing.pop.desc": "Dashboards and end-to-end analytics turnkey.",
    "pricing.cust.tag": "Custom",
    "pricing.cust.name": "Forecast",
    "pricing.cust.price": "from $8k",
    "pricing.cust.desc": "ML modelling and predictive analytics for complex systems.",
    "pricing.choose": "Choose",

    "contact.kicker": "№ 005 — Contact",
    "contact.title": "READY TO OPTIMIZE?",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.task": "Task",
    "contact.send": "Send request",
    "contact.sent": "Sent ✓",

    "footer.rights": "© 2026 CRESTVALE ANALYTICS. ALL SYSTEMS NOMINAL.",

    "ui.theme.light": "Light",
    "ui.theme.dark": "Dark",
    "ui.lang": "RU / EN",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  t: (key: string) => string;
};

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  const [theme, setTheme] = useState<Theme>("light");

  // hydrate from storage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sl = localStorage.getItem("lang") as Lang | null;
    const st = localStorage.getItem("theme") as Theme | null;
    if (sl === "ru" || sl === "en") setLang(sl);
    if (st === "light" || st === "dark") setTheme(st);
    else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) setTheme("dark");
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = lang;
    localStorage.setItem("theme", theme);
    localStorage.setItem("lang", lang);
  }, [theme, lang]);

  const t = (key: string) => {
    const v = dict[lang][key];
    return typeof v === "string" ? v : key;
  };

  return (
    <AppCtx.Provider
      value={{
        lang,
        setLang,
        toggleLang: () => setLang((l) => (l === "ru" ? "en" : "ru")),
        theme,
        setTheme,
        toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        t,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
