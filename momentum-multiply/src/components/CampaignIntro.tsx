export default function CampaignIntro() {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-semibold tracking-widest uppercase text-multiply-purple-light mb-4 block">
          The Campaign
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
          What is{" "}
          <span className="gradient-text">Unlock Your Future Self</span>?
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
          Who you are tomorrow starts with what you do today. Momentum Multiply
          rewards positive everyday actions that help you become your healthiest,
          happiest and most fulfilled self.
        </p>

        <p className="mt-4 text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
          Throughout this campaign, you&apos;ll discover experiences, challenges
          and opportunities designed to help you unlock your future self.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ),
              title: "Imagine",
              desc: "Envision the person you want to become and discover what's possible.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
              title: "Activate",
              desc: "Take small, intentional steps through our curated experiences and challenges.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
              title: "Transform",
              desc: "Build momentum through consistent action and become your future self.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="glass-card p-8 text-center group"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-multiply-purple/10 flex items-center justify-center text-multiply-purple-light group-hover:bg-multiply-purple/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
