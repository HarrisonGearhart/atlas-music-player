import React from "react";

export default function PlayListItem({ title, artist, length, selected }) {
  return (
    <div
      className={`flex justify-between items-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
        selected
          ? "bg-emerald dark:bg-amethyst"
          : "hover:bg-amethyst dark:hover:bg-emerald"
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
