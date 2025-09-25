import React from "react";

export default function PlayListItem({
  title = "Song Title",
  artist = "Artist",
  length = "3:45",
  selected = false,
}) {
  return (
    <div
      className={`flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
        selected ? "bg-gray-200" : "hover:bg-gray-100"
      }`}
    >
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-600">{artist}</p>
      </div>
      <span className="text-xs text-gray-500">{length}</span>
    </div>
  );
}