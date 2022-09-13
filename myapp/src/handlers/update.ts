import { Request, Response } from 'express';

export async function updateSessionHandler(req: Request, res: Response) {
    try {
      res
      .status(200)
      .json({ message: `update session handler` });
    } catch (error) {
      res.sendStatus(500)
    }

}