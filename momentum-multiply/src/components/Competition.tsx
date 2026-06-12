"use client";

import { useState, useRef } from "react";
import { useSession } from "@/hooks/useSession";

export default function Competition() {
  const sessionId = useSession();
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || loading) return;

    setLoading(true);
    setError(null);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      mobileNumber: formData.get("mobileNumber") as string,
      memberStatus: formData.get("memberStatus") as string,
      sessionId: sessionId || undefined,
    };

    try {
      const res = await fetch("/api/competition-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative py-24 px-4 bg-background">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-multiply-purple/10 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-multiply-purple-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            You&apos;re In!
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Thank you for entering. Each activation you engage with earns you
            additional entries. Keep going — your future self is already forming.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-multiply-cream/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-multiply-purple-light mb-4 block">
            Win With Multiply
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Enter the{" "}
            <span className="gradient-text">Competition</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/60 max-w-lg mx-auto">
            Participate in campaign experiences to earn entries. The more you
            engage, the more chances you have to win incredible rewards.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                First Name
              </label>
              <input
                required
                name="firstName"
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Last Name
              </label>
              <input
                required
                name="lastName"
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email Address
            </label>
            <input
              required
              name="email"
              type="email"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all"
                placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Mobile Number
            </label>
            <input
              required
              name="mobileNumber"
              type="tel"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all"
                placeholder="+27 00 000 0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Multiply Member Status
            </label>
            <select
              name="memberStatus"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all appearance-none"
            >
              <option value="">Select your status</option>
              <option value="active">Active Multiply Member</option>
              <option value="momentum">Momentum Member (not yet on Multiply)</option>
              <option value="none">Not a member yet</option>
            </select>
          </div>

          <div className="border-t border-foreground/10 pt-6">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-5 h-5 rounded border-foreground/20 text-multiply-purple-light focus:ring-multiply-purple-light/50 cursor-pointer"
              />
              <span className="text-sm text-foreground/60 leading-relaxed">
                I consent to Momentum Multiply processing my personal
                information in accordance with the Protection of Personal
                Information Act (POPIA). I understand my data will be used for
                competition entry, campaign communications, and Multiply
                programme engagement. View our{" "}
                <a href="#" className="text-multiply-purple-light underline hover:text-multiply-purple transition-colors">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={!consent || loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-multiply-purple to-multiply-indigo text-white font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-multiply-purple/20"
          >
            {loading ? "Submitting..." : "Enter Competition"}
          </button>

          <p className="text-xs text-foreground/40 text-center">
            By entering you agree to the{" "}
            <a href="#" className="underline hover:text-foreground/60">
              Terms &amp; Conditions
            </a>
            . Your data is protected under POPIA.
          </p>
        </form>

        <div className="mt-8 text-center glass rounded-xl p-4 max-w-md mx-auto">
          <p className="text-sm text-foreground/60">
            <span className="text-multiply-gold font-semibold">Tip:</span>{" "}
            Complete activations like the Future Self Letter, The Future Call,
            and The Blueprint of You to earn additional competition entries.
          </p>
        </div>
      </div>
    </section>
  );
}
