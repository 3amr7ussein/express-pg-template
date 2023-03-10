import config from './config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './interfaces/user.interface';
const { PEPPER, TOKEN_SECRET } = config;

export const hash = (password: string): string => {
  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(password + PEPPER, salt);
  return hashedPassword;
};

export const createToken = (payload: User): string => {
  return jwt.sign(payload, TOKEN_SECRET as string);
};

export const verifyToken = (token: string) => {
  const payload = jwt.verify(token, TOKEN_SECRET as string);
  return payload;
};
