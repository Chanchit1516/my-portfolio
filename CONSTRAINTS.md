# CONSTRAINTS.md — Quality Bar & Engineering Contract

Last reviewed: 2026-11-21

This file defines the non-negotiable quality standards for **`my-portfolio`**. Every agent (`ux-ui-designer`, `senior-web-developer`, and main agent) must verify changes against these constraints before marking a task complete.

---

## 1. Floor Constraints (Always Enforced)

- **No suppression comments:** Do not introduce `@ts-ignore`, `@ts-expect-error`, or `eslint-disable` to silence errors.
- **No unimplemented stubs:** No `TODO` placeholders left in rendered UI, empty `catch {}` blocks, or dead buttons/links.
- **No skipped or deleted tests:** Do not change `it(...)` to `xit(...)` or `describe(...)` to `xdescribe(...)` to make tests pass.
- **No secrets in source:** Never hardcode private API keys, tokens, or credentials in `src/environments/` or components.
- **No weakening the bar:** Do not edit `CONSTRAINTS.md` or `angular.json` budgets upward just to pass a failing build.

---

## 2. Quantitative Quality Gates

| Dimension | Rule / Target | Checked By | When to Run |
| :--- | :--- | :--- | :--- |
| **Build & Types** | Zero TypeScript or Angular template compilation errors | `npm run build` | Every code change |
| **Bundle Budget** | Initial bundle `< 4 MB` (target `< 1 MB`), Component SCSS `< 2 MB` | `npm run build` (`angular.json` budgets) | Before completion / PR |
| **Accessibility (WCAG 2.2 AA)** | Text contrast `>= 4.5:1` (large text `>= 3:1`), visible `:focus-visible`, full keyboard navigation, valid `alt` text & heading hierarchy (`h1` → `h2` → `h3`) | `accessibility-engineering` skill / `accessibility-auditor` | Every UI/UX change |
| **Responsive Layout** | Zero horizontal overflow (`overflow-x`) across `320px` (Mobile), `768px` (Tablet), `1024px` (Laptop), `1440px+` (Desktop) | `frontend-ui-engineering` / DevTools viewport check | Every UI/UX change |
| **Core Web Vitals** | `LCP < 2.5s`, `CLS < 0.1` (explicit image dimensions), `INP < 200ms` | `performance-optimization` / `web-performance-auditor` | Feature completion |
| **External Link Safety** | All external links (`target="_blank"` / `window.open`) include `noopener,noreferrer` | Code review (`security-auditor`) | Every edit touching links |

---

## 3. Architectural & UX/UI Boundaries

1. **Design System First:** Any visual redesign or new component must use semantic design tokens defined in [`docs/UX_UI_DESIGN_SYSTEM.md`](file:///c:/My-Project/my-portfolio/docs/UX_UI_DESIGN_SYSTEM.md) and `src/styles.scss`.
2. **Angular Lifecycle Safety:** Any scroll, resize, or timer event registered in a component (`ngAfterViewInit` / `ngOnInit`) must be cleaned up in `ngOnDestroy` (or use `@HostListener`) to prevent memory leaks.
3. **Motion Accessibility:** All animations (typewriter, scroll reveals, hover transitions) must respect `@media (prefers-reduced-motion: reduce)`.
