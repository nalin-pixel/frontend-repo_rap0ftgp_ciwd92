export default function StudentLife() {
  const items = [
    'Clubs & societies',
    'Hackathons & showcases',
    'Study abroad & exchange',
    'Community outreach'
  ];
  return (
    <section id="student-life" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Student Life</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkZW50c3xlbnwwfDB8fHwxNzYzMzkwMTg0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Students" className="h-full w-full object-cover opacity-95" />
            </div>
          </div>
          <ul className="space-y-4">
            {items.map((i) => (
              <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
