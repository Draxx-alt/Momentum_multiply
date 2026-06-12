import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        multiply: {
          purple: "#6c3b9e",
          "purple-light": "#8b5cf6",
          indigo: "#4b3f72",
          "indigo-dark": "#2d1b4e",
          blue: "#3b5998",
          teal: "#2d8f8f",
          gold: "#c9a84c",
          cream: "#f5f0eb",
        },
      },
      animation: {
        gradient: "gradient 8s ease-in-out infinite alternate",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        unlock: "unlock 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "gradient-shift": "gradientShift 6s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(167, 139, 250, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(167, 139, 250, 0.4)" },
        },
        unlock: {
          "0%": { opacity: "0", transform: "scale(0.95) translateY(10px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
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
          "linear-gradient(135deg, #2d1b4e 0%, #4b3f72 30%, #3b5998 60%, #2d8f8f 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(107, 59, 158, 0.8), rgba(75, 63, 114, 0.8))",
        "gold-gradient":
          "linear-gradient(135deg, #c9a84c, #e8c860, #c9a84c)",
        "light-mesh":
          "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
