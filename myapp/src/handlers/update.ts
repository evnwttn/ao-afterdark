import { Request, Response } from 'express';
import { FileAppend } from '../services/database';
import { Session } from '../types';

export async function updateSessionHandler(req: Request, res: Response) {
    try {
      const db = new FileAppend();
      await db.modifySession(req.body as Session);
      res
        .status(StatusCodes.OK)
    } catch (error) {
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

