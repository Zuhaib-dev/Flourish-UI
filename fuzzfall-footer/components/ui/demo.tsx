"use client"

import FuzzfallFooter from "./fuzzfall-footer"

export default function FuzzfallFooterDemo() {
  return (
    <main className="min-h-svh w-full bg-background text-foreground">
      <section className="grid min-h-[80svh] place-content-center justify-items-center gap-3 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Mosslight / Studio</p>
        <h1 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">Small creatures. Big footer energy.</h1>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">Scroll down to meet the fuzzy residents. Drag one around or tap it to make it hop.</p>
        <a className="mt-3 rounded-full border border-border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="#footer">
          Meet the critters
        </a>
      </section>
      <div id="footer">
        <FuzzfallFooter
          wordmark="Mosslight"
          name="Mosslight"
          tagline="Small soft creatures, big happy energy."
          copyright="© 2026 Mosslight"
        />
      </div>
    </main>
  )
}
