import { BloomSelect } from '@/components/bloom-select';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fffdf8] flex items-center justify-center p-8 sm:p-20 overflow-hidden font-serif text-[#201f1d]">
      <div className="w-full max-w-2xl relative z-10">
        <BloomSelect className="p-4 sm:p-12 rounded-3xl selection:bg-[#d8f56a]/40 transition-colors">
          <p className="text-[#77736b] font-sans text-xs uppercase tracking-[0.18em] mb-8 font-medium">
            Flourish UI Components
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[0.98] mb-10 max-w-xl text-balance">
            Select any of this and watch it flower.
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-6 max-w-lg text-[#3d3b37]">
            There are tiny gardens hiding in ordinary words. Drag across a sentence and let a little color find its way to the surface.
          </p>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8 max-w-lg text-[#3d3b37]">
            Nothing here needs to be hurried. Read slowly, choose a phrase, and notice how the page answers back. A thought can be a seed; attention is the water.
          </p>
          <p className="inline-block mt-4 bg-[#d8f56a] px-3 py-1 rounded-sm text-lg font-medium shadow-sm border border-[#c4e349]">
            Try selecting this line.
          </p>
        </BloomSelect>
      </div>
    </main>
  );
}
