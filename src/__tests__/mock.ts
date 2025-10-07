// src/mocks/mock.ts
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  // Example mock endpoint — replace this URL with the one your component actually fetches
  http.get("https://api.example.com/cover-art", () => {
    return HttpResponse.json({
      id: 1,
      title: "Mock Album",
      artist: "Test Artist",
      imageUrl: "https://example.com/mock-cover.jpg",
    });
  }),
];

export const server = setupServer(...handlers);
