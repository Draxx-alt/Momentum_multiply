const features = [
  {
    title: "Personalised for you",
    description:
      "Let us know how you feel and choose your journey.",
    bgColor: "bg-brand-pink",
    image: "/images/figma/card-basketball.png",
  },
  {
    title: "Exclusive access",
    description:
      "Special benefits and deals, exclusive to Multiply members.",
    bgColor: "bg-brand-tangerine",
    image: "/images/figma/card-ping-pong.png",
  },
  {
    title: "Real support",
    description: "A community that supports you every step of the way.",
    bgColor: "bg-brand-green",
    image: "/images/figma/card-racing.png",
  },
  {
    title: "Practical tools and resources",
    description:
      "Small steps, expert guidance and powerful tools to help you grow.",
    bgColor: "bg-brand-blue",
    image: "/images/figma/card-soccer.png",
  },
  {
    title: "Lasting change",
    description:
      "Build habits, shift mindsets and unlock the future you.",
    bgColor: "bg-brand-lavender",
    image: "/images/figma/card-racing2.png",
  },
];

export default function WhatToExpect() {
  return (
    <section id="journey" className="bg-brand-off-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <h2 className="mb-8 text-[28px] font-medium tracking-tight text-brand-dark-gray sm:text-[34px] lg:text-[40px] lg:mb-12">
          What to expect
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-0">
              <div
                className={`${feature.bgColor} relative h-[235px] overflow-hidden rounded-lg`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
              </div>
              <div className="flex flex-col gap-1.5 px-1 pt-3">
                <h3 className="text-[20px] font-extrabold uppercase leading-tight tracking-tight text-brand-navy">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-snug text-brand-dark-gray/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
