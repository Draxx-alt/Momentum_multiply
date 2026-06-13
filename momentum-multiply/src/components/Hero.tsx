import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-navy pt-[100px]">
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-8 md:py-16 lg:py-24">
        <div className="z-10 flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            You didn&apos;t land here by accident.
          </p>
          <h1 className="text-[32px] font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-[40px] lg:text-[56px]">
            This is your first step to the&nbsp;future you.
          </h1>
          <p className="max-w-md text-[15px] leading-relaxed text-white/80">
            Within each of us is a healthier, stronger, more balanced version of
            ourselves. Not a different person. Your future self. The version
            that has more energy. Is stronger, calmer. Feels more connected.
            The version that prioritises your wellbeing.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="/continue"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-brand-red transition-all hover:bg-gray-100"
            >
              Begin your journey
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-8">
            <div className="h-12 w-12 rounded-full bg-white/10" />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                Saray Khumalo
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/50">
                Mountaineer, Speaker, mental fitness advocate
              </p>
              <p className="mt-1 max-w-xs text-sm font-light italic leading-relaxed text-white/70">
                &ldquo;Mental fitness isn&apos;t about becoming someone else.
                It&apos;s about becoming the version of yourself you keep
                putting off.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-2xl">
            <Image
              src="/images/figma/hero-woman.png"
              alt="Woman looking forward"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 right-8 rounded-xl bg-white px-5 py-3 shadow-lg">
            <p className="text-sm font-bold text-brand-navy">My journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}
