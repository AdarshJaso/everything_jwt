import jwt from 'jsonwebtoken';

const generateJWTToken = (payload: any) => {
  const token = jwt.sign(payload, process.env.SECRET_JWT_TOKEN!, { expiresIn: '1h' });
  return token;
};

const verifyJWTToken = (token: string) => {
  const decoded = jwt.verify(token, process.env.SECRET_JWT_TOKEN!);
  return decoded;
};

export { generateJWTToken, verifyJWTToken };
