# Component creation, website publishing, and SEO checklist

This handbook defines how an AI contributor should take a Flourish UI component from a standalone project to a complete entry in the website library. Read the component's own `AGENTS.md` first when present, along with the root [`AGENTS.md`](./AGENTS.md).

## What the existing collection is

The visual audit reviewed all 52 entries currently in `apps/web/config/components.ts` and their catalog preview images. The library spans six maintained groups:

- **Shaders & WebGL:** procedural shader effects, liquid and foil treatments, interactive visual fields.
- **Skeuomorphic & 3D:** tactile objects and dashboards with dimensional materials and physical interaction.
- **Canvas & Generative:** particle, raster, crowd, ASCII, and storybook/canvas experiences.
- **Motion & Physics:** responsive typography, drag systems, spring motion, and kinetic interactions.
- **Dashboards & Editors:** workflow canvases, calendars, planning tools, comparison views, and analytics.
- **Interactive Surfaces:** onboarding, authentication, editorial sections, footers, dialogs, and error states.

The common thread is expressive craft with clear interaction and a recognizable purpose. Treat these groups as useful context, not as a requirement to imitate an existing component. Review both the catalog descriptions and the actual source of similar entries before designing a new one.

### Current inventory distinction

The website registry now has **52 entries**, including the standalone `liquid-glass-navbar` and `product-rail-gallery` projects. A standalone project is considered website-published only after it is present in the catalog and has matching source, preview, image, metadata, and generated endpoint support.

## A. Build a component that fits the library

1. **Inspect before designing.** Read the local project instructions, README, package manifest, current implementation, and relevant catalog neighbors. Identify overlap and the user need this component serves.
2. **Keep it coherent as a standalone project.** Follow the existing component folder's framework, scripts, source layout, styling, and dependency conventions. Do not assume every older project uses identical paths; the library contains both `src/components/ui` and `components/ui`-style layouts.
3. **Make the component portable.** Include or document all code and dependencies required to use it. Avoid app-specific aliases and undeclared dependencies. Keep demo-only content out of the reusable source where possible.
4. **Implement real states and accessibility.** Ensure the design responds to mobile and larger screens, keyboard and touch input, reduced motion, focus, and unavailable browser APIs. Add meaningful labels and semantic structure.
5. **Protect runtime quality.** Clean up subscriptions and browser resources; guard WebGL, canvas, media, and browser-only APIs; provide fallbacks for visual effects. Avoid unnecessarily large assets, blocking scripts, and perpetual animation when offscreen or reduced motion is preferred.
6. **Document actual usage.** The component README should explain what it does, how to run the demo, the install/use path, props, dependencies, limitations, and asset/license details. Examples must match the public source and current package names.

## B. Publish it to the website registry

The website uses a hand-written catalog plus explicit source and preview integrations. Complete every applicable step for the same canonical slug.

1. **Choose and reserve a slug.** Use lowercase kebab-case, unique in the catalog and matching the project directory. Avoid renaming a published slug casually: it is part of the public URL, CLI endpoint, internal links, and search index. If a published URL must change, retain a redirect and canonicalize the destination.
2. **Add the catalog entry** to `apps/web/config/components.ts`: `slug`, human-readable `title`, one existing `category`, factual `description`, useful `tags`, visual `tone`, exact runtime `dependencies`, and a working `previewImage` path. Keep descriptions specific to the interaction and use case; remove unsupported claims such as “highly converting,” “production ready,” or “legally compliant.”
3. **Make distributable source available.** Add `apps/web/config/component-sources/<slug>.ts` in the format used by neighboring source modules and add its lazy import to `apps/web/config/component-sources.ts`. Confirm this source is complete, valid, installable, and consistent with the declared dependencies. The catalog item and source loader must use the exact same slug.
4. **Create a live preview route** at `apps/web/app/previews/<slug>/page.tsx`. Import the standalone demo or build a focused composition using the published component. Make it render independently at the site's preview size. Preserve the `/previews` layout's `noindex` behavior; preview routes are for interactive demos, not search landing pages.
5. **Add a representative preview image** under `apps/web/public/previews/` and point `previewImage` at its exact public URL. Use a clear crop and useful dimensions/format. Verify the image actually loads; a path in metadata is not proof that the asset exists.
6. **Wire any intended category.** Prefer one of the six current categories. If a genuinely new category is required, update the category list and description in `apps/web/config/components.ts`, category navigation and copy, category validation/generation in `apps/web/app/categories/[slug]/page.tsx`, and any category summaries. Verify its slug is unique and valid.
7. **Refresh maintained content surfaces.** Search the repository for the component slug, title, old count, and any copied description. Update the root `README.md` component directory and count, `apps/web/README.md` where it contains maintained counts or catalog details, and the static machine-readable catalog files such as `apps/web/public/llms-full.txt` and `apps/web/public/okf/component-catalog.md` if they enumerate components. Keep `apps/web/public/llms.txt`, changelog, registry docs, and OpenAPI examples accurate where affected. Prefer derived counts; never change historical release notes merely to make an old count current.
8. **Check the live surfaces.** Confirm the entry appears in the browse/search catalog and category, the detail page resolves, source and registry endpoints return the intended source/metadata, the preview route works, and the image is accessible. Check for missing assets, duplicate slugs, broken links, and stale count strings.

### Derived integrations: usually do not edit by hand

- `apps/web/app/components/[slug]/page.tsx` generates detail-page static params and metadata from `components`; it renders the catalog title/description, related entries, breadcrumb, canonical URL, Open Graph image, and `SoftwareSourceCode` JSON-LD. Keep the catalog fields accurate and verify the generated page instead of adding one-off metadata elsewhere.
- `apps/web/app/sitemap.ts` maps every catalog entry to `/components/<slug>` and its preview image. A new catalog entry should flow into the sitemap automatically. The sitemap also maps the current category list. Do not add a preview HTML URL: it is intentionally `noindex`.
- Registry catalog and REST routes derive their entries from `components`; source retrieval depends on the explicit source loader. Do not fork a second manually maintained registry list.
- The live site count should come from `components.length` or `stats.components`. The middleware's Markdown content already derives its count from `stats`; do not replace it with a manually typed numeral.

## C. SEO and indexing requirements

### Search-facing page content

- **Title:** use a concise, unique title that names the component and what it is, commonly `<Component title> React Component`. The root metadata template appends `| Flourish UI`; do not include the suffix again in the child `title` or the final title will be duplicated. Explicit Open Graph/Twitter titles do not inherit that template, so include the brand once there where helpful.
- **Description:** write a compact, accurate summary that names the component type and distinctive behavior. Google may choose a different snippet. Do not treat a fixed character count as a ranking rule.
- **Heading and body:** keep one clear visible H1 matching the component's human title and a useful first paragraph. The detail page renders the description directly. Do not hide text solely for crawlers.
- **Images:** use the actual preview asset for the detail page, structured data, social metadata, and sitemap image entry. Keep it crawlable. Supply meaningful alt text in visible image contexts.
- **Canonical and structured data:** verify the component page's canonical matches its public detail URL and `WebPage`/`SoftwareSourceCode`/`BreadcrumbList` data matches visible content and the source repository. Use the site-wide canonical host as configured. Never add fake review/rating/offer values or imply rich result features are guaranteed.
- **Internal links:** detail pages are linked from the main catalog and their category; maintain the clear hierarchy and related component links. A published component should not be orphaned.

### Crawl directives and sitemap

- The current sitemap is intentionally limited to canonical, user-facing HTML pages: site sections, category pages, and component detail pages. Component image URLs are attached to their detail entries.
- `/previews/<slug>` HTML is `noindex`; keep it crawlable so crawlers can read the directive. Preview image files in the same path must stay crawlable. Do not reintroduce a broad `robots.txt` block or broad `X-Robots-Tag: noindex` header on `/previews/*` because it would also affect the image assets and prevent Google from seeing page-level directives.
- API/registry/agent-document endpoints are not search landing pages. Keep the current `noindex` behavior in `apps/web/next.config.mjs` (and any route-specific headers) while allowing crawling where the directive must be read and preserving CLI/API access. Do not block them in `robots.txt` as a substitute for `noindex`.
- Include a new **indexable component detail URL** through the catalog-driven sitemap; exclude preview HTML and any canonical redirect, duplicate, or `noindex` URL. If sitemap generation is changed, inspect the resulting XML and image URLs.
- If URL host/domain configuration changes, update canonicals, metadata base, structured-data IDs/URLs, sitemap, robots sitemap/host, feeds, and install links as one planned migration. Do not independently switch one SEO field to a guessed domain.

## D. Release completion checklist

Before considering a component addition complete:

- [ ] Local component instructions and relevant existing components were reviewed.
- [ ] Component is distinct, responsive, accessible, performant, and has accurate README/install guidance.
- [ ] Catalog entry, distributable source module, source-loader mapping, preview page, preview image, and dependencies agree on one slug.
- [ ] Title, visible H1, description, canonical, social metadata, and JSON-LD are accurate and not duplicated.
- [ ] The component is reachable from the directory and correct category; sitemap includes the detail URL and preview image but not the noindex preview page.
- [ ] README and static catalog feeds/manifests that enumerate components are updated; count values are derived where possible.
- [ ] Search for the slug/title in all repository content; no stale or broken references remain.
- [ ] Run the existing web typecheck/build when appropriate and report any blocker. Do not add tests unless requested.
- [ ] After deployment, submit/inspect the sitemap and request recrawling in Search Console if the user has access. Local code changes alone do not cause Google to recrawl or guarantee indexation/sitelinks.

## E. Adding a component to the sitemap: exact rule

Normally no manual sitemap edit is required. Add the public component to `apps/web/config/components.ts`; `apps/web/app/sitemap.ts` derives `/components/<slug>` and the configured preview image from that array. Verify the deployed sitemap after publication. Only edit sitemap logic if a new page class or indexing policy is intentionally introduced, and then document why it should be indexable.
