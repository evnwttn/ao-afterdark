import { Request, Response } from 'express';
import { FileAppend } from '../services/database';
import { Session } from '../types';

export async function updateSessionHandler(req: Request, res: Response) {
    try {
      const db = new FileAppend();
      await db.modifySession(req.body as Session);
      res
        .status(200)
        .json({ message: `${req.body.author} session recieved` });
    } catch (error) {
      res.sendStatus(500)
    }

}

