# ARCHITECTURE

Links: [IMPLEMENTATION_PLAN](IMPLEMENTATION_PLAN.md) | [AGENTS](AGENTS.md)

## Overview
This project is a Create React App (CRA) frontend using React 18 and Tailwind CSS. It currently renders a single Home page composed of layout components and page sections. The goal is to evolve it into a small, interview-ready analytics app with incremental TypeScript migration, a data-driven analytics page (table + filters + chart), and improved testing/perf/a11y.

## Current Structure

### Entry Points
- `public/index.html` provides the root container.
- `src/index.js` mounts React and renders `App`.
- `src/App.js` renders `HomePage` only.

### Pages
- `src/pages/home/HomePage.jsx` composes `MainLayout` + `Hero` + `Articles` + `CTA`.

### Components
- Shared UI components live in `src/components/`.
  - `Header`, `Footer`, `MainLayout`, `ArticleCard` are present.

### Styles
- Tailwind is configured in `tailwind.config.js` with custom colors and fonts.
- Global styles are in `src/index.css` with Tailwind directives.

## Target Structure (Evolving)

### Routing
- Introduce a dedicated Analytics page at `/analytics`.
- Keep Home page as `/`.
- Routing can be done via React Router or a simple conditional if Router is not added; decision documented in the plan.

### Data Layer
- Move article data into a typed local dataset to drive both Home and Analytics.
- Source of truth: `src/data/articles.ts`.
- Types: `src/types/article.ts` defines `Article`, `Author`, `Tag`, and analytics fields (views, likes, publish date, etc.).

### Folder Contracts
- `src/pages/`
  - Route-level components and page containers.
  - Example: `home/`, `analytics/`.
- `src/components/`
  - Reusable UI components used across pages.
  - Example: cards, tables, filters, charts.
- `src/data/`
  - Local data sources and fixtures.
  - Single source of truth for analytics dataset.
- `src/types/`
  - Shared TypeScript types and interfaces.
- `src/hooks/` (future)
  - Reusable hooks only; no side effects on import.
- `src/services/` (future)
  - API clients and data fetching logic; all network IO isolated here.
- `src/utils/` (future)
  - Pure helper functions with no React dependencies.

### Testing
- Jest + React Testing Library (CRA default) is the baseline.
- Target tests:
  - Analytics page renders with data.
  - Filters update table and chart.
  - Basic nav renders analytics entry.

### Performance
- Lazy-load analytics page via `React.lazy` and `Suspense`.
- Add image size hints and `loading="lazy"` where appropriate.

### Accessibility
- Form inputs have labels or `aria-label`.
- Navigation and buttons have clear focus states.
- Use semantic HTML where possible (nav/section/headers).

## Migration Strategy (Incremental TypeScript)
- Start with entry points and layout components.
- Convert page sections as needed when touched.
- Prefer typing props and data models without rewriting component logic.

## Risks and Constraints
- Keep Tailwind and CRA as-is; avoid major toolchain changes.
- Incremental TypeScript migration only, no full rewrite.
- Analytics feature must be data-driven and testable.

