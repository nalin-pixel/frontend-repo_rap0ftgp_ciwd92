export default function Alumni() {
  const quotes = [
    {
      name: 'Nadia Khan',
      role: 'Product Designer at Flux',
      text:
        'The university gave me a portfolio and network that opened doors worldwide.',
    },
    {
      name: 'James Li',
      role: 'Data Scientist at Northstar',
      text:
        'Hands-on labs and research opportunities helped me transition into AI.',
    },
  ];
  return (
    <section id="alumni" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white">Alumni Stories</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <blockquote className="text-white/90">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/70">{q.name} · {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
