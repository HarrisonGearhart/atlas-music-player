// src/mocks/server.ts
import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.get("/api/songs", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "Mock Song 1", artist: "Artist 1" },
        { id: 2, title: "Mock Song 2", artist: "Artist 2" },
      ])
    );
  }),
];

export const server = setupServer(...handlers);
