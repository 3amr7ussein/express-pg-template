import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createToken, encrypt } from '../utils';

export const user_GET = async (req: Request, res: Response) => {
  console.log(req.body);
  res.send(createToken(req.body));
  // res.send(encrypt(req.body as string));
};
