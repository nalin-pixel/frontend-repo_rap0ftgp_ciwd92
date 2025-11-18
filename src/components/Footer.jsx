export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 py-10 text-center text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Bluecrest University. All rights reserved.</p>
      </div>
    </footer>
  );
}
