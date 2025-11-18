export default function Programs() {
  const programs = [
    { title: 'Design & Arts', desc: 'Interaction design, visual communication, UX, motion.' },
    { title: 'Engineering', desc: 'Computer science, AI, data, embedded systems.' },
    { title: 'Business', desc: 'Entrepreneurship, analytics, finance, marketing.' },
    { title: 'Humanities', desc: 'Psychology, sociology, languages, global studies.' },
    { title: 'Health Sciences', desc: 'Public health, bioinformatics, sports science.' },
    { title: 'Sustainability', desc: 'Energy, climate, circular economy, policy.' },
  ];
  return (
    <section id="programs" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white">Programs</h2>
          <a href="#admissions" className="text-sm text-cyan-300 hover:text-white">View admissions</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/10">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 opacity-80 group-hover:opacity-100" />
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
