# Farhan “Hans” Solaiman — Portfolio 2026

Personal portfolio for **Farhan “Hans” Solaiman**, **AI Automation Tech Lead** & full-stack engineer.
A warm, editorial, image-forward site on a paper/cream palette — with a playful interactive 3D hero
and 3D hover effects. (Design language blends Robin Payot's editorial polish with Henry Heffernan's play.)

**[View Live Site](https://farhansolaiman.github.io/farhan-solaiman-developer-portfolio-2026/)**

---

## Tech Stack

- **Vite + React 18 + TypeScript**
- **React Three Fiber** + **drei** + **postprocessing** (Bloom) — the 3D neural-field hero
- **framer-motion** — scroll reveals & headline motion
- Custom CSS design system (`src/index.css` tokens + `src/styles/sections.css`)
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono

## Features

- **Playful 3D hero** — a soft, warm-lit distorting "blob" with orbiting accent shapes, floating on the cream and parallaxing toward the cursor (WebGL, grounded with a contact shadow).
- **Generative imagery** — every project card gets a unique, on-brand warm gradient cover generated deterministically from a seed (no external assets); the About portrait is matted over a generative backdrop.
- **Editorial type** — Fraunces serif display + Inter/JetBrains Mono, on a warm paper/cream palette.
- **3D tilt cards** — pointer-tracked perspective + glare, reused across Projects / Services.
- **Custom cursor** — trailing ring + dot (blend-mode so it reads on paper and imagery alike).
- **Accessibility & performance** — full `prefers-reduced-motion` path (Three.js is never even downloaded), mobile fallbacks, code-split 3D chunk, capped DPR.

## Project Structure

```text
├── index.html
├── vite.config.ts
├── public/                     # résumé PDF, portrait
├── src/
│   ├── main.tsx / App.tsx
│   ├── index.css               # design tokens + base
│   ├── data/content.ts         # ALL copy lives here — edit this
│   ├── hooks/useMediaQuery.ts
│   ├── scenes/                 # HeroScene (blob), HeroCanvas (lazy)
│   ├── components/             # Hero, Nav, TiltCard, GenerativeCover, Cursor, sections…
│   └── styles/sections.css
├── .github/workflows/deploy.yml
└── legacy/                     # previous vanilla site (kept for reference)
```

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build → dist/
npm run preview  # preview the production build
```

## Editing content

All copy (headline, projects, experience, skills, links) lives in **`src/data/content.ts`**. No component edits needed for text changes.

## Deployment

Hosted on **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`.
`vite.config.ts` sets the production `base` to `/farhan-solaiman-developer-portfolio-2026/`.
> In the repo settings, set **Pages → Build and deployment → Source: GitHub Actions**.

## Contact

- **LinkedIn**: [linkedin.com/in/hanngbayan](https://linkedin.com/in/hanngbayan)
- **GitHub**: [github.com/FarhanSolaiman](https://github.com/FarhanSolaiman)
- **Email**: <farhant.solaiman@gmail.com>
