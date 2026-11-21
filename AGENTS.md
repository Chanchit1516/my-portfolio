# AGENTS.md — Workspace Rules & Multi-Agent Web Development Guide

This file configures AI coding agents (Antigravity, Claude Code, Cursor, etc.) working on the **`my-portfolio`** web application. It is automatically loaded at the start of every session.

---

## 1. Project Overview & Tech Stack

- **Project:** `my-portfolio` (Personal Developer Portfolio Web Application)
- **Framework:** Angular 14 (`@angular/core ^14.1.0`, `@angular/router ^14.1.0`, `@angular/forms ^14.1.0`, `@angular/animations ^14.1.0`)
- **Language:** TypeScript `~4.7.2`, RxJS `~7.5.0`
- **Styling & UI:** SCSS (`inlineStyleLanguage: "scss"`), Bootstrap `^5.2.0`, Popper.js `^2.11.6`, FontAwesome 6 (`@fortawesome/angular-fontawesome`, `@fortawesome/fontawesome-free`)
- **Typography & Assets:** Custom fonts (`Frank Ruhl Libre` in `src/assets/fonts/`), SVG/WebP/JPG assets in `src/assets/images/`
- **Testing:** Jasmine `~4.2.0` + Karma `~6.4.0`

## 2. Standard Commands

- **Dev Server:** `npm start` (runs `ng serve` on `http://localhost:4200`)
- **Production Build:** `npm run build` (runs `ng build`, outputs to `dist/my-portfolio`)
- **Watch Build:** `npm run watch` (`ng build --watch --configuration development`)
- **Unit Tests:** `npm test` (`ng test`)

## 3. Project Map & Architecture

```text
c:\My-Project\my-portfolio
├── AGENTS.md                        # Always-on project rules, skill routing & agent team guide
├── CONSTRAINTS.md                   # Enforced quality bar (types, build, a11y, performance)
├── docs/
│   └── UX_UI_DESIGN_SYSTEM.md       # Portfolio UX/UI design tokens, layout & component standards
├── .agents/
│   ├── agents/                      # Specialist agent personas (UX/UI, Senior Dev, Auditors)
│   └── skills/                      # 26 production engineering workflow skills
└── src/
    ├── index.html                   # Root HTML shell
    ├── styles.scss                  # Global SCSS variables, resets, and layout utilities
    ├── assets/                      # Fonts (Frank Ruhl Libre) & portfolio images/icons
    └── app/
        ├── app.module.ts            # Root NgModule
        ├── app-routing.module.ts    # Root routing with MainLayoutComponent shell
        ├── models/                  # TypeScript interfaces & data models (e.g., Messages.ts)
        ├── pages/
        │   └── home-page/           # Portfolio landing page (Hero, About, Skills, Experience, Contact)
        ├── shared/
        │   ├── main-layout/         # Page shell (Navbar + RouterOutlet + Chat widget)
        │   ├── navbar/              # Responsive sticky navigation with scroll-spy
        │   └── chat/                # Interactive portfolio chat widget
        └── type-writer/             # Custom Typewriter text animation helper
```

---

## 4. Mandatory Skill Routing (สั่งใช้งานตามความเหมาะสมอัตโนมัติ)

Every request **MUST** be matched against the installed skills in [`.agents/skills/`](file:///c:/My-Project/my-portfolio/.agents/skills). Read the matching `SKILL.md` before executing:

| User Intent / Task Type | Primary Skill(s) to Activate | Supporting Skill(s) |
| :--- | :--- | :--- |
| **Clarify vague requirements / Ideation** | `interview-me`, `idea-refine` | `spec-driven-development` |
| **New feature or page redesign** | `spec-driven-development` → `planning-and-task-breakdown` | `incremental-implementation` |
| **UX/UI Design, Layouts, Components, Styling** | `frontend-ui-engineering` | `accessibility-engineering`, `docs/UX_UI_DESIGN_SYSTEM.md` |
| **Coding & Implementation** | `incremental-implementation`, `test-driven-development` | `source-driven-development` |
| **Bug fix / Build error / Broken UI** | `debugging-and-error-recovery` | `browser-testing-with-devtools` |
| **Refactoring / Cleaning up code** | `code-simplification` | `test-driven-development` |
| **Accessibility check (WCAG 2.2 AA)** | `accessibility-engineering` | `frontend-ui-engineering` |
| **Speed, Bundle size, Core Web Vitals** | `performance-optimization` | `browser-testing-with-devtools` |
| **Security & Dependency hardening** | `security-and-hardening` | `constraint-driven-development` |
| **Code Review & Quality Gate** | `code-review-and-quality`, `doubt-driven-development` | `constraint-driven-development` |
| **Git Commit, PR, Release, Deploy** | `git-workflow-and-versioning`, `shipping-and-launch` | `documentation-and-adrs` |

### Lifecycle Execution Flow
1. **DEFINE** (`spec-driven-development` / `idea-refine`) → 2. **DESIGN** (`ux-ui-designer` + `frontend-ui-engineering`) → 3. **PLAN** (`planning-and-task-breakdown`) → 4. **BUILD** (`senior-web-developer` + `incremental-implementation` + `test-driven-development`) → 5. **VERIFY & REVIEW** (`code-review-and-quality` + `accessibility-engineering` + `performance-optimization`) → 6. **SHIP** (`shipping-and-launch`).

---

## 5. Specialist Agent Team (`ux-ui-designer` & `senior-web-developer`)

All specialist agent personas live in [`.agents/agents/`](file:///c:/My-Project/my-portfolio/.agents/agents) and can also be spawned as subagents via `invoke_subagent`:

| Agent Name | Role | Responsibilities |
| :--- | :--- | :--- |
| **[`ux-ui-designer`](file:///c:/My-Project/my-portfolio/.agents/agents/ux-ui-designer.md)** | Lead UX/UI Designer & Design System Architect | Designs portfolio layout, user flow, visual hierarchy, color/typography tokens, responsive breakpoints, micro-interactions, and WCAG 2.2 AA specs. |
| **[`senior-web-developer`](file:///c:/My-Project/my-portfolio/.agents/agents/senior-web-developer.md)** | Senior Frontend / Angular Web Developer | Implements Angular components, TypeScript logic, modular SCSS/Bootstrap layouts, RxJS state, unit tests, and build verification. |
| **[`accessibility-auditor`](file:///c:/My-Project/my-portfolio/.agents/agents/accessibility-auditor.md)** | Accessibility Engineer | Audits keyboard navigation, screen readers, ARIA, and color contrast (WCAG 2.2 AA). |
| **[`web-performance-auditor`](file:///c:/My-Project/my-portfolio/.agents/agents/web-performance-auditor.md)** | Web Performance Engineer | Audits Core Web Vitals (LCP, CLS, INP), asset optimization, and Angular bundle budgets. |
| **[`code-reviewer`](file:///c:/My-Project/my-portfolio/.agents/agents/code-reviewer.md)** | Senior Staff Code Reviewer | Reviews correctness, readability, architecture, security, and performance before merge. |
| **[`test-engineer`](file:///c:/My-Project/my-portfolio/.agents/agents/test-engineer.md)** | QA & Test Engineer | Designs unit/integration tests and verifies behavioral coverage. |
| **[`security-auditor`](file:///c:/My-Project/my-portfolio/.agents/agents/security-auditor.md)** | Security Engineer | Checks XSS, external link safety (`noopener noreferrer`), CSP, and dependency vulnerabilities. |

### Recommended Multi-Agent Workflow for Web Feature / Redesign
1. **Step 1 — Design (`ux-ui-designer`):** Invoke `ux-ui-designer` to audit current UI or craft the UX/UI blueprint (wireframe structure, design tokens, component states, responsive rules) aligned with [`docs/UX_UI_DESIGN_SYSTEM.md`](file:///c:/My-Project/my-portfolio/docs/UX_UI_DESIGN_SYSTEM.md).
2. **Step 2 — Implement (`senior-web-developer`):** Pass the UX/UI spec to `senior-web-developer` to implement clean Angular/TypeScript/SCSS slices, run `npm run build`, and verify zero errors.
3. **Step 3 — Audit & Polish (`code-reviewer` / `accessibility-auditor` / `web-performance-auditor`):** Run quality checks against [`CONSTRAINTS.md`](file:///c:/My-Project/my-portfolio/CONSTRAINTS.md).

---

## 6. Code & Engineering Conventions

- **Angular Best Practices:**
  - Prefer `@ViewChild` / `@HostListener` / Angular template bindings over raw `document.querySelector` or `document.addEventListener` so listeners clean up properly on component destruction.
  - Keep components focused on presentation; extract reusable data/business logic into typed services or models under `src/app/models/` or `src/app/services/`.
  - Use explicit TypeScript types and interfaces; avoid `any`.
- **Styling & UI:**
  - Follow [`docs/UX_UI_DESIGN_SYSTEM.md`](file:///c:/My-Project/my-portfolio/docs/UX_UI_DESIGN_SYSTEM.md). Use CSS custom properties (`--color-*`, `--space-*`, `--font-*`) in `src/styles.scss` for theme consistency.
  - Combine Bootstrap 5 layout utilities with scoped component SCSS (`*.component.scss`) — avoid deep global overrides or `!important` unless overriding third-party Bootstrap defaults.
  - Ensure all images have explicit `alt` attributes, `width`/`height` or `aspect-ratio` to prevent layout shifts (CLS), and remove global `img { pointer-events: none; }` when interactive image previews are needed.
- **Security & Boundaries:**
  - When opening external social/project links via `window.open(url, '_blank', 'noopener,noreferrer')` or `<a target="_blank" rel="noopener noreferrer">`, always prevent tabnabbing.
  - Never commit secrets, API keys, or `.env` files.
  - Always obey [`CONSTRAINTS.md`](file:///c:/My-Project/my-portfolio/CONSTRAINTS.md).
