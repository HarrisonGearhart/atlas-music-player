import React from "react";

export default function SongTitle({ title, artist }) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold text-emerald dark:text-amethyst">
        {title}
      </h2>
      <p className="text-sm text-azure dark:text-emerald">{artist}</p>
    </div>
  );
}
