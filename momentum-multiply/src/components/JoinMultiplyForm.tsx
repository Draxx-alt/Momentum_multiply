"use client";

import { useState, type FormEvent } from "react";
import { useSession } from "@/hooks/useSession";
import Link from "next/link";

export default function JoinMultiplyForm() {
  const sessionId = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const [userName, setUserName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      memberStatus: formData.get("memberStatus") as string,
      sessionId: sessionId || undefined,
    };

    try {
      const res = await fetch("/api/join-multiply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setUserName(payload.firstName);
      setSuccess(true);
    } catch {
      setError("Could not connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/20">
          <svg
            className="h-8 w-8 text-brand-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="mb-2 text-2xl font-extrabold text-brand-navy">
          Welcome{userName ? `, ${userName}` : ""}!
        </h2>
        <p className="mb-6 text-brand-dark-gray">
          You&apos;re all signed up. Start your journey to unlock your future self.
        </p>
        <Link
          href="/continue"
          className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-purple/80"
        >
          Begin your journey
        </Link>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:border-brand-purple/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all";

  return (
    <div className="mx-auto max-w-lg">
      <h2 className="mb-2 text-2xl font-extrabold text-brand-navy">
        Join Multiply
      </h2>
      <p className="mb-8 text-brand-dark-gray">
        Fill in your details to get started on your journey.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-brand-dark-gray/60"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Your first name"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-brand-dark-gray/60"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Your last name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-brand-dark-gray/60"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="memberStatus"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-brand-dark-gray/60"
          >
            Multiply Membership Status
          </label>
          <select
            id="memberStatus"
            name="memberStatus"
            required
            className={inputClasses}
            defaultValue=""
          >
            <option value="" disabled>
              Select your status
            </option>
            <option value="active">Active Multiply Member</option>
            <option value="momentum">
              Momentum Member (not yet on Multiply)
            </option>
            <option value="none">Not a member yet</option>
          </select>
        </div>

        <label className="mt-2 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple/50"
          />
          <span className="text-xs leading-relaxed text-brand-dark-gray/60">
            I consent to the processing of my personal information in accordance
            with the Protection of Personal Information Act (POPIA). I agree to
            receive communications from Momentum Multiply about my journey,
            benefits, and rewards.
          </span>
        </label>

        {error && (
          <p className="text-center text-sm text-red-500">{error}</p>
        )}

        <button
          type="submit"
          disabled={!consent || loading}
          className="mt-2 w-full rounded-full bg-brand-red px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Joining..." : "Join Multiply"}
        </button>

        <p className="text-center text-xs text-brand-dark-gray/40">
          Already have an account?{" "}
          <Link
            href="/continue"
            className="text-brand-purple underline underline-offset-2 hover:text-brand-purple/80"
          >
            Continue your journey
          </Link>
        </p>
      </form>
    </div>
  );
}
