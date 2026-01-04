# IMPLEMENTATION_PLAN

Links: [ARCHITECTURE](ARCHITECTURE.md) | [AGENTS](AGENTS.md)

## Goals
- Make the project interview-relevant for CoStar Analytics SWE: analytics UI, data-driven components, TypeScript migration, testing coverage, and measurable performance/a11y improvements.
- Keep Tailwind, migrate to TypeScript incrementally, and avoid large rewrites.

## 3–5 Day Plan (Prioritized)

### Day 1 — Baseline + TypeScript Scaffolding
- Task: Add TypeScript configuration and convert core entry points.
  - Files: `tsconfig.json` (new), `src/index.js` -> `src/index.tsx`, `src/App.js` -> `src/App.tsx`, `src/pages/home/HomePage.jsx` -> `src/pages/home/HomePage.tsx`, `src/components/MainLayout.jsx` -> `src/components/MainLayout.tsx`
  - Acceptance criteria:
    - App builds and runs via CRA with `.tsx` files.
    - No behavior changes; types added only where needed.
- Task: Introduce typed data model and local dataset.
  - Files: `src/types/article.ts` (new), `src/data/articles.ts` (new)
  - Acceptance criteria:
    - `Article` type defined and used in data file.
    - Articles dataset is the single source of truth for cards and analytics.

### Day 2 — Analytics Page (Data-Driven)
- Task: Add routing entry and analytics page shell.
  - Files: `src/App.tsx` (routing entry), `src/pages/analytics/ArticlesAnalyticsPage.tsx` (new)
  - Acceptance criteria:
    - Home page remains `/` and analytics available at `/analytics`.
    - Simple navigation path exists (header link or basic nav).
- Task: Build analytics table + filters UI, wired to dataset.
  - Files: `src/components/ArticleTable.tsx` (new), `src/components/ArticleFilters.tsx` (new), `src/pages/analytics/ArticlesAnalyticsPage.tsx`
  - Acceptance criteria:
    - Filters update the table results (tag/author/date or status).
    - Table renders data from `src/data/articles.ts` only.

### Day 3 — Chart + Home Page Refactor
- Task: Add lightweight chart (no heavy libs unless needed).
  - Files: `src/components/ArticleChart.tsx` (new), `src/pages/analytics/ArticlesAnalyticsPage.tsx`
  - Acceptance criteria:
    - Chart updates based on filtered data.
    - Chart is responsive and readable.
- Task: Convert home cards to data-driven render.
  - Files: `src/pages/home/container/Articles.jsx` -> `src/pages/home/container/Articles.tsx`, `src/components/ArticleCard.jsx` -> `src/components/ArticleCard.tsx`
  - Acceptance criteria:
    - Card content comes from `src/data/articles.ts`.
    - No duplicated hardcoded article text/images.

### Day 4 — Testing + Perf/A11y
- Task: Add Jest/RTL tests for analytics flows.
  - Files: `src/components/ArticleFilters.test.tsx` (new), `src/components/ArticleTable.test.tsx` (new), `src/pages/analytics/ArticlesAnalyticsPage.test.tsx` (new), update `src/App.test.js` -> `src/App.test.tsx`
  - Acceptance criteria:
    - Tests pass for filters, table rendering, and basic navigation.
- Task: Add performance + accessibility improvements.
  - Files: `src/components/Header.tsx`, `src/pages/home/container/Hero.tsx`, `src/pages/home/container/CTA.tsx`, `src/pages/analytics/ArticlesAnalyticsPage.tsx`
  - Acceptance criteria:
    - Lazy-load analytics page or split bundle.
    - Inputs have labels/aria; images have size hints and lazy loading.

### Day 5 — DevEx + Documentation Polish
- Task: Update docs and finalize interview narrative.
  - Files: `README.md`, `ARCHITECTURE.md`, `IMPLEMENTATION_PLAN.md`
  - Acceptance criteria:
    - README includes how to run tests and a short architecture overview.
    - Architecture doc reflects new routing/data layer/testing strategy.

## Progress Tracking
- [ ] Day 1: TS scaffolding + data model
- [ ] Day 2: Analytics page + table/filters
- [ ] Day 3: Chart + home refactor
- [ ] Day 4: Tests + perf/a11y
- [ ] Day 5: DevEx + docs

## Acceptance Criteria Summary
- CRA + Tailwind remain in place.
- TypeScript introduced incrementally with minimal churn.
- Analytics page includes filters, table, and chart driven by local data.
- Jest/RTL coverage for analytics flows.
- Basic performance/a11y improvements included.
