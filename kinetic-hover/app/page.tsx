import { KineticHover, HoverItem } from '@/components/kinetic-hover';

const projects: HoverItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'A quieter kind of loud',
    category: 'Editorial / 2024',
    description: 'A visual identity for a new generation of independent publishing.',
    image: '/preview-editorial.png',
    color: '#c8dcff',
  },
  {
    id: 'proj-2',
    number: '02',
    title: 'Objects with intent',
    category: 'Art direction / 2023',
    description: 'Still life studies exploring the tension between utility and desire.',
    image: '/preview-objects.png',
    color: '#f5d7a4',
  },
  {
    id: 'proj-3',
    number: '03',
    title: 'Between the lines',
    category: 'Architecture / 2023',
    description: 'A photographic essay on the geometry of everyday movement.',
    image: '/preview-architecture.png',
    color: '#d7d0c8',
  },
  {
    id: 'proj-4',
    number: '04',
    title: 'The common thread',
    category: 'Campaign / 2022',
    description: 'A campaign about the small rituals that bring us together.',
    image: '/preview-editorial.png',
    color: '#d8e8d1',
  },
];

export default function Page() {
  return (
    <main className="max-w-[1440px] mx-auto px-[5.5vw] py-8 pb-12 bg-[#f4f3f0] text-[#171717] font-sans selection:bg-black/10">
      <header className="grid grid-cols-2 md:grid-cols-3 items-start border-t border-[#171717] pt-4 text-[11px] tracking-[0.03em] leading-[1.3]">
        <a className="text-[17px] font-bold tracking-[-0.06em]" href="#top" aria-label="Northstar home">
          northstar<span className="text-[8px] align-top ml-[2px]">®</span>
        </a>
        <p className="hidden md:block text-[#777671] m-0">Independent creative practice<br />Kashmir / Everywhere</p>
        <a className="justify-self-end border-b border-[#171717] pb-[2px] hover:text-[#777671] hover:border-[#777671] transition-colors" href="mailto:zuhaibrashid01@gmail.com">
          Get in touch <span aria-hidden="true" className="ml-2">↗</span>
        </a>
      </header>

      <section className="mt-[15vh] mb-[12vh] md:mb-[15vh]" id="top">
        <p className="text-[#777671] text-[10px] tracking-[0.06em] uppercase mb-4">Selected work, 2022—24</p>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-0">
          <h1 className="text-[clamp(56px,9.4vw,136px)] tracking-[-0.075em] leading-[0.85] font-medium m-0">
            Ideas made<br /><em className="font-serif font-normal tracking-[-0.105em]">visible.</em>
          </h1>
          <p className="max-w-[230px] md:max-w-[205px] text-[#777671] text-[13px] leading-[1.35] m-0">
            Northstar is a small creative studio for brands, people, and places with something to say.
          </p>
        </div>
      </section>

      <KineticHover items={projects} />

      <footer className="flex flex-wrap md:flex-nowrap justify-between gap-5 text-[#777671] text-[10px] uppercase tracking-[0.06em] mt-[15vh] pt-4 border-t border-[#171717]">
        <span>© Northstar Studio</span>
        <span className="order-3 md:order-none w-full md:w-auto">Available for select projects</span>
        <a href="mailto:zuhaibrashid01@gmail.com" className="text-[#171717] hover:text-[#777671] transition-colors">zuhaibrashid01@gmail.com</a>
      </footer>
    </main>
  );
}
