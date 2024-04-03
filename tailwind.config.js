/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(172, 67%, 45%)",
        "neutral-very-dark-cyan": "hsl(183, 100%, 15%)",
        "neutral-dark-grayish-cyan": " hsl(186, 14%, 43%)",
        "neutral-grayish-cyan": "hsl(184, 14%, 56%)",
        "neutral-light-grayish-cyan": "hsl(185, 41%, 84%)",
        "neutral-very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
