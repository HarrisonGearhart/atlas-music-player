import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg bg-[var(--color-emerald)] text-white hover:bg-[var(--color-amethyst)] transition"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
