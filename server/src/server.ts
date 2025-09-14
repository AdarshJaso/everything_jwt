import http, { IncomingMessage, ServerResponse } from 'http';

import dotenv from 'dotenv';

import { router } from './routes/routes';

dotenv.config();

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  router(req, res);
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
