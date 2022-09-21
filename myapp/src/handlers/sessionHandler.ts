import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { Session } from "../types";
import { StatusCodes } from "../types";

function validate(body: Partial<Session>): boolean {
  if (body) {
    if (body.author && body.author.length <= 14) {
      if (body.sessionTitle && body.sessionTitle.length <= 14) {
        if (body.tracks && body.tracks.length <= 11) {
          if (body.parameters && body.parameters.length <= 10) {
            return true;
          }
        }
      }
    }
  }

  // Fail if author length is greater than 14
  // if (body.author?.length ?? 0 > 14) {
  //   return false
  // }

  // if (body.sessionTitle?.length ?? 0 > 14) {
  //   return false
  // }

  return true;
}

export async function sessionHandler(req: Request, res: Response) {
  const sessionValidated = validate(req.body as Partial<Session>);
  if (!sessionValidated) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  try {
    const db = new FileDatabase();

    if (req.method === "POST") {
      await db.createSession(req.body as Session);
    } else {
      await db.updateSession(req.body as Session);
    }
    res.status(StatusCodes.OK).json(req.body as Session);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
