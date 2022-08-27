import { Request, Response } from 'express';
import * as fs from 'fs/promises';

export async function sessionDataHandler(req: Request, res: Response) {
    console.log(JSON.stringify(req.body, null, 4));
    try {
      await fs.writeFile('test.json', JSON.stringify(req.body, null, 4));
      res
        .status(200)
        .json({ message: `earf is flat` });
    } catch (error) {
      res.sendStatus(500)
    }

}
