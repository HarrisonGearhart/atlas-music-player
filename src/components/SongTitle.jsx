import React from "react";

export default function SongTitle({ title, artist }) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold text-var(--color-emerald)">{title}</h2>
      <p className="text-sm text-var(--color-azure)">{artist}</p>
    </div>
  );
}
