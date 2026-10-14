const referenceImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pasted%202026-10-14%20at%2011.28.29%20PM-KR3tEA6wdOD1Bza1BwpBIEDenk6af2.png'

export function Offline404() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e7e6e1]" aria-labelledby="offline-title">
      <h1 id="offline-title" className="sr-only">
        404 — No Internet
      </h1>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 z-10 -translate-x-1/2 font-mono text-[clamp(1.25rem,3vw,2rem)] font-bold tracking-[0.35em] text-black/80"
      >
        404
      </div>
      <img
        src={referenceImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
      />
      <img
        src={referenceImage}
        alt="No Internet page showing people looking at their phones from above"
        className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover object-center portrait:object-cover landscape:h-full landscape:w-auto landscape:max-w-none landscape:object-contain"
      />
    </main>
  )
}

export default Offline404
