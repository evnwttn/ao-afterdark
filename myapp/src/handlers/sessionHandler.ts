import { Request, Response } from 'express';
import { FileDatabase } from '../services/database';
import { Session } from '../types';
import { StatusCodes } from '../types'

// function validate(body: Partial<Session>): boolean {
//   if (typeof body.author === 'string')
// } 


export async function sessionHandler(req: Request, res: Response) {
    try {
      
      const db = new FileDatabase();


      // const myBool = validate(req.body as Partial<Session>);


      // if (!myBool) {
      //   return 4041
      // }

      await db.updateSession(req.body as Session);
      res
        .json({ message: `${req.params.id}` })
        .status(StatusCodes.OK)
    } catch (error) {
      res.sendStatus(500)
    }

}
