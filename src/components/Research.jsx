export default function Research() {
  const items = [
    { title: 'Human-centered AI', text: 'Ethical algorithms, accessible interfaces.' },
    { title: 'Sustainable cities', text: 'Urban design, mobility, green tech.' },
    { title: 'Health innovation', text: 'Wearables, digital therapeutics.' },
  ];
  return (
    <section id="research" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white">Research</h2>
          <a href="#labs" className="text-sm text-cyan-300 hover:text-white">Explore labs</a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{i.title}</h3>
              <p className="mt-2">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
