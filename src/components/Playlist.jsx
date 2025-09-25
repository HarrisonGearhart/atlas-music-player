import React from "react";
import PlayListItem from "./PlayListItem";

export default function Playlist() {
  const songs = [
    { title: "Lost Stars", artist: "Adam Levine", length: "4:27" },
    { title: "Hello", artist: "Adele", length: "4:55" },
    { title: "Blinding Lights", artist: "The Weeknd", length: "3:22" },
    { title: "Shape of You", artist: "Ed Sheeran", length: "3:53" },
  ];

  return (
    <div className="flex flex-col gap-2 p-6 bg-white rounded-xl shadow w-80">
      {songs.map((song, index) => (
        <PlayListItem
          key={index}
          title={song.title}
          artist={song.artist}
          length={song.length}
          selected={index === 0} // highlight the first one
        />
      ))}
    </div>
  );
}