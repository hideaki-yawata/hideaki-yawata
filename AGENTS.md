# AGENTS.md

Coding conventions and rules for this project. Coding agents (Cursor, Claude Code, etc.) should follow this file.

Write new comments and documentation in English.

## Project overview

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Headless CMS: microCMS
- Deploy target: Vercel

## Directory layout

- `app/` — Pages and routing (App Router)
- `components/` — Reusable UI components
- `lib/` — CMS fetch logic and utilities
- `types/` — TypeScript type definitions

## Coding rules

- Use function components with TypeScript (no class components)
- Style with Tailwind CSS utility classes only; do not use CSS Modules or styled-components
- Use the theme colors below (see `@theme` in global CSS):
  - Background: `#F7F7F5`
  - Sub-background: `#E8E7E2`
  - Text: `#292A2B`
  - Accent: `#48607A`
  - Sub-accent: `#48607A` at 50% / 25% opacity (`sub-accent-50`, `sub-accent-25`)
  - Overlay: `#292A2B` at 25% / 50% / 75% opacity
  - Category (work tags, etc.): `#48607A` / `#292A2B` (`category-1`, `category-2`)
- Always use `next/image` `<Image>` for images (no raw `<img>` tags)
- Prefer Server Components for data fetching; add `"use client"` only when needed
- Centralize microCMS fetch logic in `lib/microcms.ts`

## Naming

- Component files: PascalCase (e.g. `WorkCard.tsx`)
- Functions and variables: camelCase
- Types live under `types/`; do not use an `I` prefix on interface names (e.g. `PhotoCategory`)

## Do not

- Use the legacy Pages Router (`pages/` directory)
- Use inline styles (`style={{}}`) except when unavoidable
- Hard-code API keys or secrets (use `.env.local`)
