export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-brand-navy">
            MOMENTUM
          </span>
          <span className="text-xl font-light text-brand-navy">MULTIPLY</span>
        </div>
        <a
          href="#"
          className="rounded-full bg-brand-red px-8 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700"
        >
          Join Multiply
        </a>
      </div>
    </nav>
  );
}
