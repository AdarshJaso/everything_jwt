import { IncomingMessage, ServerResponse } from 'http';

import { loginHandler, protectedHandler } from '../controllers/authController';
import { verifyToken } from '../middleware/authMiddleware';
import { sendJsonResponse } from '../utils/sendJsonResponse';

const router = async (req: IncomingMessage, res: ServerResponse) => {
  const { pathname } = new URL(req.url!, `http://${req.headers.host}`);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'POST' && pathname === '/api/login') {
    return loginHandler(req, res);
  }

  if (req.method === 'GET' && pathname === '/api/protected') {
    return verifyToken(req, res, () => protectedHandler(req, res));
  }

  sendJsonResponse(res, 404, { message: 'Not Found' });
};
export { router };
