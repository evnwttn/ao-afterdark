import { Request, Response } from 'express';
import * as fs from 'fs/promises';
import { FileDatabase } from '../services/database';
import { Session } from '../types';

export async function newSessionHandler(req: Request, res: Response) {
    try {
      const db = new FileDatabase();
      await db.createNewSession(req.body as Session);
      res
        .status(200)
        .json({ message: `${req.body.author} session recieved` });
    } catch (error) {
      res.sendStatus(500)
    }

}

