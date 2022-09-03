import { Request, Response } from 'express';

export async function newSessionHandler(req: Request, res: Response) {
    try {
      console.log(req.body)
      res
        .status(200)
        .json({ message: `update hit server` });
    } catch (error) {
      res.sendStatus(500)
    }

}
