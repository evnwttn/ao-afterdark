import { Request, Response } from 'express';
import { FileDatabase } from '../services/database';
import { Session } from '../types';
import { StatusCodes } from '../types'

export async function sessionHandler(req: Request, res: Response) {
  try {
    console.log('yo')
    const db = new FileDatabase();
    await db.updateSession(req.body as Session);
    res
      .status(StatusCodes.OK)
  } catch (error) {
    res.sendStatus(500)
  }
}

// function validate(body: Partial<Session>): boolean {
//   if (typeof body.author === 'string')
// } 

    // const myBool = validate(req.body as Partial<Session>);


    // if (!myBool) {
    //   return 4041
    // }
