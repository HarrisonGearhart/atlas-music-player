import React from "react";
import placeholder from "../assets/placeholder.svg"; // adjust if the filename is different

export default function CoverArt() {
  return (
    <div className="w-48 h-48 overflow-hidden rounded-lg">
      <img
        src={placeholder}
        alt="Cover Art"
        className="w-full h-full object-cover"
      />
    </div>
  );
}