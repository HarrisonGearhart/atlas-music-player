import React, { useState } from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import AudioPlayer from "./AudioPlayer";

interface Song {
  title: string;
  artist: string;
  cover: string;
  length: string;
  src: string;
}

interface CurrentlyPlayingProps {
  song: Song;
  nextSong: () => void;
  prevSong: () => void;
  shuffle: boolean;
  toggleShuffle: () => void;
  highlightColor: string; // dynamic button highlight color
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  song,
  nextSong,
  prevSong,
  shuffle,
  toggleShuffle,
  highlightColor,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playbackRate, setPlaybackRate] = useState(1);

  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-xl shadow bg-[var(--color-midnight)]">
      <CoverArt src={song.cover} />
      <SongTitle title={song.title} artist={song.artist} />

      <PlayControls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        playbackRate={playbackRate}
        setPlaybackRate={setPlaybackRate}
        nextSong={nextSong}
        prevSong={prevSong}
        shuffle={shuffle}
        toggleShuffle={toggleShuffle}
        highlightColor={highlightColor} // uses emerald/amethyst/azure
      />

      <VolumeControls volume={volume} setVolume={setVolume} />

      <AudioPlayer
        src={song.src}
        isPlaying={isPlaying}
        volume={volume}
        playbackRate={playbackRate}
      />
    </div>
  );
};

export default CurrentlyPlaying;
