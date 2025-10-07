// src/__tests__/mock.ts
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

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

export const handlers = [
  http.get("/api/playlist", () => HttpResponse.json(mockPlaylist)),
  http.get("/api/song/:id", ({ params }) => {
    const song = mockPlaylist.find(s => s.id === params.id);
    return song ? HttpResponse.json(song) : new HttpResponse(null, { status: 404 });
  }),
  http.get("/api/lyrics/:id", () => HttpResponse.json({ lyrics: "Test lyrics content" })),
];

export const server = setupServer(...handlers);
