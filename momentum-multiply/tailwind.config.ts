import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          navy: "#172c4b",
          red: "#ed1c24",
          purple: "#5955e4",
          pink: "#ff3366",
          tangerine: "#ffc03f",
          green: "#1bbb74",
          blue: "#99ccff",
          lavender: "#b489fa",
          "dark-gray": "#262626",
          "light-gray": "#ebeef3",
          "off-white": "#f9fafc",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "gradient-shift": "gradientShift 6s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(89, 85, 228, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(89, 85, 228, 0.4)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #172c4b 0%, #0d1a30 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
