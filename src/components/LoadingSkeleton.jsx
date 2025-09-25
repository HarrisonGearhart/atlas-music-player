import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-xl shadow bg-[var(--color-midnight)] w-80 animate-pulse">
      {/* Cover art skeleton */}
      <div className="w-48 h-48 bg-[var(--color-emerald)] rounded-lg"></div>

      {/* Song title + artist skeleton */}
      <div className="w-full flex flex-col items-center gap-2">
        <div className="h-5 w-32 bg-[var(--color-amethyst)] rounded"></div>
        <div className="h-4 w-20 bg-[var(--color-amethyst)] rounded"></div>
      </div>

      {/* Controls skeleton */}
      <div className="flex items-center justify-center gap-6 w-full">
        <div className="h-8 w-8 bg-[var(--color-emerald)] rounded-full"></div>
        <div className="h-10 w-10 bg-[var(--color-azure)] rounded-full"></div>
        <div className="h-8 w-8 bg-[var(--color-emerald)] rounded-full"></div>
      </div>

      {/* Volume skeleton */}
      <div className="flex items-center gap-2 w-48">
        <div className="h-6 w-6 bg-[var(--color-emerald)] rounded-full"></div>
        <div className="h-2 flex-1 bg-[var(--color-azure)] rounded"></div>
      </div>

      {/* Playlist rows skeleton */}
      <div className="flex flex-col gap-2 w-full mt-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-4 py-2 bg-[var(--color-amethyst)] rounded"
          >
            <div className="flex flex-col gap-1">
              <div className="h-4 w-32 bg-[var(--color-midnight)] rounded"></div>
              <div className="h-3 w-20 bg-[var(--color-midnight)] rounded"></div>
            </div>
            <div className="h-3 w-10 bg-[var(--color-midnight)] rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
