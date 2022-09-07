import { Request, Response } from 'express';

export async function updateSessionHandler(req: Request, res: Response) {
    try {
      console.log(req.body)
      res
        .status(StatusCodes.OK)
        .json({ message: `update session handler` });
    } catch (error) {
      res.sendStatus(500)
    }

}
