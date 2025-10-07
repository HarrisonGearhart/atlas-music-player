// src/__tests__/MusicPlayer.test.tsx
import { render, screen } from "@testing-library/react";
import { beforeAll, afterEach, afterAll, test, expect } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import MusicPlayer from "../components/MusicPlayer";

// Mocked songs
const mockSongs = [
  {
    title: "Mock Song 1",
    artist: "Artist 1",
    duration: 210,
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

// Setup MSW server inline
const server = setupServer(
  rest.get("/api/v1/songs/playlist.json", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockSongs));
  })
);

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test to avoid test bleed
afterEach(() => server.resetHandlers());

// Close server after all tests
afterAll(() => server.close());

test("renders MusicPlayer with mocked songs", async () => {
  render(<MusicPlayer />);
  
  // Wait for the first mocked song to appear
  const songTitle = await screen.findByText("Mock Song 1");
  expect(songTitle).toBeInTheDocument();
  
  const songArtist = screen.getByText("Artist 1");
  expect(songArtist).toBeInTheDocument();
});
