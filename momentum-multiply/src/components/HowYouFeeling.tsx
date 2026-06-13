"use client";

import { useState } from "react";

const emotions = [
  {
    label: "Overwhelmed",
    message: "You're carrying a lot. Let's find ways to lighten the load, one step at a time.",
    recommendation: "We recommend starting with BREATHE.",
    color: "#ff3366",
    icon: "😮",
  },
  {
    label: "Stuck",
    message: "Feeling stuck is a signal that something wants to shift. Let's move forward together.",
    recommendation: "We recommend starting with MOVE.",
    color: "#ffc03f",
    icon: "😐",
  },
  {
    label: "Tired",
    message: "Your body is asking for rest. Quality sleep changes everything.",
    recommendation: "We recommend starting with SLEEP.",
    color: "#99ccff",
    icon: "😴",
  },
  {
    label: "Unmotivated",
    message: "Motivation follows action, not the other way around. Start small.",
    recommendation: "We recommend starting with EAT.",
    color: "#1bbb74",
    icon: "😞",
  },
  {
    label: "Surviving, not thriving",
    message: "You're doing more than you realise. Let's turn surviving into thriving.",
    recommendation: "We recommend starting with CONNECT.",
    color: "#b489fa",
    icon: "😮‍💨",
  },
  {
    label: "Ready for change",
    message: "That spark you feel? That's your future self calling. Let's answer.",
    recommendation: "We recommend starting your full journey.",
    color: "#5955e4",
    icon: "✨",
  },
];

export default function HowYouFeeling() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="how-feeling" className="bg-brand-off-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-center bg-brand-purple px-10 py-16 lg:px-14 lg:py-20">
            <a
              href="/continue"
              className="mb-6 inline-block w-fit rounded-full border border-white/20 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-white/80 transition-all hover:bg-white/10"
            >
              Start your journey
            </a>
            <h2 className="mb-4 text-[56px] font-extrabold uppercase leading-[1.05] tracking-tight text-white">
              How are you feeling today?
            </h2>
            <p className="max-w-sm text-lg leading-relaxed text-white/70">
              There is no right or wrong answer, just the first step to the
              future you.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-brand-light-gray p-4">
            {emotions.map((emotion, index) => (
              <div key={emotion.label} className="flip-card h-[174px]">
                <div
                  className={`flip-card-inner cursor-pointer ${flippedIndex === index ? "flipped" : ""}`}
                  onClick={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                >
                  <div className="flip-card-front flex flex-col items-center justify-center gap-3 rounded-lg bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple/10 text-xl">
                      {emotion.icon}
                    </div>
                    <span className="text-[15px] font-bold text-brand-navy">
                      {emotion.label}
                    </span>
                  </div>
                  <div
                    className="flip-card-back flex flex-col items-center justify-center gap-2 rounded-lg p-4 text-center text-white"
                    style={{ backgroundColor: emotion.color }}
                  >
                    <p className="text-[13px] leading-snug">{emotion.message}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide opacity-90">
                      {emotion.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
