import React from "react";

export default function SongTitle({ title = "Song Title", artist = "Artist" }) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-600">{artist}</p>
    </div>
  );
}