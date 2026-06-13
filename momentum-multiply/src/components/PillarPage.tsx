import Link from "next/link";

interface PillarPageProps {
  title: string;
  subtitle: string;
}

const allPillars = [
  { name: "EAT", href: "/eat" },
  { name: "SLEEP", href: "/sleep" },
  { name: "MOVE", href: "/move" },
  { name: "BREATHE", href: "/breathe" },
  { name: "CONNECT", href: "/connect" },
];

const sectionNames = ["Articles", "Video", "Podcast series", "Challenges", "Other"];

const contentCards = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  date: "12 June, 2026",
  title: "build better habits and feel your best every day.",
  description:
    "Smarter, healthier eating packed with practical tips, and expert guidance.",
}));

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-[48px] font-bold leading-[1.1]">
              This is your journey. <br />
              Unlock the future you!
            </p>
            <Link
              href="/continue"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-purple px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all hover:bg-brand-purple/80"
            >
              Choose your journey
            </Link>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">About Multiply</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white">What is Multiply?</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">How it works</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Rewards</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Terms and conditions</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Competition rules</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">POPIA compliance</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Terms of use</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Privacy policy</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">PAIA Manual</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Momentum Multiply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function PillarPage({ title, subtitle }: PillarPageProps) {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-brand-navy">MOMENTUM</span>
              <span className="text-xl font-light text-brand-navy">MULTIPLY</span>
            </Link>
            <Link href="/continue" className="text-[15px] font-bold text-brand-navy">
              My journey
            </Link>
          </div>
          <a
            href="#"
            className="rounded-full bg-brand-red px-8 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700"
          >
            Join Multiply
          </a>
        </div>
      </nav>

      <section className="bg-brand-off-white pt-[100px]">
        <div className="mx-auto max-w-[1440px] px-8">
          <header className="py-12">
            <h1 className="text-[40px] font-extrabold uppercase tracking-tight text-brand-navy">
              {title}
            </h1>
            <p className="mt-3 max-w-3xl text-[25px] leading-relaxed text-brand-dark-gray">
              {subtitle}
            </p>
          </header>

          <nav className="flex items-center gap-0 rounded-lg bg-brand-light-gray">
            {allPillars.map((pillar) => (
              <Link
                key={pillar.name}
                href={pillar.href}
                className={`px-8 py-3 text-[25px] font-bold transition-colors ${
                  pillar.name === title
                    ? "text-brand-navy"
                    : "text-brand-dark-gray/40 hover:text-brand-dark-gray"
                }`}
              >
                {pillar.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-16 py-16">
            {sectionNames.map((sectionName) => (
              <div key={sectionName}>
                <h2 className="mb-8 text-[32px] font-bold text-brand-dark-gray/50">
                  {sectionName}
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {contentCards.map((card) => (
                    <div
                      key={card.id}
                      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="relative aspect-[4/3] w-full bg-brand-light-gray">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="h-8 w-8 text-brand-purple/40"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="absolute left-2 top-2 rounded-full bg-brand-purple px-3 py-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                            {card.date}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-brand-dark-gray/50">
                          {card.date}
                        </p>
                        <h3 className="mt-1 text-[15px] font-bold leading-snug text-white">
                          &nbsp;
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-dark-gray/50">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
