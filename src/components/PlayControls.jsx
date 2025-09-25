import React from "react";
import { Shuffle, SkipBack, Play, SkipForward, Gauge } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-center gap-6">
      <button className="p-2 hover:scale-110 hover:bg-emerald rounded transition text-white">
        <Gauge size={24} />
      </button>
      <button className="p-2 hover:scale-110 hover:bg-emerald rounded transition text-white">
        <SkipBack size={24} />
      </button>
      <button className="p-3 rounded-full bg-emerald hover:bg-amethyst transition text-white">
        <Play size={28} />
      </button>
      <button className="p-2 hover:scale-110 hover:bg-emerald rounded transition text-white">
        <SkipForward size={24} />
      </button>
      <button className="p-2 hover:scale-110 hover:bg-emerald rounded transition text-white">
        <Shuffle size={24} />
      </button>
    </div>
  );
}
