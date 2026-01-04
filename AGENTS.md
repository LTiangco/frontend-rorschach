# AGENTS

Links: [IMPLEMENTATION_PLAN](IMPLEMENTATION_PLAN.md) | [ARCHITECTURE](ARCHITECTURE.md)

## Workflow Rules (Must Follow)

### Before Any Coding Task
- Read `IMPLEMENTATION_PLAN.md` and `ARCHITECTURE.md`.
- Summarize the relevant constraints and priorities before writing code.

### For Every Change Request
- Propose a small plan first (2–5 steps).
- List files to touch.
- Define what “done” looks like.

### After Implementing
- Update progress in `IMPLEMENTATION_PLAN.md`.
- Update `ARCHITECTURE.md` if structure or contracts changed.

### In Every Response
- Include a “Docs alignment” section pointing to relevant headings in `IMPLEMENTATION_PLAN.md` and `ARCHITECTURE.md`.

### Validation Requirements
- Run available npm scripts to validate changes (at least `npm test`; include `npm run build` and lint if available).
- Report results or failures before asking for review.

## Stable Headings for Referencing
- In `IMPLEMENTATION_PLAN.md`: “Goals”, “3–5 Day Plan (Prioritized)”, “Progress Tracking”, “Acceptance Criteria Summary”.
- In `ARCHITECTURE.md`: “Entry Points”, “Routing”, “Data Layer”, “Folder Contracts”, “Testing”, “Performance”, “Accessibility”, “Migration Strategy (Incremental TypeScript)”, “Risks and Constraints”.

