import React from "react";

export default function PlayListItem({ title, artist, length, selected }) {
  return (
    <div
      className={`flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
        selected
          ? "bg-var(--color-emerald)"
          : "hover:bg-var(--color-amethyst) transition"
      }`}
    >
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs">{artist}</p>
      </div>
      <span className="text-xs">{length}</span>
    </div>
  );
}
