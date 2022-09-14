import { Request, Response } from 'express';
import { FileDatabase } from '../services/database';
import { Session } from '../types';

export async function sessionHandler(req: Request, res: Response) {
    try {
      const db = new FileDatabase();
      await db.updateSession(req.body as Session);
      res
        .json({ message: `${req.params.id}` })
        .status(200)
    } catch (error) {
      res.sendStatus(500)
    }

}


