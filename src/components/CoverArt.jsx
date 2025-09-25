import React from "react";
import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="w-48 h-48 overflow-hidden rounded-lg border-2 border-amethyst dark:border-emerald transition-colors duration-300">
      <img
        src={placeholder}
        alt="Cover Art"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
