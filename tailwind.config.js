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
        fetching: "hsl(180, 66%, 10%)",

        "grid-line": "hsl(180, 66%, 49%)",
        "stats-logo": "hsl(257, 27%, 26%)",
        "shorten-link-box": "hsl(257, 27%, 26%)",
        white: "#fff",

        statistics: "rgb(240,241,246)",
        bg4: "hsl(260, 8%, 14%)",

        "large-text": "hsl(255, 11%, 22%)",
        "small-text": "hsl(257, 7%, 63%)",
      },
    },
  },
  plugins: [],
};
