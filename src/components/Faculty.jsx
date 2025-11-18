export default function Faculty() {
  const people = [
    { name: 'Dr. Amina Patel', role: 'Dean, Design' },
    { name: 'Prof. Luca Chen', role: 'AI & HCI' },
    { name: 'Dr. Sara Ibrahim', role: 'Sustainability' },
  ];
  return (
    <section id="faculty" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Faculty</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-white/70">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
