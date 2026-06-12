"use client";

import { useState, useEffect } from "react";
import FutureSelfLetterStation from "@/components/FutureSelfLetterStation";

const activations = [
  {
    id: "future-self-letter",
    title: "Future Self Letter",
    subtitle: "Write a letter from your future self",
    description:
      "What would your future self say to you today? Write a letter from the person you're becoming — a powerful exercise in reflection, goal-setting, and positive future thinking.",
    status: "live" as const,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-700",
    features: [
      "Guided writing prompts",
      "Schedule delivery by email",
      "Download PDF copy",
    ],
  },
  {
    id: "blueprint-of-you",
    title: "The Blueprint of You",
    subtitle: "Discover who you're becoming",
    description:
      "An interactive self-discovery experience that helps you identify the habits, behaviours and choices shaping your future. Receive a personalised blueprint highlighting areas of growth.",
    status: "live" as const,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-700",
    features: [
      "Interactive questionnaire",
      "Personalised results",
      "Shareable blueprint",
    ],
  },
];

const comingSoonActivations = [
  {
    id: "the-future-call",
    title: "The Future Call",
    subtitle: "A cinematic message from the person you're becoming",
    description:
      "Experience a motivational phone call from your future self — sharing wisdom, encouragement, and insights from the life you are currently building.",
    gradient: "from-blue-500 to-indigo-700",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    features: [
      "Cinematic video experience",
      "Audio playback",
      "Share with friends",
    ],
    isInteractive: true,
  },
  {
    id: "prescription",
    title: "Prescription for Your Future Self",
    subtitle: "Personalised wellbeing recommendations",
    description:
      "Answer a short series of questions and receive practical actions aligned to the five Multiply pillars. In partnership with Dischem.",
    partner: "Dischem",
    gradient: "from-rose-500 to-pink-700",
  },
  {
    id: "next-self-wall",
    title: "The Next Self Wall",
    subtitle: "A digital wall of commitments and aspirations",
    description:
      "See your goals and commitments alongside others on the same journey. A collective display of growth and positive change.",
    gradient: "from-amber-500 to-orange-700",
  },
  {
    id: "unlocked-podcast",
    title: "Unlocked Podcast Series",
    subtitle: "Stories from people who unlocked their next self",
    description:
      "A premium podcast series exploring personal growth, wellbeing, and the practical actions that shape our future selves.",
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    id: "saray-challenges",
    title: "Saray Khumalo Weekly Challenges",
    subtitle: "Weekly actions guided by Saray",
    description:
      "Simple, achievable weekly challenges that build momentum — guided by Saray Khumalo. Complete them, share your progress, and grow.",
    gradient: "from-fuchsia-500 to-purple-700",
  },
];

export default function ActivationsHub() {
  const [showLetterStation, setShowLetterStation] = useState(false);

  useEffect(() => {
    if (showLetterStation) {
      setTimeout(() => {
        document.getElementById("future-self-letter")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [showLetterStation]);

  return (
    <>
      <section className="relative py-24 px-4 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 light-reflection" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4 block">
              Phase 1 — Ignite
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Begin Your{" "}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
              Two immersive experiences designed to spark self-reflection,
                inspire action, and unlock your next self.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activations.map((activation) => (
              <div
                key={activation.id}
                className="glass-card p-6 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activation.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    {activation.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Now
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {activation.title}
                </h3>
                <p className="text-white/50 text-sm mb-3">
                  {activation.subtitle}
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {activation.description}
                </p>

                <div className="space-y-2 mb-5">
                  {activation.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-white/60 text-xs"
                    >
                      <svg
                        className="w-4 h-4 text-multiply-gold shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (activation.title === "Future Self Letter") {
                      setShowLetterStation((prev) => !prev);
                    }
                  }}
                  className={`mt-auto w-full py-3 rounded-xl bg-gradient-to-r ${activation.gradient} text-white font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer`}
                >
                  {activation.title === "Future Self Letter"
                    ? showLetterStation
                      ? "Close Letter Station"
                      : "Write Your Letter"
                    : "Discover Your Blueprint"}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-4 block">
                Phase 2 — Engage
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white/80">
                Coming <span className="gradient-text">Soon</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {comingSoonActivations.map((item) => (
                <div
                  key={item.id}
                  className="glass-card p-5 text-center opacity-70 hover:opacity-100 transition-opacity flex flex-col"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white/60`}
                  >
                    {"icon" in item ? (
                      item.icon
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-xs mb-2">{item.subtitle}</p>
                  {item.partner && (
                    <span className="inline-block text-[10px] text-multiply-gold/60 font-medium uppercase tracking-wider">
                      With {item.partner}
                    </span>
                  )}
                  {"isInteractive" in item && item.isInteractive && "features" in item && Array.isArray(item.features) && (
                    <div className="mt-3 space-y-1.5 mb-4">
                      {item.features.map((feature: string) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-white/40 text-[10px] mx-auto w-fit"
                        >
                          <svg
                            className="w-3 h-3 text-multiply-gold/60 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                  {"isInteractive" in item && item.isInteractive && (
                    <button
                      className={`mt-auto w-full py-2.5 rounded-lg bg-gradient-to-r ${item.gradient} text-white font-semibold text-xs hover:opacity-90 transition-opacity cursor-pointer`}
                    >
                      Coming in Phase 2
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showLetterStation && (
        <FutureSelfLetterStation onClose={() => setShowLetterStation(false)} />
      )}
    </>
  );
}
