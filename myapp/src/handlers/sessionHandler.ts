import { Request, Response } from 'express';
import { FileDatabase } from '../services/database';
import { Session } from '../types';
import { StatusCodes } from '../types'

function validate(body: Partial<Session>): boolean {
if (body) {
  if (body.author && body.author.length <= 14) {
    if (body.sessionTitle && body.sessionTitle.length <= 14) {
      if (body.tracks && body.tracks.length <= 11) {
        if (body.parameters && body.parameters.length <=10) {
          return true
        }
      }
    }
  }
}

  return false
}

export async function sessionHandler(req: Request, res: Response) {
  const sessionCleared = validate(req.body as Partial<Session>);
  if (!sessionCleared) {
    res.sendStatus(StatusCodes.BAD_REQUEST)
  } 

  try {
    const db = new FileDatabase();
    await db.updateSession(req.body as Session);
    res
      .status(StatusCodes.OK)
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}