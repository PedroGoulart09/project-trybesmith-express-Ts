import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const senhasecreta = 'BATATA';

const jwtConfig : SignOptions = {
  expiresIn: '20m',
  algorithm: 'HS256',
};

const generateJWT = (payload: string) => {
  const generateToken = jwt.sign({ data: payload }, senhasecreta, jwtConfig);

  return generateToken;
};

export default generateJWT;