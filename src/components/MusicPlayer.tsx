import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

export interface Song {
  title: string;
  artist: string;
  length: string; // mm:ss
  cover: string;  // cover URL
  src: string;    // audio file URL
}

export default function MusicPlayer() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [highlightColor, setHighlightColor] = useState<string>("var(--color-emerald)");

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const res = await fetch("/api/v1/songs/playlist.json");
        const data = await res.json();

        const formattedSongs: Song[] = data.map((song: any) => ({
          title: song.title,
          artist: song.artist,
          length: new Date(song.duration * 1000).toISOString().substr(14, 5),
          cover: song.cover,
          src: song.song,
        }));

        setSongs(formattedSongs);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch playlist:", err);
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  // Dynamic highlight color based on dark mode
  useEffect(() => {
    const updateHighlight = () => {
      const isDark = document.body.classList.contains("dark");
      setHighlightColor(isDark ? "#9b59b6" : "var(--color-emerald)"); // amethyst in dark mode
    };

    updateHighlight();

    const observer = new MutationObserver(() => updateHighlight());
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const nextSong = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentIndex(randomIndex);
    } else {
      setCurrentIndex((prev) => (prev < songs.length - 1 ? prev + 1 : prev));
    }
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setIsPlaying(true);
  };

  const toggleShuffle = () => setShuffle((prev) => !prev);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <CurrentlyPlaying
        song={songs[currentIndex]}
        nextSong={nextSong}
        prevSong={prevSong}
        shuffle={shuffle}
        toggleShuffle={toggleShuffle}
        highlightColor={highlightColor}
      />
      <Playlist
        songs={songs}
        selectedIndex={currentIndex}
        onSelect={(index) => {
          setCurrentIndex(index);
          setIsPlaying(true);
        }}
        highlightColor={highlightColor}
      />
    </div>
  );
}
