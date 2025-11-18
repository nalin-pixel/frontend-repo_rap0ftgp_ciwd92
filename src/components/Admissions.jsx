export default function Admissions() {
  return (
    <section id="admissions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">Admissions</h2>
            <p className="mt-4 text-white/70">
              Join a community of passionate learners. We consider academic merit, portfolio strength, and potential for impact.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>Undergraduate, Graduate, and Doctoral pathways</li>
              <li>Scholarships and need-based aid available</li>
              <li>Rolling deadlines with priority rounds</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#apply" className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white">Start Application</a>
              <a href="#faq" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90">View FAQ</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <div className="grid grid-cols-3 gap-6 text-center text-white/80">
              <div>
                <div className="text-3xl font-bold text-white">94%</div>
                Job placement
              </div>
              <div>
                <div className="text-3xl font-bold text-white">#12</div>
                Design schools
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                Industry partners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
