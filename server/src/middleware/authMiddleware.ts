import { IncomingMessage, ServerResponse } from 'http';

import { verifyJWTToken } from '../utils/jwt';
import { sendJsonResponse } from '../utils/sendJsonResponse';

interface DecodedJWT {
  username: string;
  role: string;
}

declare module 'http' {
  interface IncomingMessage {
    user?: DecodedJWT;
  }
}

type NextFunction = () => void;

export const verifyToken = (
  req: IncomingMessage,
  res: ServerResponse,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return sendJsonResponse(res, 401, { message: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyJWTToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return sendJsonResponse(res, 403, { message: 'Token is invalid or expired' });
  }
};
