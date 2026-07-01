import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "en" | "es";
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
    "services.s8.title": "Предиктивная аналитика и ML",
    "services.s8.desc": "Прогнозирование спроса, сегментация и анализ оттока. (Python, LightGBM, Scikit-learn)",
    "services.s8.example": "Пример: ML-модель предсказывает вероятность оттока клиента с точностью 85% за месяц до ухода.",

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
    "services.s8.title": "Predictive Analytics & ML",
    "services.s8.desc": "Demand forecasting, segmentation, and churn analysis. (Python, LightGBM, Scikit-learn)",
    "services.s8.example": "Example: An ML model predicts the probability of customer churn with 85% accuracy a month in advance.",

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
    "ui.lang": "RU / EN / ES",
  },
  es: {
    "nav.services": "Servicios",
    "nav.cases": "Casos",
    "nav.process": "Proceso",
    "nav.tools": "Stack",
    "nav.contact": "Contacto",
    "nav.cta": "Iniciar proyecto",

    "hero.kicker": "№ 001 — Plataforma de Gestión de Datos",
    "hero.title.1": "LOS DATOS SON",
    "hero.title.2": "UN ",
    "hero.title.3": "SISTEMA",
    "hero.sub": "Un sistema de datos completo para empresas. Desde almacenes y paneles hasta asistentes de IA corporativos.",
    "hero.status": "SISTEMA: ACTIVO",

    "services.s1.title": "Asistente de IA Corporativo",
    "services.s1.desc": "Búsqueda en regulaciones, análisis de contratos, respuestas a preguntas de empleados. (Open WebUI, Ollama, AnythingLLM)",
    "services.s1.example": "Ejemplo: El bot analiza un contrato de 100 páginas y resalta los riesgos de penalización en segundos.",
    "services.s2.title": "Data Warehouse",
    "services.s2.desc": "Única fuente de verdad, data marts automatizados, reportes financieros. (ClickHouse, Airflow, dbt)",
    "services.s2.example": "Ejemplo: Recolección de transacciones de 5 sistemas en un solo data mart actualizado cada minuto.",
    "services.s3.title": "Data Observability",
    "services.s3.desc": "Control de calidad de datos, monitoreo de ETL, alertas de anomalías. (OpenMetadata, Great Expectations)",
    "services.s3.example": "Ejemplo: Alerta automática en Telegram si falla la extracción nocturna de datos del CRM.",
    "services.s4.title": "Catálogo de Datos",
    "services.s4.desc": "Descripciones de métricas, propietarios de datos, búsqueda de tablas y reportes. (DataHub, OpenMetadata)",
    "services.s4.example": "Ejemplo: Un portal único donde todos pueden ver la fórmula exacta del LTV.",
    "services.s5.title": "Plataforma Analítica",
    "services.s5.desc": "Dashboards, KPIs, control de ventas y finanzas. (Apache Superset, Metabase, Grafana)",
    "services.s5.example": "Ejemplo: Dashboard interactivo para el CEO con análisis de objetivo vs real por región.",
    "services.s6.title": "Automatización de Procesos",
    "services.s6.desc": "Reportes automatizados, notificaciones, integraciones entre servicios. (n8n, Kestra)",
    "services.s6.example": "Ejemplo: Un flujo de trabajo que genera un reporte en PDF y lo envía por correo a los inversores el día 1 de cada mes.",
    "services.s7.title": "Reemplazo del Stack Atlassian",
    "services.s7.desc": "Alternativas locales: Plane por Jira, Outline por Confluence, Mattermost por Slack.",
    "services.s7.example": "Ejemplo: Migración de 1000 tickets y base de conocimientos a soluciones independientes self-hosted.",
    "services.s8.title": "Analítica Predictiva y ML",
    "services.s8.desc": "Pronóstico de demanda, segmentación y análisis de abandono. (Python, LightGBM, Scikit-learn)",
    "services.s8.example": "Ejemplo: Un modelo de ML predice la probabilidad de abandono del cliente con un 85% de precisión con un mes de anticipación.",

    "metrics.kicker": "№ 002 — Resultados",
    "metrics.title": "Números que prueban la experiencia",
    "metrics.m1": "Crecimiento promedio del ROI después de implementar BI",
    "metrics.m2": "Grandes implementaciones en retail y fintech",
    "metrics.m3": "Monitoreo automatizado de sistemas",

    "process.kicker": "№ 003 — Método",
    "process.title": "Enfoque STAR. Sin desviaciones.",
    "process.p1.title": "Situación",
    "process.p1.desc": "Auditoría del estado actual: dónde viven los datos, cómo se recopilan y qué problemas obstaculizan el negocio.",
    "process.p2.title": "Tarea",
    "process.p2.desc": "Definición de KPIs claros, diseño de la arquitectura del almacén y selección del stack óptimo.",
    "process.p3.title": "Acción",
    "process.p3.desc": "Construcción de pipelines ETL, implementación de modelos de IA y creación de dashboards analíticos.",
    "process.p4.title": "Resultado",
    "process.p4.desc": "Un sistema de datos llave en mano con monitoreo automatizado, métricas y ROI medible.",

    "tools.kicker": "№ 004 — Herramientas",
    "tools.title": "Un stack que resuelve problemas",
    "tools.hint": "← desliza las tarjetas →",
    "tools.case": "Caso",
    "tools.solution": "Cómo lo resolvimos",
    "tools.example": "Ejemplo",

    "tools.sql.desc": "Analítica en tiempo real sobre miles de millones de filas. Agregados en segundos.",
    "tools.sql.task": "Objetivo: calcular DAU/MAU por ciudad en 7 días sobre 2B de eventos.",
    "tools.sql.sol": "Solución: ClickHouse + función uniq() — respuesta en ~1.2s.",
    "tools.pg.desc": "Almacenamiento relacional confiable para datos maestros y lógica de negocio.",
    "tools.pg.task": "Objetivo: almacenar perfiles de usuario con integridad transaccional.",
    "tools.pg.sol": "Solución: PostgreSQL + campos JSONB para atributos flexibles.",
    "tools.air.desc": "Orquestación de pipelines ETL. DAGs con dependencias y alertas.",
    "tools.air.task": "Objetivo: carga nocturna de 12 fuentes con dependencias.",
    "tools.air.sol": "Solución: DAG con alertas de SLA a Telegram, tasa de fallo reducida al 0.3%.",
    "tools.dbt.desc": "Transformación de datos en el almacén. Ingeniería de software para SQL.",
    "tools.dbt.task": "Objetivo: versionar lógica de negocio y probar métricas.",
    "tools.dbt.sol": "Solución: dbt + CI/CD. Documentación y pruebas generadas automáticamente.",
    "tools.ometa.desc": "Plataforma unificada de Catálogo de Datos y Observabilidad.",
    "tools.ometa.task": "Objetivo: los analistas no saben de dónde proviene la métrica de Ingresos.",
    "tools.ometa.sol": "Solución: OpenMetadata con linaje de datos desde la BD hasta el dashboard.",
    "tools.super.desc": "Plataforma de BI moderna. Dashboards, SQL Lab y almacenamiento en caché.",
    "tools.super.task": "Objetivo: proporcionar reportes interactivos a 100 gerentes.",
    "tools.super.sol": "Solución: Apache Superset sobre ClickHouse con caché en Redis.",
    "tools.meta.desc": "Sistema de BI ligero para analítica de autoservicio sin conocimiento de SQL.",
    "tools.meta.task": "Objetivo: marketing quiere construir embudos por su cuenta.",
    "tools.meta.sol": "Solución: Metabase con modelos de datos preconfigurados.",
    "tools.grafana.desc": "Monitoreo de infraestructura y alertas en tiempo real.",
    "tools.grafana.task": "Objetivo: monitorear la carga del servidor de base de datos.",
    "tools.grafana.sol": "Solución: Grafana + Prometheus para visualización de métricas de CPU/RAM.",
    "tools.ai.desc": "Agentes LLM locales para tareas corporativas sin filtración de datos a APIs públicas.",
    "tools.ai.task": "Objetivo: RRHH pasa 4 horas/día respondiendo preguntas sobre políticas.",
    "tools.ai.sol": "Solución: Open WebUI + Ollama con RAG sobre la base de conocimientos de la empresa.",
    "tools.allm.desc": "Aplicación RAG versátil para trabajar con documentos empresariales.",
    "tools.allm.task": "Objetivo: encontrar rápidamente cláusulas en un contrato de 500 páginas.",
    "tools.allm.sol": "Solución: AnythingLLM con una base de datos vectorial local.",
    "tools.n8n.desc": "Automatización visual de flujos de trabajo. Alternativa self-hosted a Zapier.",
    "tools.n8n.task": "Objetivo: enviar alerta a un mensajero cuando caigan las ventas regionales.",
    "tools.n8n.sol": "Solución: flujo de trabajo n8n (Webhook -> ClickHouse -> Telegram).",
    "tools.py.desc": "Lenguaje universal para ML, scripts y transformación de datos compleja.",
    "tools.py.task": "Objetivo: predecir la fuga de usuarios (Churn).",
    "tools.py.sol": "Solución: modelo scikit-learn, programado en Airflow.",
    "tools.git.desc": "Control de versiones para código analítico (Analytics as Code).",
    "tools.git.task": "Objetivo: los analistas sobrescriben el código de otros en el almacén.",
    "tools.git.sol": "Solución: GitLab/GitHub con revisión de código obligatoria para modelos dbt.",

    "pricing.base.tag": "Básico",
    "pricing.base.name": "Auditoría",
    "pricing.base.price": "$1.5k",
    "pricing.base.desc": "Investigación única de la infraestructura y calidad de datos.",
    "pricing.pop.tag": "Popular",
    "pricing.pop.name": "Implementación",
    "pricing.pop.price": "$4.5k+",
    "pricing.pop.desc": "Dashboards y analítica end-to-end llave en mano.",
    "pricing.cust.tag": "A medida",
    "pricing.cust.name": "Pronóstico",
    "pricing.cust.price": "desde $8k",
    "pricing.cust.desc": "Modelado de ML y analítica predictiva para sistemas complejos.",
    "pricing.choose": "Elegir",

    "contact.kicker": "№ 005 — Contacto",
    "contact.title": "¿LISTO PARA OPTIMIZAR?",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.task": "Tarea",
    "contact.send": "Enviar solicitud",
    "contact.sent": "Enviado ✓",

    "footer.rights": "© 2026 CRESTVALE ANALYTICS. TODOS LOS SISTEMAS NOMINALES.",

    "ui.theme.light": "Claro",
    "ui.theme.dark": "Oscuro",
    "ui.lang": "RU / EN / ES",
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
    if (sl === "ru" || sl === "en" || sl === "es") setLang(sl);
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

  const cycleLang = () => {
    setLang((l) => {
      if (l === "ru") return "en";
      if (l === "en") return "es";
      return "ru";
    });
  };

  return (
    <AppCtx.Provider
      value={{
        lang,
        setLang,
        toggleLang: cycleLang,
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
