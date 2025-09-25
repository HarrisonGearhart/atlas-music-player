import React from "react";

type PlayListItemProps = {
  title?: string;
  artist?: string;
  length?: string;
  selected?: boolean;
  onClick?: () => void;
  highlightColor?: string;
};

export default function PlayListItem({
  title = "Song Title",
  artist = "Artist",
  length = "3:45",
  selected = false,
  onClick,
  highlightColor = "var(--color-emerald)",
}: PlayListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center px-4 py-2 cursor-pointer transition-colors`}
      style={{
        backgroundColor: selected ? highlightColor : undefined,
        color: selected ? "#fff" : undefined,
      }}
    >
      <div className="flex flex-col">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs">{artist}</p>
      </div>
      <span className="text-xs">{length}</span>
    </div>
  );
}
