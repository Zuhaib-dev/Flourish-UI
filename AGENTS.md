# Flourish UI AI Contributor Rules

These instructions apply to the whole repository. Read them before changing or creating a component or editing the website catalog. The publishing and SEO checklist is in [`COMPONENT_PUBLISHING_AND_SEO.md`](./COMPONENT_PUBLISHING_AND_SEO.md); read it before adding a component to `apps/web` or changing search-facing content.

## Protect the repository

- Read any nearer `AGENTS.md` in the component or app you are changing. Local instructions are additional and may describe important implementation constraints.
- Preserve unrelated and uncommitted user changes. Inspect `git status` and the relevant diff before editing; never reset or overwrite work to make a change easier.
- Make the requested change in the smallest relevant surface. Do not deploy, publish a release, or change domains as part of a local code or documentation task unless the user explicitly asks.
- Do not make claims about rankings, indexing, component behavior, browser support, performance, legal compliance, or accessibility that you have not verified.

## Product and component direction

Flourish UI is a curated library of expressive React and Next.js components. Its collection includes shader and WebGL visuals, tactile and skeuomorphic interfaces, canvas and generative work, motion and physics, dashboards and editors, and editorial or interactive page sections. The shared character is deliberate craft, vivid material detail, and useful interaction. Do not force every component into one visual style or add motion and effects without a reason.

- Make each component useful for a clear interface need and distinct from existing entries. Review the catalog and relevant source before proposing a near-duplicate.
- Keep the visual result intentional and legible. Use typography, spacing, color, material, motion, and density to support the component's purpose; do not rely on decoration to make an otherwise generic component appear unique.
- Build responsive layouts and real interaction states. Include loading, empty, error, disabled, hover, focus, and touch states when the component needs them.
- Use semantic HTML, accessible names, visible keyboard focus, keyboard-operable controls, adequate contrast, and reduced-motion behavior. Do not use color or animation as the only way to convey state.
- Clean up event listeners, animation frames, observers, audio contexts, and graphics resources. For canvas/WebGL features, provide a useful fallback when the graphics context is unavailable and respect reduced motion and device constraints.
- Keep dependencies explicit and minimal. The website registry installs source into a consumer project; do not rely on files, fonts, assets, aliases, environment variables, or packages that are not included or declared. Check licensing and provenance for external assets.
- Read the component's current README and package setup before changing its standalone structure. Keep install and usage examples aligned with the component's actual exports and props.

## Component website publishing

A component folder or a Git push alone does not publish a component in the website catalog. Follow the website integration checklist in [`COMPONENT_PUBLISHING_AND_SEO.md`](./COMPONENT_PUBLISHING_AND_SEO.md). In particular, keep the metadata catalog, source loader, distributable source, preview route, preview image, visible catalog, structured data, and sitemap behavior consistent.

Use `apps/web/config/components.ts` as the source of truth for which components are in the website catalog and for its component count. Derive counts from `components.length` or `stats.components`; do not type a count into new UI or machine-readable content when it can be derived. Search for and update maintained static catalogs when a release changes their contents.

## Search and indexing rules

- Write titles, descriptions, headings, and structured data for people first. Use the component's real name and user intent naturally; never stuff keywords or add unverified superlatives.
- The website's root layout has a title template. Child page metadata must not repeat the `| Flourish UI` suffix in its `title`; add the brand once only to fields that do not inherit the template, such as explicit Open Graph or social-card titles.
- Keep canonical URLs, Open Graph URLs, sitemap URLs, structured-data URLs, internal links, and the deployed site host aligned. Do not invent a new canonical domain.
- Include only canonical, useful, indexable pages in the sitemap. Exclude preview HTML and machine endpoints that are marked `noindex`. The current sitemap derives component detail URLs and their preview images from the catalog; do not add per-component sitemap literals unless that design changes.
- Do not disallow a URL in `robots.txt` when Google needs to crawl it to see its `noindex` directive. Preview HTML is intentionally `noindex`; its image assets must remain crawlable for image search and sitemap discovery. Registry/API/docs endpoints may be marked `noindex` while staying available to clients.
- Structured data must accurately describe visible page content. Never invent ratings, reviews, pricing, availability, FAQs, or other rich-result eligibility. Keep component-page breadcrumbs and source metadata consistent with the page.
- Google controls whether it indexes a URL, rewrites a title, displays the site name, or shows sitelinks. Describe changes as making pages clearer and more eligible for search; do not promise a result.

## Framework and verification

- `apps/web` uses a specific Next.js version. Before writing Next.js code, read the relevant documentation under `apps/web/node_modules/next/dist/docs/` and check the existing route conventions. Follow the nested `apps/web/AGENTS.md` instructions.
- When a user asks for verification or correctness, use the app's existing typecheck/build commands where feasible and report environmental blockers accurately. Do not add tests unless requested.
- Before finishing, inspect the final diff, confirm all website references for a new slug and title are coherent, and report what changed plus any remaining release or Search Console step.
