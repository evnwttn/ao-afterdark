import { Request, Response } from 'express';
import { FileDatabase } from '../services/database';
import { Session } from '../types';
import { StatusCodes } from '../types'

function validate(body: Partial<Session>): boolean {
  if (body) {
    if (body.tracks && body.tracks.length <= 11 ) {
      if (body.parameters && body.parameters.length <= 10) {
        return true
      }
    }
  } else {
    return false
  }
}


export async function sessionHandler(req: Request, res: Response) {
  try {
    console.log(req.body.tracks.length)
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
