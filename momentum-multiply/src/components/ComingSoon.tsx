import Image from "next/image";

const comingSoon = [
  {
    title: "The UNLOCKED podcast",
    image: "/images/figma/coming-soon-image.png",
  },
  {
    title: "Letter to the future you",
    image: "/images/figma/card-cycling.png",
  },
  {
    title: "The Saray Khumalo challenge series",
    image: "/images/figma/card-soccer.png",
  },
  {
    title: "Future you challenge",
    image: "/images/figma/card-racing2.png",
  },
];

export default function ComingSoon() {
  return (
    <section className="bg-brand-off-white py-20">
      <div className="mx-auto max-w-[1440px] px-8">
        <h2 className="mb-12 text-[40px] font-medium tracking-tight text-brand-dark-gray">
          Coming soon
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {comingSoon.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl bg-brand-purple transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-40 transition-opacity group-hover:opacity-60"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-5">
                <h3 className="text-lg font-extrabold uppercase leading-tight tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
