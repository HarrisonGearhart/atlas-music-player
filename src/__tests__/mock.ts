import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

// Sample playlist used for mocking API responses
export const mockPlaylist = [
  {
    id: '1',
    title: 'First Song',
    artist: 'Artist One',
    genre: 'Pop',
    duration: '3:30',
    cover: '/cover1.jpg',
    song: '/song1.mp3'
  },
  {
    id: '2',
    title: 'Second Song',
    artist: 'Artist Two',
    genre: 'Rock',
    duration: '4:15',
    cover: '/cover2.jpg',
    song: '/song2.mp3'
  },
  {
    id: '3',
    title: 'Third Song',
    artist: 'Artist Three',
    genre: 'Jazz',
    duration: '5:20',
    cover: '/cover3.jpg',
    song: '/song3.mp3'
  }
];

// Define the mock API routes
export const handlers = [
  // Returns the full playlist when the playlist endpoint is called
  http.get("/api/playlist", () => {
    return HttpResponse.json(mockPlaylist);
  }),

  // Returns a specific song by ID; responds with 404 if not found
  http.get("/api/song/:id", ({ params }) => {
    const song = mockPlaylist.find(s => s.id === params.id);
    if (!song) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(song);
  }),

  // Returns placeholder lyrics for any song ID requested
  http.get("/api/lyrics/:id", () => {
    return HttpResponse.json({ lyrics: 'Test lyrics content' });
  }),
];

// Create and export the MSW server instance with the handlers
export const server = setupServer(...handlers);
