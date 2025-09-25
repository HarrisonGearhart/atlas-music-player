import React from "react";
import PlayListItem from "./PlayListItem";

type PlaylistProps = {
  songs: {
    title: string;
    artist: string;
    length: string;
  }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  highlightColor?: string;
};

export default function Playlist({
  songs,
  selectedIndex,
  onSelect,
  highlightColor = "var(--color-emerald)",
}: PlaylistProps) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-60">
      {songs.map((song, i) => (
        <PlayListItem
          key={i}
          title={song.title}
          artist={song.artist}
          length={song.length}
          selected={i === selectedIndex}
          onClick={() => onSelect(i)}
          highlightColor={highlightColor}
        />
      ))}
    </div>
  );
}
