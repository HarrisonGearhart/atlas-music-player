import React from "react";
import { Shuffle, SkipBack, Play, SkipForward, Gauge } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-center gap-6">
      <button className="p-2 hover:scale-110 transition">
        <Gauge size={24} />
      </button>
      <button className="p-2 hover:scale-110 transition">
        <SkipBack size={24} />
      </button>
      <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
        <Play size={28} />
      </button>
      <button className="p-2 hover:scale-110 transition">
        <SkipForward size={24} />
      </button>
      <button className="p-2 hover:scale-110 transition">
        <Shuffle size={24} />
      </button>
    </div>
  );
}