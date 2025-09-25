import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-amethyst dark:bg-bg-dark rounded-xl shadow-lg w-full max-w-md animate-pulse transition-colors duration-300">
      
      {/* Cover Art Placeholder */}
      <div className="w-48 h-48 bg-gray-400 dark:bg-gray-600 rounded-lg"></div>
      
      {/* Song Title Placeholder */}
      <div className="w-32 h-6 bg-gray-400 dark:bg-gray-600 rounded"></div>
      <div className="w-24 h-4 bg-gray-300 dark:bg-gray-500 rounded"></div>
      
      {/* Controls Placeholder */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        <div className="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
      </div>

      {/* Volume Bar Placeholder */}
      <div className="w-48 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-4"></div>
      
    </div>
  );
}
