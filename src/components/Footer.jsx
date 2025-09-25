import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="text-center p-8 font-semibold transition-colors duration-300">
      <p className="mb-2 text-emerald dark:text-text-dark">
        &copy; {year} Atlas School
      </p>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-amethyst dark:bg-emerald text-white rounded hover:opacity-80 transition-colors duration-200"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
