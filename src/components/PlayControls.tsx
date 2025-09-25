import React from "react";
import { Shuffle, Rewind, Play, FastForward, Pause } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  playbackRate: number;
  setPlaybackRate: (rate: number) => void;
  nextSong: () => void;
  prevSong: () => void;
  shuffle: boolean;
  toggleShuffle: () => void;
  highlightColor?: string; // active button color
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayPause,
  playbackRate,
  setPlaybackRate,
  nextSong,
  prevSong,
  shuffle,
  toggleShuffle,
  highlightColor = "var(--color-emerald)",
}) => {
  const handleSpeedClick = () => {
    const nextRate = playbackRate === 0.5 ? 1 : playbackRate === 1 ? 2 : 0.5;
    setPlaybackRate(nextRate);
  };

  const getButtonStyle = (active: boolean) => ({
    color: active ? "#fff" : "var(--color-azure)",
    backgroundColor: active ? highlightColor : "transparent",
    borderColor: active ? highlightColor : "var(--color-azure)",
    transition: "all 0.2s ease",
  });

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Speed Button */}
      <button
        onClick={handleSpeedClick}
        className="px-3 py-2 font-semibold border rounded-md hover:opacity-80"
        style={getButtonStyle(playbackRate !== 1)}
      >
        {playbackRate}x
      </button>

      {/* Rewind */}
      <button
        onClick={prevSong}
        className="px-2 py-2 rounded-md border hover:opacity-80"
        style={getButtonStyle(false)}
      >
        <Rewind size={24} />
      </button>

      {/* Play / Pause */}
      <button
        onClick={onPlayPause}
        className="px-2 py-2 rounded-md border hover:opacity-80"
        style={getButtonStyle(isPlaying)}
      >
        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      </button>

      {/* Fast Forward */}
      <button
        onClick={nextSong}
        className="px-2 py-2 rounded-md border hover:opacity-80"
        style={getButtonStyle(false)}
      >
        <FastForward size={24} />
      </button>

      {/* Shuffle */}
      <button
        onClick={toggleShuffle}
        className="px-2 py-2 rounded-md border hover:opacity-80"
        style={getButtonStyle(shuffle)}
      >
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;
