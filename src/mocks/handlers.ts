import { rest } from 'msw';

export const handlers = [
  // Mock your songs API
  rest.get('/api/songs', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Song A', artist: 'Artist 1' },
        { id: 2, title: 'Song B', artist: 'Artist 2' },
      ])
    );
  }),
];
