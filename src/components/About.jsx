export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">About the University</h2>
            <p className="mt-4 text-white/70">
              We are a forward-thinking institution dedicated to academic excellence, cutting-edge research, and an inclusive community. Our programs are designed for real-world impact, empowering students to lead in a rapidly changing world.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
                30,000+ Alumni
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
                120+ Global Partners
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
                Top 1% Research Impact
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
                50+ Programs
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <div className="aspect-video overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZWN0dXJlJTIwaGFsbHxlbnwwfDB8fHwxNzYzNDQ3NDM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lecture hall" className="h-full w-full object-cover opacity-95" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
