const steps = [
  {
    step: "Share",
    description: "Tell us where you would like to start.",
  },
  {
    step: "Your journey",
    description: "We recommend the best journey for you.",
  },
  {
    step: "You take action",
    description: "You start taking daily steps towards the future you.",
  },
  {
    step: "You grow",
    description: "You get to meet the future you.",
  },
];

export default function WhatHappensNext() {
  return (
    <section className="bg-brand-off-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <h2 className="mb-8 text-[28px] font-medium tracking-tight text-brand-dark-gray sm:text-[34px] lg:text-[40px] lg:mb-12">
          What happens next?
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-3 rounded-2xl bg-brand-red p-6 pt-8"
            >
              <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">
                {item.step}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
