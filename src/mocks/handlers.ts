// src/mocks/handlers.ts
import { rest } from "msw";

export const mockSongs = [
  {
    title: "Mock Song 1",
    artist: "Artist 1",
    duration: 210, // seconds
    cover: "https://via.placeholder.com/150",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Mock Song 2",
    artist: "Artist 2",
    duration: 180,
    cover: "https://via.placeholder.com/150",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];

export const handlers = [
  // Intercept the playlist request
  rest.get("/api/v1/songs/playlist.json", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockSongs));
  }),
];
