import React from "react";

export default function VolumeControls() {
  return (
    <div className="flex items-center gap-2 w-48">
      <input
        type="range"
        min="0"
        max="100"
        className="w-full accent-emerald dark:accent-amethyst transition-colors duration-300"
      />
    </div>
  );
}
