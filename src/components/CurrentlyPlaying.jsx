import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-xl shadow">
      <CoverArt />
      <SongTitle title="Lost Stars" artist="Adam Levine" />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}