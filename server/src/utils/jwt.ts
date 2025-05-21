import jwt from 'jsonwebtoken';

const generateJWTToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_JWT_TOKEN!, { expiresIn: '1h' });
  return token;
};

const verifyJWTToken = (token) => {
  const status = jwt.verify(token, process.env.SECRET_JWT_TOKEN!);
  return status;
};

export { generateJWTToken, verifyJWTToken };
