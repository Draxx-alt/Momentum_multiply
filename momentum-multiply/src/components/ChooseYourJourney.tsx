import Image from "next/image";

export default function ChooseYourJourney() {
  return (
    <section className="relative overflow-hidden bg-[#0d1a30]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-0 lg:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-6 px-4 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          <a
            href="/continue"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-purple/80 sm:px-8"
          >
            Choose your journey
          </a>
          <h2 className="max-w-lg text-[30px] font-extrabold uppercase leading-[1.05] tracking-tight text-brand-purple sm:text-[40px] lg:text-[50px]">
            The future you is closer than you think. Take the first step. The
            rest will follow.
          </h2>
        </div>

        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full lg:aspect-[3/4]">
            <Image
              src="/images/figma/hero-image2.png"
              alt="Athlete in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
