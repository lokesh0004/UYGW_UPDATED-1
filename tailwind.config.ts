import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050B1F",
        indigo: { DEFAULT: "#6366F1", dark: "#4F46E5", light: "#818CF8" },
        gold: { DEFAULT: "#F59E0B", light: "#FCD34D" },
        cyan: { DEFAULT: "#00D4FF", dark: "#0EA5E9" },
        surface: "#1E293B",
        "surface-2": "#0F172A",
      },
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
