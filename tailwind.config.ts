import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "main-gradient":
        "linear-gradient(113deg,rgba(25,16,58,1),rgba(40,15,57,0.8),rgba(12,16,41,1))",
    },
  },
  plugins: [],
};
export default config;
