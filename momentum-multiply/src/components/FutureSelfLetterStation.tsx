"use client";

import { useState, useRef } from "react";
import { useSession } from "@/hooks/useSession";

export default function FutureSelfLetterStation({
  onClose,
}: {
  onClose?: () => void;
}) {
  const sessionId = useSession();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("sessionId", sessionId || "");

    try {
      const res = await fetch("/api/future-self-letter", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      const data = await res.json();
      setDeliveryDate(data.scheduledDeliveryDate);
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const formattedDate = deliveryDate
      ? new Date(deliveryDate).toLocaleDateString("en-ZA", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "in 90 days";

    return (
      <section className="relative py-24 px-4 bg-background">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/20 transition-all"
            aria-label="Close letter station"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Your Letter Is On Its Journey
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed mb-2">
            Thank you for writing to your future self. Your letter will be
            emailed back to you on:
          </p>
          <p className="text-2xl font-bold text-multiply-purple-light mb-6">
            {formattedDate}
          </p>
          <p className="text-foreground/60 leading-relaxed">
            A reminder from the version of you who chose growth. Keep showing up
            for yourself — your future self is already thanking you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="future-self-letter"
      className="relative py-24 px-4 bg-gradient-to-b from-background to-multiply-cream/20"
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/20 transition-all"
          aria-label="Close letter station"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-multiply-purple-light mb-4 block">
            Phase 1 — Ignite
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Future Self{" "}
            <span className="gradient-text">Letter Station</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/60 max-w-lg mx-auto">
            Pause and connect with the person you are becoming. Write a letter
            to your future self — it will return to you in 90 days as a
            reminder of your intentions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                First Name
              </label>
              <input
                required
                name="name"
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Surname
              </label>
              <input
                required
                name="surname"
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all"
                placeholder="Your surname"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Date of Birth
              </label>
              <input
                required
                name="dateOfBirth"
                type="date"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all"
              />
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
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              What would you like your future self to remember?
            </label>
            <textarea
              name="letterContent"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 focus:border-multiply-purple-light transition-all resize-y"
              placeholder="What do you want to let go of? What do you want to grow into? What does your next chapter look like..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Upload a Photo of Your Letter
            </label>
            <input
              ref={fileRef}
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-dashed border-gray-300 text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-multiply-purple/10 file:text-multiply-purple-light hover:file:bg-multiply-purple/20 transition-all focus:outline-none focus:ring-2 focus:ring-multiply-purple-light/50 cursor-pointer"
            />
            <p className="text-xs text-foreground/40 mt-2">
              Take a photo of your physical letter. Max 10MB. JPEG, PNG, or
              WebP.
            </p>
          </div>

          {previewUrl && (
            <div className="rounded-xl overflow-hidden border border-foreground/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="Letter preview"
                className="w-full max-h-64 object-contain bg-foreground/5"
              />
            </div>
          )}

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-multiply-purple to-multiply-indigo text-white font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-multiply-purple/20"
          >
            {loading ? "Sending Your Letter..." : "Send Letter To Your Future Self"}
          </button>

          <p className="text-xs text-foreground/40 text-center">
            Your data is protected under POPIA. Your letter will be emailed back
            to you in 90 days.
          </p>
        </form>
      </div>
    </section>
  );
}
