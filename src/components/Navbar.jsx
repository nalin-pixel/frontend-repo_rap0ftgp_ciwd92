import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.35)]" />
              <span className="text-lg font-semibold tracking-tight text-white">Bluecrest University</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#programs" className="hover:text-white">Programs</a>
              <a href="#admissions" className="hover:text-white">Admissions</a>
              <a href="#campus" className="hover:text-white">Campus</a>
              <a href="#research" className="hover:text-white">Research</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white/80 hover:text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
