# UX/UI Design System & Web Design Guidelines (`my-portfolio`)

This document is the source of truth for the **`ux-ui-designer`** and **`senior-web-developer`** agents when designing and building pages or components for the portfolio website.

---

## 1. Brand Identity & Design Philosophy

- **Goal:** Present a polished, memorable, high-trust Senior/Full-Stack Software Engineer portfolio that stands out to recruiters, hiring managers, and clients.
- **Aesthetic Direction:** Crafted, editorial-meets-modern-tech aesthetic — clean visual hierarchy, purposeful typography (`Frank Ruhl Libre` for expressive headings paired with a crisp modern sans-serif for body/UI), subtle depth, and responsive micro-interactions (avoiding generic AI-template clutter).
- **Core UX Principles:**
  1. **5-Second Clarity:** Within 5 seconds of landing, a visitor knows *who* you are, *what* you specialize in, and *how* to view your work or contact you.
  2. **Scannable Storytelling:** Clear visual progression from **Hero** → **About & Core Stack** → **Featured Projects / Experience** → **Education & Credentials** → **Contact & Interactive Chat**.
  3. **Accessible by Default:** WCAG 2.2 AA contrast, keyboard navigability, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), and reduced-motion support.

---

## 2. Design Tokens (CSS Custom Properties)

Define and consume these tokens in [`src/styles.scss`](file:///c:/My-Project/my-portfolio/src/styles.scss):

### Color Palette (Semantic Tokens)
```scss
:root {
  /* Surfaces */
  --color-bg-primary: #0f172a;      /* Deep slate navy for hero/dark sections */
  --color-bg-secondary: #1e293b;    /* Elevated card/section surface */
  --color-bg-light: #f8fafc;        /* Clean off-white for high-readability light sections */
  --color-surface-card: #ffffff;

  /* Text */
  --color-text-primary: #0f172a;    /* On light backgrounds (Contrast > 15:1) */
  --color-text-secondary: #475569;  /* Muted body copy (Contrast > 7:1) */
  --color-text-on-dark: #f8fafc;    /* Primary text on dark surfaces */
  --color-text-muted-dark: #94a3b8; /* Secondary text on dark surfaces (Contrast >= 4.5:1) */

  /* Brand & Accents */
  --color-accent-primary: #38bdf8;  /* Sky cyan accent (dark bg) */
  --color-accent-strong: #0284c7;   /* Accessible blue CTA / links on light bg */
  --color-accent-warm: #f59e0b;     /* Highlight badge / callout accent */

  /* Feedback & Borders */
  --color-border-subtle: rgba(148, 163, 184, 0.2);
  --color-focus-ring: #38bdf8;
}
```

### Typography Scale
- **Heading Font:** `'Frank Ruhl Libre', Georgia, serif`
- **Body / UI Font:** `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- **Fluid Type Scale (`clamp()`):**
  - Display / `h1`: `clamp(2.25rem, 4vw + 1rem, 3.75rem)` — line-height `1.15`, weight `700`
  - Section Title / `h2`: `clamp(1.75rem, 2.5vw + 0.75rem, 2.5rem)` — line-height `1.2`, weight `700`
  - Card Title / `h3`: `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)` — line-height `1.3`, weight `600`
  - Body Large: `1.125rem` (`18px`) — line-height `1.65`, max-width `65ch`
  - Body Base: `1rem` (`16px`) — line-height `1.6`
  - Caption / Badge: `0.875rem` (`14px`) — letter-spacing `0.02em`

### Spacing & Layout Grid
- **Base Unit:** `4px` / `8px` spatial scale (`0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`, `6rem`).
- **Section Padding:** `padding-block: clamp(4rem, 8vw, 7rem)`.
- **Container Max-Width:** Bootstrap container (`1140px` / `1320px`) with comfortable horizontal padding (`1.25rem` on mobile, `2rem` on desktop).
- **Border Radius:** `--radius-sm: 0.375rem (6px)`, `--radius-md: 0.75rem (12px)`, `--radius-lg: 1rem (16px)`, `--radius-pill: 9999px`.

---

## 3. Component & Interaction Standards

1. **Navigation (`NavbarComponent`):**
   - Sticky glassmorphism header (`backdrop-filter: blur(12px)`), height `--navbar-height: 80px`.
   - Active section indicator with smooth scroll and keyboard focus ring (`:focus-visible`).
   - Mobile drawer/collapse menu with accessible `aria-expanded` and `aria-controls`.
2. **Hero Section:**
   - Clear value proposition, dynamic role typewriter (`Software Engineer`, `Full Stack Developer`, etc.) with fixed min-height to prevent layout shift (CLS).
   - Primary CTA ("View Projects" / "Contact Me") + Secondary CTA ("Download Resume" / Social links).
3. **Skills & Tech Stack Grid:**
   - Categorized visually (Frontend, Backend, Database & Cloud, DevOps/Tools) rather than an unstructured wall of icons.
   - Every skill icon in `src/assets/images/` must pair with a visible text label.
4. **Experience & Project Cards:**
   - Show **Role / Project Name**, **Impact / Outcome summary**, **Tech Stack tags**, and **Action links** (GitHub / Live Demo).
   - Subtle hover elevation (`transform: translateY(-4px)` + shadow transition) guarded by `@media (prefers-reduced-motion: no-preference)`.
5. **Interactive Chat Widget (`ChatComponent`):**
   - Floating toggle button with `aria-label="Open portfolio assistant chat"`, accessible message log (`role="log"` / `aria-live="polite"`), and keyboard Enter/Escape support.

---

## 4. UX/UI Deliverable Format (for `ux-ui-designer`)

Whenever designing or redesigning a page or component, output:
1. **UX Goal & User Flow:** What problem this section solves for the visitor.
2. **Layout & Visual Hierarchy:** Breakpoint behavior (Mobile `<768px`, Tablet `768–1023px`, Desktop `>=1024px`).
3. **Design Tokens & SCSS Spec:** Exact color, typography, spacing, and animation tokens to apply.
4. **Interactive States & Accessibility:** Default, Hover, Focus-visible, Active, Loading/Empty states, and ARIA attributes.
5. **Handoff Checklist for `senior-web-developer`:** Specific Angular templates/SCSS files to update.
