import { Request, Response } from 'express';
import * as fs from 'fs/promises';

export async function newSessionHandler(req: Request, res: Response) {
    try {
      await fs.writeFile('test.json', JSON.stringify(req.body, null, 1));
      res
        .status(200)
        .json({ message: `${req.body.author} session recieved` });
    } catch (error) {
      res.sendStatus(500)
    }

}

