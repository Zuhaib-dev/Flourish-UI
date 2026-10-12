# Flourish UI shadcn registry

Each component is available as a shadcn registry item at:

```text
https://flourish-ui.vercel.app/r/{component-slug}.json
```

The component detail pages show the exact install command, package dependencies, destination, and an import example for that item.

## Install a component

In a React project, initialize shadcn once if the project does not already have a `components.json` file:

```sh
pnpm dlx shadcn@latest init
```

Then run the component's copied command, for example:

```sh
pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/skiper39.json
```

The CLI downloads the source into `components/flourish/` (resolved from the consumer's `components.json` aliases) and installs the registry item's npm dependencies. Import the installed component into a page using the example on its detail page. Components that need props or media also include an example of the required inputs.

## Optional registry alias

Consumers who prefer short names can add this to their `components.json` after `shadcn init`:

```json
{
  "registries": {
    "@flourish": "https://flourish-ui.vercel.app/r/{name}.json"
  }
}
```

They can then install with `pnpm dlx shadcn@latest add @flourish/skiper39`. The complete catalog is served from `/r/registry.json`.

## Deployment requirement

The install commands use the live HTTPS site at `flourish-ui.vercel.app`. Both `/r/registry.json` and `/r/{slug}.json` must remain publicly accessible for the shadcn CLI to install components.
