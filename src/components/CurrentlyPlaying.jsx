import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-var(--color-amethyst) rounded-xl shadow-lg text-white">
      <CoverArt />
      <SongTitle title="Lost Stars" artist="Adam Levine" />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
