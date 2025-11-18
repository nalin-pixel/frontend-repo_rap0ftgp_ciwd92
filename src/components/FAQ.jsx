export default function FAQ() {
  const faqs = [
    { q: 'What are the application deadlines?', a: 'We offer rolling admissions with priority rounds in Nov, Jan, and Mar.' },
    { q: 'Do you offer scholarships?', a: 'Yes. Merit- and need-based aid are available for qualified applicants.' },
    { q: 'Can I study abroad?', a: 'Absolutely. We partner with 120+ institutions globally.' },
  ];
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <summary className="cursor-pointer list-none font-semibold text-white">{f.q}</summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
