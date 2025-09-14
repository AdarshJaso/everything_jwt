import { IncomingMessage, ServerResponse } from 'http';

import { generateJWTToken } from '../utils/jwt';
import { sendJsonResponse } from '../utils/sendJsonResponse';

interface LoginRequestBody {
  username: string;
  password: string;
}

export const loginHandler = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  let body = '';
  req.on('data', (chunk: Buffer) => (body += chunk));
  req.on('end', () => {
    const { username, password }: LoginRequestBody = JSON.parse(body);

    if (username === 'admin' && password === '1234') {
      const token = generateJWTToken({ username, role: 'admin' });
      sendJsonResponse(res, 200, { token: token });
    } else if (username === 'user' && password === 'testuser') {
      const token = generateJWTToken({ username, role: 'user' });
      sendJsonResponse(res, 200, { token: token });
    } else {
      sendJsonResponse(res, 401, { error: 'Invalid credentials' });
    }
  });
};

export const protectedHandler = (req: IncomingMessage, res: ServerResponse): void => {
  if (req['user']) {
    sendJsonResponse(res, 200, { message: `Hello ${req['user'].username}, you're authorized!` });
  } else {
    sendJsonResponse(res, 401, { error: 'Unauthorized' });
  }
};
