"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const translateY = scrollY * 0.4;
  const scale = 1 + scrollY * 0.0003;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-gradient animate-gradient bg-[length:300%_300%]" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-multiply-purple-light/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-multiply-teal/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-multiply-gold/5 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="absolute inset-0 light-reflection" />

      <div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto"
        style={{
          opacity,
          transform: `translateY(${translateY * 0.5}px) scale(${scale})`,
        }}
      >
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass text-white/80 text-sm font-medium tracking-wider uppercase animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-multiply-gold animate-pulse-soft" />
            Momentum Multiply Presents
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="gradient-text">Unlock</span>
          <br />
          <span className="text-white">Your Future Self</span>
        </h1>

        <p
          className="mt-8 text-lg sm:text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Every choice you make today shapes the person you become tomorrow
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button className="group relative px-8 py-4 rounded-full bg-white text-multiply-indigo-dark font-semibold text-lg hover:bg-white/95 transition-all hover:scale-105 shadow-xl shadow-black/20 overflow-hidden">
            <span className="relative z-10">Unlock Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-multiply-purple-light/20 via-transparent to-multiply-teal/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/70 transition-all hover:scale-105 backdrop-blur-sm">
            Unlock Experiences
          </button>
        </div>

        <div
          className="mt-12 glass rounded-2xl p-1 max-w-lg w-full mx-auto animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden bg-multiply-indigo-dark/50 flex items-center justify-center">
            <div className="text-center text-white/60">
              <svg
                className="w-16 h-16 mx-auto mb-3 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-sm font-medium tracking-wider uppercase">
                Saray Khumalo Video
              </p>
              <p className="text-xs text-white/40 mt-1">
                Cinematic teaser &mdash; autoplay
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
