import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { user_GET } from '../handlers/user.handler';
import { verifyToken } from '../utils';

const userRoutes = express.Router();

userRoutes.get('/', user_GET);

userRoutes.get('/compare', async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.token);
  try {
    const payload = verifyToken(req.body.token);
    res.send(payload);
  } catch (err) {
    next(err);
    return;
  }
});

export default userRoutes;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYU1yIiwiaWQiOiJibGEgYmxhIGJsYSIsImlhdCI6MTY3MjIwNzc5Mn0.JbXL-zVfrfB9ISh6x2WWpYyY6ljfbS-uJfKS1zi6StU
