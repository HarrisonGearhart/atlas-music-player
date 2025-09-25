import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start justify-center w-full">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
