import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    name: "EAT",
    title: "EAT",
    description:
      "Life makes unhealthy choices easier. I start the day well but then life gets busy. The food cravings are real... I'll start on Monday. You know nutrition matters, but real life makes it hard to stay consistent.",
    cta: "START NOW",
    image: "/images/figma/continue-eat.jpg",
    href: "/eat",
  },
  {
    name: "MOVE",
    title: "MOVE",
    description:
      "I don't have time to exercise. Work comes first. Family comes first. Everything comes first. I will move when... life is easier. You know movement matters, but you don't know how to fit it into daily life.",
    cta: "START MOVING",
    image: "/images/figma/continue-move.jpg",
    href: "/move",
  },
  {
    name: "CONNECT",
    title: "CONNECT",
    description:
      "I feel disconnected. Life feels busy but not necessarily meaningful. Everything happens online, and real human connections feel rare. You know connection is important but how do you make time for activities that feel meaningful, not just urgent.",
    cta: "",
    image: "/images/figma/continue-connect.jpg",
    href: "/connect",
  },
  {
    name: "SLEEP",
    title: "SLEEP",
    description:
      "I'm tired all the time. I wake up tired and rely on caffeine to get me through the day. I struggle to switch off at night. You know sleep matters, but you're not sure what to change.",
    cta: "SLEEP BETTER",
    image: "/images/figma/continue-sleep.jpg",
    href: "/sleep",
  },
  {
    name: "BREATHE",
    title: "BREATHE",
    description:
      "I feel stressed and overwhelmed. My mind never stops. I'm always thinking about the next thing. I feel like I'm carrying the weight of everyone around me. You know you need to stress less, but you just need a moment to breathe.",
    cta: "",
    image: "/images/figma/continue-breathe.jpg",
    href: "/breathe",
  },
];

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

export default function ContinueJourneyPage() {
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

      <section className="relative overflow-hidden bg-white pt-[100px]">
        <div className="relative mx-auto max-w-[1440px] px-8 pb-16 pt-12">
          <div className="absolute right-0 top-0 h-[416px] w-[416px] rounded-full bg-brand-lavender/30 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-[56px] font-extrabold uppercase leading-[1.05] tracking-tight text-brand-red">
              A healthier, happier you – one small step at a time.
            </h1>
            <p className="mt-8 text-[15px] leading-relaxed text-brand-navy/80">
              Health isn&apos;t just one thing. It&apos;s a combination of the
              choices we make every day. It&apos;s time to take ownership of
              your health. And it starts with small steps that lead to big
              change.
            </p>
            <Link
              href="#eat"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700"
            >
              Begin your journey
            </Link>
          </div>
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <section
          key={pillar.name}
          id={pillar.name.toLowerCase()}
          className={index % 2 === 0 ? "bg-white" : "bg-brand-off-white"}
        >
          <div className="mx-auto max-w-[1440px] px-8">
            <div
              className={`flex flex-col items-center gap-8 py-16 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="relative h-[300px] w-full flex-shrink-0 overflow-hidden rounded-xl lg:w-[670px]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h2 className="text-[40px] font-extrabold tracking-tight text-brand-navy">
                  {pillar.title}
                </h2>
                <p className="max-w-md text-lg leading-relaxed text-brand-dark-gray">
                  {pillar.description}
                </p>
                {pillar.cta && (
                  <Link
                    href={pillar.href}
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-red px-8 py-2.5 text-sm font-bold uppercase tracking-wider text-brand-red transition-all hover:bg-brand-red hover:text-white"
                  >
                    {pillar.cta}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
