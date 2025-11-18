export default function Campus() {
  const features = [
    'Studios & maker spaces',
    'AI & computing labs',
    'Media & recording suites',
    'Libraries & archives',
    'Sports & wellness center',
    'Residences & dining'
  ];
  return (
    <section id="campus" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Campus Life</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYW1wdXMlMjBsaWZlfGVufDB8MHx8fDE3NjM0NDc0MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Campus life" className="h-full w-full object-cover opacity-95" />
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
