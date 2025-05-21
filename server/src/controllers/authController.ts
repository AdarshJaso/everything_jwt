import { generateJWTToken } from '../utils/jwt';
import { sendJsonResponse } from '../utils/sendJsonResponse';

export const loginHandler = async (req, res) => {
  let body = '';
  req.on('data', (chunk) => (body += chunk));
  req.on('end', () => {
    const { username, password } = JSON.parse(body);

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

export const protectedHandler = (req, res) => {
  sendJsonResponse(res, 200, { message: `Hello ${req.user.username}, you're authorized!` });
};
