"use client";

import { useState } from "react";

const pillars = [
  {
    id: "eat",
    title: "Eat",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    description:
      "Nourish your body with intentional nutrition. Every meal is an investment in the version of you that hasn't arrived yet.",
    rewards:
      "Earn rewards on healthy groceries, meal kit services and nutrition consultations.",
    tips: [
      "Plan balanced meals for the week ahead",
      "Try one new whole food recipe this week",
      "Stay hydrated — aim for 8 glasses daily",
    ],
  },
  {
    id: "sleep",
    title: "Sleep",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    gradient: "from-indigo-500 to-purple-600",
    description:
      "Rest is not a luxury — it's the foundation of your future self. Quality sleep restores your mind and body.",
    rewards:
      "Discounts on sleep tech, premium bedding, and sleep therapy consultations.",
    tips: [
      "Create a consistent bedtime routine",
      "Avoid screens 60 minutes before sleep",
      "Track your sleep patterns for a week",
    ],
  },
  {
    id: "move",
    title: "Move",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-orange-500 to-rose-600",
    description:
      "Every step, stretch and stride brings you closer to the strongest version of yourself.",
    rewards:
      "Gym membership savings, fitness device discounts, and rewards for hitting movement goals.",
    tips: [
      "Take a 20-minute walk without your phone",
      "Try a new movement practice this week",
      "Set a daily step goal and track it",
    ],
  },
  {
    id: "breathe",
    title: "Breathe",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-sky-500 to-cyan-600",
    description:
      "Mindful breathing is the reset button your future self relies on. Reduce stress, increase clarity.",
    rewards:
      "Access to meditation apps, mindfulness courses, and stress management resources.",
    tips: [
      "Practice 5 minutes of mindful breathing daily",
      "Try box breathing when feeling stressed",
      "Schedule tech-free quiet time each day",
    ],
  },
  {
    id: "connect",
    title: "Connect",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-yellow-500 to-amber-600",
    description:
      "Meaningful relationships fuel a meaningful life. Your future self thrives through connection.",
    rewards:
      "Community event access, group challenge rewards, and social wellness incentives.",
    tips: [
      "Reconnect with someone you've been avoiding",
      "Join a community group or class",
      "Schedule quality time with loved ones",
    ],
  },
];

export default function FivePillars() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-4 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 light-reflection" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4 block">
            The Foundation
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            The Five Pillars of{" "}
            <span className="gradient-text">Wellbeing</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Small daily actions across these five areas compound to create the
            future version of yourself. Tap each pillar to explore.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() =>
                setActivePillar(activePillar === pillar.id ? null : pillar.id)
              }
              className={`glass-card p-6 text-center transition-all duration-500 ${
                activePillar === pillar.id
                  ? "ring-2 ring-white/40 scale-105 z-10"
                  : "hover:scale-105"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white shadow-lg`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {pillar.title}
              </h3>
              {activePillar !== pillar.id && (
                <p className="text-xs text-white/40 mt-2">
                  Tap to explore
                </p>
              )}
            </button>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-500 overflow-hidden ${
            activePillar
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {activePillar && (
            <div className="glass rounded-2xl p-8 animate-unlock">
              {(() => {
                const p = pillars.find((x) => x.id === activePillar)!;
                return (
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white mb-4`}
                      >
                        {p.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {p.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-4">
                        {p.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-multiply-gold/20 text-multiply-gold text-sm font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {p.rewards}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">
                        Try This Week
                      </h4>
                      <div className="space-y-3">
                        {p.tips.map((tip, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-white/80"
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5`}>
                              {i + 1}
                            </div>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
