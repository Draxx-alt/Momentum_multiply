"use client";

import { useState } from "react";
import { useSession } from "@/hooks/useSession";

interface EmotionalState {
  id: string;
  label: string;
  gradient: string;
  flipMessage: string;
  partner: string;
  partnerLogo?: string;
  action: string;
  actionLabel: string;
}

const emotionalStates: EmotionalState[] = [
  {
    id: "overwhelmed",
    label: "Overwhelmed",
    gradient: "from-violet-500 to-purple-700",
    flipMessage:
      "You don't need to have it all figured out. Take one small breath, then one small step. Support is here.",
    partner: "Danni Health",
    action: "Guided wellness and community support to help you find calm in the chaos.",
    actionLabel: "Find Your Calm",
  },
  {
    id: "burnt-out",
    label: "Burnt Out",
    gradient: "from-rose-500 to-pink-700",
    flipMessage:
      "Rest is productive. Your future self will thank you for prioritising recovery today.",
    partner: "Tailorblend",
    action: "Nutrition and wellness support to restore your energy and balance.",
    actionLabel: "Restore Balance",
  },
  {
    id: "unmotivated",
    label: "Unmotivated",
    gradient: "from-amber-500 to-orange-700",
    flipMessage:
      "Motivation follows action — not the other way around. Start small. Start now.",
    partner: "Saray Khumalo",
    action: "Inspirational challenges and weekly accountability to spark your momentum.",
    actionLabel: "Get Inspired",
  },
  {
    id: "stuck",
    label: "Stuck",
    gradient: "from-slate-500 to-gray-700",
    flipMessage:
      "Feeling stuck is not failure — it's a signal. Your blueprint for growth is waiting.",
    partner: "DNAlysis",
    action: "Personalised wellness insights based on your unique biological makeup.",
    actionLabel: "Discover Your Path",
  },
  {
    id: "anxious",
    label: "Anxious",
    gradient: "from-cyan-500 to-blue-700",
    flipMessage:
      "Anxiety is your body's way of asking for presence. Breathe. You are safe in this moment.",
    partner: "Danni Health",
    action: "Stress management tools and guided practices for anxious moments.",
    actionLabel: "Find Grounding",
  },
  {
    id: "tired",
    label: "Tired",
    gradient: "from-indigo-500 to-blue-800",
    flipMessage:
      "Your energy is a resource worth protecting. Small habits rebuild it over time.",
    partner: "Dr Leaf Nutrition",
    action: "Supplement guidance and nutrition support to restore your vitality.",
    actionLabel: "Restore Energy",
  },
  {
    id: "disconnected",
    label: "Disconnected",
    gradient: "from-teal-500 to-emerald-700",
    flipMessage:
      "Connection is a basic human need. Your future self is part of a community.",
    partner: "Multiply Community",
    action: "Join group challenges and connect with others on the same journey.",
    actionLabel: "Find Your People",
  },
  {
    id: "unfocused",
    label: "Unfocused",
    gradient: "from-fuchsia-500 to-purple-700",
    flipMessage:
      "Clarity comes from action, not thinking. One focused step changes everything.",
    partner: "DNAlysis",
    action: "Understand your unique cognitive profile and optimise your focus.",
    actionLabel: "Sharpen Focus",
  },
  {
    id: "lost",
    label: "Lost",
    gradient: "from-stone-500 to-neutral-700",
    flipMessage:
      "Sometimes getting lost is how you find yourself. A new direction is emerging.",
    partner: "Blueprint of You",
    action: "Discover your personalised blueprint for growth and purpose.",
    actionLabel: "Find Direction",
  },
  {
    id: "ready",
    label: "Ready for Change",
    gradient: "from-emerald-500 to-green-700",
    flipMessage:
      "You've already taken the first step by acknowledging you're ready. Let's go.",
    partner: "Momentum Multiply",
    action: "Dive into the full journey — activations, challenges, and rewards await.",
    actionLabel: "Start Now",
  },
  {
    id: "curious",
    label: "Curious",
    gradient: "from-yellow-500 to-amber-700",
    flipMessage:
      "Curiosity is the compass of growth. Your future self wants you to explore.",
    partner: "Unlocked Podcast",
    action: "Listen to inspiring stories from people who unlocked their next self.",
    actionLabel: "Explore Stories",
  },
  {
    id: "hopeful",
    label: "Hopeful",
    gradient: "from-sky-500 to-indigo-700",
    flipMessage:
      "Hope is the foundation of transformation. You are closer than you think.",
    partner: "Momentum Multiply",
    action: "Begin your personalised journey and watch hope become action.",
    actionLabel: "Begin Your Journey",
  },
];

export default function HowYouFeeling() {
  const sessionId = useSession();
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState<Set<string>>(new Set());

  const submitEmotionalState = async (emotionalStateId: string, partnerRecommended: string) => {
    if (submitting.has(emotionalStateId)) return;

    setSubmitting((prev) => new Set(prev).add(emotionalStateId));

    try {
      await fetch("/api/emotional-state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emotionalStateId,
          sessionId: sessionId || undefined,
          flippedToView: true,
          partnerRecommended,
        }),
      });
    } catch {
      // silently fail — the flip animation still works
    } finally {
      setSubmitting((prev) => {
        const next = new Set(prev);
        next.delete(emotionalStateId);
        return next;
      });
    }
  };

  const toggleFlip = (id: string) => {
    const isAlreadyFlipped = flippedCards.has(id);

    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

    if (!isAlreadyFlipped) {
      const state = emotionalStates.find((s) => s.id === id);
      if (state) {
        submitEmotionalState(id, state.partner);
      }
    }
  };

  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-multiply-purple-light mb-4 block">
            Check In With Yourself
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
            How are you really{" "}
            <span className="gradient-text">feeling</span> today?
          </h2>
          <p className="mt-6 text-lg text-foreground/60 max-w-2xl mx-auto">
            This is a safe, non-judgemental space. Select the card that best
            describes how you feel right now — and discover support tailored to
            you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {emotionalStates.map((state) => {
            const isFlipped = flippedCards.has(state.id);
            return (
              <div
                key={state.id}
                className="flip-card h-56 cursor-pointer"
                onClick={() => toggleFlip(state.id)}
              >
                <div
                  className={`flip-card-inner ${
                    isFlipped ? "flipped" : ""
                  }`}
                >
                  <div
                    className={`flip-card-front bg-gradient-to-br ${state.gradient} p-5 flex flex-col items-center justify-center text-center shadow-lg`}
                  >
                    <span className="text-white font-semibold text-lg tracking-wide">
                      {state.label}
                    </span>
                    {isFlipped ? null : (
                      <span className="text-white/50 text-xs mt-2">
                        Tap to explore
                      </span>
                    )}
                  </div>

                  <div className="flip-card-back glass p-5 flex flex-col justify-between text-center overflow-y-auto">
                    <div>
                      <p className="text-foreground text-sm leading-relaxed mb-3">
                        {state.flipMessage}
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-multiply-gold/10 text-multiply-gold text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-multiply-gold" />
                        {state.partner}
                      </div>
                    </div>
                    <p className="text-foreground/50 text-xs leading-relaxed mt-3 mb-2">
                      {state.action}
                    </p>
                    <span className="text-xs font-semibold text-multiply-purple-light">
                      {state.actionLabel} &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
