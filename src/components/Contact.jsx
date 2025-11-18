export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            <p className="mt-4 text-white/70">Have questions? Our admissions team is here to help.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <p>Email: admissions@bluecrest.edu</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 100 University Ave, Innovation City</p>
            </div>
          </div>
          <form className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="First name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none" />
              <input placeholder="Last name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none" />
            </div>
            <input placeholder="Email" className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none" />
            <textarea placeholder="How can we help?" rows={4} className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none" />
            <button type="button" className="mt-6 w-full rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
