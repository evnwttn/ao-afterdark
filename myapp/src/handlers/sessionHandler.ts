import { Request, Response } from 'express';
import { FileDatabase } from '../services/database';
import { Session } from '../types';

export async function sessionHandler(req: Request, res: Response) {
    try {
      const db = new FileDatabase();
      await db.modifySession(req.body as Session);
      res
        .status(StatusCodes.OK)
    } catch (error) {
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

