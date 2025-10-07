import React from "react";

type VolumeControlsProps = {
  volume: number;
  setVolume: (value: number) => void;
  playbackRate: number;
  setPlaybackRate: (value: number) => void;
};

export default function VolumeControls({
  volume,
  setVolume,
  playbackRate,
  setPlaybackRate,
}: VolumeControlsProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Volume Slider */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-[var(--color-text)]">Volume:</label>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm">{volume}%</span>
      </div>

      {/* Playback Rate */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-[var(--color-text)]">Speed:</label>
        <select
          value={playbackRate}
          onChange={(e) => setPlaybackRate(Number(e.target.value))}
          className="px-2 py-1 rounded border border-gray-400 bg-[var(--color-midnight)] text-[var(--color-text)]"
        >
          {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
            <option key={rate} value={rate}>
              {rate}x
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
