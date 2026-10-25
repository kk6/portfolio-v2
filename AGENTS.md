# Agent Instructions

## Project

This repository contains the next-generation personal portfolio website for ashiyahiro.

Read `README.md` and `docs/design-brief.md` before making significant design or architecture decisions.

## Primary Goal

Build a distinctive, exceptionally well-crafted portfolio website.

Design quality and the visitor experience take priority over experimentation with frameworks, AI agents, or developer tooling.

## Approved Design Direction

Quiet Editorial, combining:

- A-2: Asymmetric Editorial
- A-3: Dual Practice navigation

The website presents both software engineering and illustration.

Preserve this direction unless the user explicitly approves a change.

## Design Principles

- Prioritize Japanese typography and thoughtful Japanese/Latin font pairing.
- Use precise grids, asymmetric composition, intentional whitespace, and restrained color.
- Favor subtle, purposeful interactions.
- Avoid generic SaaS templates, excessive 3D, decorative clutter, and superficial Japanese aesthetics.
- Evaluate actual browser rendering, not source code alone.
- Test desktop and mobile layouts.
- Consider accessibility and reduced-motion preferences.

## Working Style

1. Understand the current design brief and relevant project files.
2. Identify what is decided and what remains open.
3. Propose meaningful alternatives for subjective design decisions.
4. Explain the reasoning behind important visual choices.
5. Implement the smallest useful prototype.
6. Inspect rendered results and iterate.
7. Record approved decisions in the design brief.

Do not mistake a technically successful build for a successful design.

## Technology

Astro, TypeScript, Tailwind CSS, and Cloudflare are candidates, not immutable requirements.

Choose technology according to the site's needs.

Avoid unnecessary dependencies, abstractions, and infrastructure.

## AI Skills

Evaluate existing skills, including pstack, before creating custom ones.

Potential future skills:

- Design Research
- Art Direction
- Design Critique
- Design Iteration
- Publication QA

Do not build skills merely for the sake of building skills.

## Constraints

- Do not replace the approved design direction without discussion.
- Do not invent portfolio projects, credentials, or personal achievements.
- Do not copy reference websites wholesale.
- Do not treat outdated screenshots as authoritative representations of live websites.
- Do not delete or migrate existing site content without a preservation plan.
- Keep documentation concise and update it when decisions change.

## Current Next Step

Evaluate available design-related Agent Skills and build the first browser-viewable Quiet Editorial prototype.

Start with typography, layout, and Engineering/Illustration navigation. Do not attempt to finish the entire website in one pass.

## Development

- Dev server: `npm run dev` (Astro runs it in the background when an agent starts it; `astro dev stop` stops it).
- Tests: `npm test` (Node's built-in test runner; tests live next to the code as `*.test.ts`).
- Artwork in `src/assets/works/` and `src/assets/commercial-*.jpg` is git-ignored until the user decides which works to publish. The build needs those files locally.
- Astro docs: https://docs.astro.build
