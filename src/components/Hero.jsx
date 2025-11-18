export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rotate-6 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Applications for Fall 2025 are now open
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Shaping tomorrow's leaders in design, technology, and research
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70">
              A world-class university where creativity meets impact. Explore flexible programs, interdisciplinary research, and a campus built for the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#admissions" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(56,189,248,0.25)] hover:shadow-[0_10px_35px_rgba(56,189,248,0.35)] transition-shadow">Apply Now</a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:text-white">
                Explore Programs
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1470&auto=format&fit=crop" alt="Campus" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
                250+ student clubs
              </div>
              <div className="absolute -top-6 -right-6 hidden md:block rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
                94% placement
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
