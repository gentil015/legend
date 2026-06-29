# Legend Band — Official Website

A premium, mobile-first band website built with React + Vite, Tailwind CSS v4,
Framer Motion, Lucide React icons, and Swiper.js.

## Design concept

The whole site is built around one idea: **live sound**. The signature visual
motif is an animated equalizer/waveform (`EqualizerBars`), reused across the
hero, "About," music player, and contact section — every section ties back
to a band playing live in a room.

- **Palette** — near-black stage background (`#0a0a0b` / `#131113`), warm
  gold (`#c9a24b` → `#f0d58c`) for light and energy, a deep ember red
  (`#8a2332`) used sparingly for "stage light" accents, bone white text.
- **Type** — `Anton` (condensed poster display) for headlines, `Manrope` for
  body copy, `Space Mono` for eyebrows/labels/setlist numbers — a nod to
  ticket stubs and setlists.
- **Layout** — content is framed like a concert program: numbered tracks,
  ticket-stub tour dates, a setlist-style music player.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`)
- Framer Motion (scroll reveals, page-load sequence, micro-interactions)
- Lucide React (icons)
- Swiper.js (album carousel + testimonials)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Reusable UI: Navbar, GlowButton, SectionHeading, EqualizerBars
  sections/     One file per page section (Hero, About, Members, Music, ...)
  hooks/        useLockBodyScroll, useScrollSpy
  utils/        Centralized content/data (data.js) — swap placeholder
                images and copy here
  index.css     Design tokens (@theme), base styles, utilities, keyframes
```

## Content

All copy and placeholder imagery live in `src/utils/data.js`. Placeholder
photos come from `picsum.photos` with stable seeds — swap each `img(...)`
call for real band photography before launch. Replace the `mailto:` address
in `Contact.jsx` and wire the form's `onSubmit` to a real endpoint (Formspree,
a serverless function, etc.) since this is a frontend-only build.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), labelled icon
  buttons, visible focus rings, and a `prefers-reduced-motion` override.
- Images use `loading="lazy"` (except the hero, which is `fetchPriority="high"`).
- Touch targets are ≥44×44px throughout (nav, buttons, gallery tiles).
- Mobile-first Tailwind classes scale up through `sm:` / `lg:` breakpoints;
  a custom `xs:` breakpoint (26rem) smooths the phone → small-tablet jump.
