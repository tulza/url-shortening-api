/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        "nav-button": "hsl(0, 0%, 75%)",
        "nav-button-hover": "hsl(257, 7%, 63%)",

        "sing-up": "hsl(180, 66%, 49%)",
        "sing-up-hover": "hsl(180, 66%, 70%)",

        "grid-line": "hsl(180, 66%, 49%)",
        "stats-logo": "hsl(257, 27%, 26%)",
        "shorten-link-box": "hsl(257, 27%, 26%)",
        white: "#fff",

        bg1: "hsl(0, 0%, 95%)",
        bg2: "hsl(257, 7%, 63%)",
        bg3: "hsl(255, 11%, 22%)",
        bg4: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
