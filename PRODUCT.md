# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (user's choice). TypeScript is a candidate. Tailwind CSS, Cloudflare Workers hosting, GitHub Actions, and Playwright are candidates, not decisions.

## Users

- **Illustration clients**: companies or individuals considering a commercial illustration commission. They judge style, range, and reliability from the work.
- **Fans of the work**: people who found あしやひろ through doujin events, pixiv, or social media and want to see more.
- **Fellow engineers**: developers who come to read technical writing or look at OSS and projects.

Recruiters and hiring managers are not a primary audience.

## Product Purpose

The personal portfolio of あしやひろ (ashiyahiro), a web application developer and illustrator. It presents both practices on one site.

Success means visitors spend time with the work and then follow ongoing activity on social media or pixiv. Commercial commissions are accepted, but inquiries are not the primary success measure.

## Positioning

One person works in two practices: software engineering and illustration. The site keeps the two clearly separate with their own entrances, yet presents them as one person's work. A site for only one of the practices cannot make this claim.

## Operating Context

- Visitors arrive from pixiv, X (Twitter), Instagram, GitHub, and doujin events.
- The current site, `ashiyahiro.art` (Next.js 10 / microCMS / Vercel), stays live until this site replaces it. Migration must preserve existing content, set URL redirects, and check the SEO impact.
- The first-choice new domain is `ashiyahiro.com`, with Cloudflare Registrar as the registrar candidate.

## Capabilities and Constraints

- Sections planned so far: Illustration, Engineering (technical writing, OSS, development projects), About, and Contact. The final navigation names and page structure are undecided.
- **Undecided:** site language (Japanese-first, bilingual, or multilingual), final hosting, and the content source.

## Brand Commitments

- Name: あしやひろ / ashiyahiro. Headline on the current site: "Web Application Developer / Illustrator".
- The visual direction is approved and binding: **Quiet Editorial** (A-2 Asymmetric Editorial + A-3 Dual Practice). See `docs/design-brief.md`. Change it only with the user's approval.

## Evidence on Hand

From the current site `ashiyahiro.art`, which the user approved for reuse:

- **Profile:** born in Ehime, lives in Tokyo. Works in web development at a company in Tokyo, mainly Python/Django on the server side. Also active as an illustrator, mostly in doujin circles, and open to commercial commissions. Draws mainly original work, especially high-school girls. Exhibits at doujin events as an independent circle. Hobby: guitar.
- **Awards:** two pixiv contest prizes under the "年下彼女" theme (pixiv Summer Girls Collection and pixiv Winter Girls Collection).
- **Commercial work:** enclosure illustrations for the Animals Pedal Major Overdrive, in two designs ("ボブカット" and "Alice").
- **Illustrations:** 16 works listed at `/illustration`, including 雪化粧, 横顔, ポニテを結う, アンニュイな朝, and the cover of the C94 book "Schoolgirlish Graffiti". Most are portrait-format. The image files have not been retrieved yet.
- **Links:** X https://twitter.com/kk6, pixiv https://pixiv.me/ashiyahiro, GitHub https://github.com/kk6, Instagram https://instagram.com/__kk6__.

**Absent, do not fabricate:** a list of engineering projects, OSS highlights, articles, client testimonials, or any metrics.

## Product Principles

1. The work leads. Illustrations and engineering output come before any claim about them.
2. Two practices, one person. Each practice keeps its own entrance and character, and the whole site stays coherent.
3. Craft is the message. Every detail of the site shows the same care as the work it presents.
4. Invite people to keep following the work, not to make a one-time conversion.

## Accessibility & Inclusion

- Respect `prefers-reduced-motion`.
- Check both desktop and mobile layouts.
- Japanese text must render with high quality.
