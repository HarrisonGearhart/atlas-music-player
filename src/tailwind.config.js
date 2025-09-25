/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          emerald: "var(--color-emerald)",
          amethyst: "var(--color-amethyst)",
          azure: "var(--color-azure)",
        },
      },
    },
    plugins: [],
  };
  